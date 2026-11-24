<script lang="ts">
	import { tick } from 'svelte';
	import SearchableSelect, { type Choice } from '#lib/SearchableSelect.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolTitle from '#lib/ToolTitle.svelte';
	import { QR_CODE, SITE_URL, TITLE_SUFFIX, WHATSAPP } from '#lib/content.js';
	import { COUNTRIES, DEFAULT_COUNTRY_NAME, searchNames } from '#lib/countries.js';
	import {
		actionLine,
		field,
		label,
		primaryButton,
		secondaryButtonOnPage,
		smallButtonOnPage
	} from '#lib/styles.js';
	import {
		chatLink,
		chatTarget,
		countriesWithCode,
		waitsForTyping,
		withoutDoubledCode
	} from '#lib/whatsapp.js';
	import Caution from '#lib/Caution.svelte';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';

	// Chosen by name, since countries share codes: the United States and Canada are both +1, and
	// people look for their country, not its code.
	const choices: Choice[] = COUNTRIES.map((country) => ({
		value: country.name,
		label: `+${country.phoneCode}${country.areaCodes ? ` ${country.areaCodes.join('/')}` : ''} ${country.name}`,
		searchTerms: searchNames(country.name)
	}));

	let countryName = $state(DEFAULT_COUNTRY_NAME);
	const countryCode = $derived(
		COUNTRIES.find((country) => country.name === countryName)?.phoneCode ?? ''
	);
	let typed = $state('');
	let message = $state('');
	let copied: 'yes' | 'failed' | undefined = $state();
	let copiedTimer: ReturnType<typeof setTimeout> | undefined;

	const result = $derived(chatTarget(countryCode, typed, message));
	// The example is Indonesian: shown only for Indonesia, where it's the shape people write.
	const placeholder = $derived(countryName === DEFAULT_COUNTRY_NAME ? WHATSAPP.placeholder : '');
	const target = $derived(result && 'link' in result ? result : undefined);
	// A problem every number has halfway through waits until the typing stops, or the field is
	// left; one that can't come right however the number ends is said at once.
	const WAIT_FOR = 800;
	let typingStopped = $state(true);
	let typingTimer: ReturnType<typeof setTimeout> | undefined;
	function typing() {
		typingStopped = false;
		clearTimeout(typingTimer);
		typingTimer = setTimeout(stoppedTyping, WAIT_FOR);
	}
	function stoppedTyping() {
		clearTimeout(typingTimer);
		typingStopped = true;
	}
	const problem = $derived.by(() => {
		const found = result && 'problem' in result ? result.problem : undefined;
		return found && waitsForTyping(found) && !typingStopped ? undefined : found;
	});
	// The number with its country code once, when it was typed twice and once makes it work.
	const fixed = $derived(problem ? withoutDoubledCode(countryCode, typed, message) : undefined);
	function useFixed() {
		if (!fixed) return;
		typed = fixed.display;
		document.getElementById('number')?.focus();
	}
	// Which country the number is for: the one chosen, or, for a number typed with its own code,
	// the countries that code belongs to.
	const countryOfTarget = $derived.by(() => {
		if (!target) return '';
		if (target.countryCode === countryCode) return countryName;
		return countriesWithCode(target.countryCode).join(' or ');
	});
	// What was decided on the person's behalf, for them to check.
	const notes = $derived(
		target
			? [
					target.lettersDropped && WHATSAPP.result.lettersDropped,
					target.extension && WHATSAPP.result.extension(target.extension),
					target.short && WHATSAPP.result.short
				].filter((note): note is string => Boolean(note))
			: []
	);

	// The message field waits until it's asked for: most people don't send one.
	let messageShown = $state(false);
	async function showMessage() {
		messageShown = true;
		await tick();
		document.getElementById('message')?.focus();
	}
	// Taken back out: the field goes, and its words with it, so the link and the code have no message
	// again. Focus goes to "Add a message", where the field was, rather than back to the page's top.
	async function removeMessage() {
		message = '';
		messageShown = false;
		await tick();
		document.getElementById('add-message')?.focus();
	}
	const hasMessage = $derived(message.trim() !== '');
	// The link, handed to the QR code tool after the #, which stays in the browser and never reaches
	// a server: the code is made there, raw, to save as PNG or SVG. Without the message: a printed
	// code is for everyone who scans it, not the one customer a message was typed for.
	const qrHandOff = $derived(
		target
			? `${resolve(QR_CODE.path)}#text=${encodeURIComponent(chatLink(target.number))}`
			: undefined
	);

	async function copyLink() {
		if (!target) return;
		try {
			await navigator.clipboard.writeText(target.link);
			copied = 'yes';
		} catch {
			copied = 'failed';
		}
		clearTimeout(copiedTimer);
		copiedTimer = setTimeout(() => (copied = undefined), 3000);
	}
</script>

<Seo
	title="{WHATSAPP.name}{TITLE_SUFFIX}"
	description={WHATSAPP.description}
	path={WHATSAPP.path}
	structuredData={{
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: WHATSAPP.name,
		description: WHATSAPP.description,
		url: `${SITE_URL}${WHATSAPP.path}`,
		applicationCategory: 'UtilitiesApplication',
		operatingSystem: 'Any',
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: 'https://itrium.id' }
	}}
/>

<ToolTitle
	tool="whatsapp"
	title={WHATSAPP.name}
	introduction={WHATSAPP.introduction}
	width="max-w-xl lg:max-w-6xl"
/>

<!-- No card: the fields, then under a plain line the answer, as Split bill's parts are. From
     1024px the answer has its own column beside the fields. -->
<form
	class="mx-auto max-w-xl px-5 pt-4 pb-20 sm:px-8 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start"
	onsubmit={(event) => event.preventDefault()}
>
	<div class="space-y-4 pb-5 lg:pr-16 lg:pb-0">
		<div>
			<label for="country" class={label}>Country</label>
			<SearchableSelect
				id="country"
				{choices}
				value={countryName}
				onchange={(value) => (countryName = value)}
				placeholder="Type a country or a code"
			/>
		</div>

		<div>
			<label for="number" class={label}>Phone number</label>
			<input
				id="number"
				type="tel"
				inputmode="tel"
				autocomplete="off"
				bind:value={typed}
				oninput={typing}
				onblur={stoppedTyping}
				{placeholder}
				aria-describedby="number-hint number-reads number-problem"
				aria-invalid={problem ? true : undefined}
				class="{field} aria-invalid:border-accent-edge"
			/>
			<!-- One slot under the field, two lines tall, for whichever line has something to say: how a
			     number with its country is read (before anything's typed), what the number reads as, or
			     what's wrong. What's under it doesn't move when one gives way to another. -->
			<div class="mt-1.5 min-h-10 text-sm">
				{#if !typed.trim()}
					<p id="number-hint" class="text-muted">{WHATSAPP.hint}</p>
				{/if}
				<!-- What the number reads as: on a phone the keyboard covers the answer below, and this
				     is the line to check against what was typed. -->
				{#if target}
					<p id="number-reads" class="text-muted tabular-nums">
						{WHATSAPP.reads(target.display, countryOfTarget)}
					</p>
				{/if}
				<p id="number-problem" class="flex gap-2 font-medium" role="status">
					{#if problem}<Caution class="mt-0.5" />{WHATSAPP.problems[problem]}{/if}
				</p>
				{#if fixed}
					<button
						type="button"
						onclick={useFixed}
						class="{secondaryButtonOnPage} mt-2 tabular-nums"
					>
						{WHATSAPP.useFixed(fixed.display)}
					</button>
				{/if}
			</div>
		</div>

		<!-- The message goes in the link, so it comes before the answer: typed after it, it changed a
		     link (and the code) above the person, out of sight. Most people don't send one, so the
		     field waits until it's asked for, and stays until it's removed. -->
		{#if messageShown || hasMessage}
			<div>
				<div class="mb-1.5 flex items-center justify-between gap-3">
					<label for="message" class="{label} mb-0!"
						>Message <span class="text-muted">(optional)</span></label
					>
					<button
						type="button"
						onclick={() => void removeMessage()}
						class="-my-2 min-h-9 text-sm font-medium text-muted underline underline-offset-4 hover:text-text pointer-coarse:min-h-11"
					>
						{WHATSAPP.removeMessage}
					</button>
				</div>
				<textarea
					id="message"
					bind:value={message}
					rows="3"
					placeholder="Hi! I'd like to ask about…"
					class="{field} resize-y"></textarea>
			</div>
		{:else}
			<button
				type="button"
				id="add-message"
				onclick={() => void showMessage()}
				class={smallButtonOnPage}
			>
				{WHATSAPP.addMessage}
			</button>
		{/if}
	</div>

	<!-- The answer: what the link is for, anything to check, the way to a printed code (the QR code
	     tool, with this link in it), then the two actions. Everything about the answer sits
	     right under the fields it comes from, so nothing floats over it on a short phone. -->
	<section
		aria-labelledby="result-heading"
		class="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
	>
		<h2 id="result-heading" class="mb-2 text-2xl font-extrabold tracking-[-0.03em]">
			{WHATSAPP.result.heading}
		</h2>
		{#if target}
			{#if notes.length}
				<ul class="mb-3 space-y-1.5 text-sm font-medium">
					{#each notes as note (note)}
						<li class="flex gap-2"><Caution class="mt-0.5" />{note}</li>
					{/each}
				</ul>
			{/if}
			<p class="text-sm leading-relaxed text-muted">{WHATSAPP.result.useIt}</p>
			<!-- For a shop's counter or a card: the QR code tool, with this link already in it. -->
			{#if qrHandOff}
				<a href={qrHandOff} class="group mt-1 min-h-9 text-sm pointer-coarse:min-h-11 {actionLine}"
					>{WHATSAPP.result.makeQr}<Arrow
						class="transition-transform duration-200 motion-safe:group-hover:translate-x-1"
					/></a
				>
			{/if}
		{:else}
			<p class="text-sm leading-relaxed text-muted">{WHATSAPP.result.empty}</p>
		{/if}

		{#if target}
			<!-- Side by side, each as wide as its words need, with less padding than a button on its
			     own (px-4! wins over the shared px-6) so both fit a phone; on the narrowest phones
			     Copy moves under Open rather than either breaking onto two lines. -->
			<div class="mt-5 flex flex-wrap gap-3">
				<a
					href={target.link}
					target="_blank"
					rel="external noopener noreferrer"
					class="{primaryButton} grow px-4! py-3.5 text-base whitespace-nowrap"
				>
					Open in WhatsApp<span class="sr-only"> (opens in a new tab)</span>
				</a>
				<button
					type="button"
					onclick={copyLink}
					class="{secondaryButtonOnPage} grow px-4! py-3.5 text-base whitespace-nowrap"
				>
					<!-- Says it worked where the press was, and in the line under it for screen readers.
					     Both words share one cell, so the button keeps its width when they swap. -->
					<span class="grid">
						<span class="invisible col-start-1 row-start-1" aria-hidden="true"
							>{WHATSAPP.result.copy}</span
						>
						<span class="col-start-1 row-start-1"
							>{copied === 'yes' ? WHATSAPP.result.copied : WHATSAPP.result.copy}</span
						>
					</span>
				</button>
			</div>
		{/if}
		<p class="mt-3 text-sm empty:mt-0" role="status">
			<!-- What a press did, under the buttons, where nothing below it can be pushed away. -->
			{#if copied === 'yes'}{WHATSAPP.result.linkCopied}{:else if copied === 'failed'}{WHATSAPP
					.result.copyFailed}{/if}
		</p>
		<!-- The link itself, only when copying it failed: to select and copy by hand. -->
		{#if target && copied === 'failed'}
			<input
				readonly
				value={target.link}
				aria-label={WHATSAPP.result.heading}
				onfocus={(event) => event.currentTarget.select()}
				class="{field} mt-2"
			/>
		{/if}
	</section>
</form>
