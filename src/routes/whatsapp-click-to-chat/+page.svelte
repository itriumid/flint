<script lang="ts">
	import { tick } from 'svelte';
	import SearchableSelect, { type Choice } from '#lib/SearchableSelect.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolTitle from '#lib/ToolTitle.svelte';
	import { SITE_URL, TITLE_SUFFIX, WHATSAPP } from '#lib/content.js';
	import { COUNTRIES, DEFAULT_COUNTRY_NAME, searchNames } from '#lib/countries.js';
	import {
		checkbox,
		checkRow,
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
	import { drawnSize, qrFileName, qrModules, qrPath } from '#lib/qr.js';

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
	// A message goes into the code too, unless the person leaves it out: a shop printing one code
	// for everyone may not want one customer's message on it, and a shorter link scans better.
	let messageOutOfCode = $state(false);
	const hasMessage = $derived(message.trim() !== '');
	const codeLink = $derived(
		target && hasMessage && messageOutOfCode ? chatLink(target.number) : target?.link
	);
	// Drawn as the number is typed, so the code on screen is always the one Save hands over.
	const modules = $derived(codeLink ? qrModules(codeLink) : undefined);

	/**
	 * The code as a PNG, drawn on a canvas here and handed over as a file: nothing is uploaded.
	 * Under it, below its white margin (which scanners need clear), what it's for and the number,
	 * so a printed code can be checked by eye and used by someone without a camera.
	 */
	// The file last handed to the browser: said under Save, since a download can land unseen
	// (Safari asks first, phones file it away). It's said only while the number is the same.
	let savedFile: string | undefined = $state();
	const savedNow = $derived(
		target && savedFile === qrFileName(target.number) ? savedFile : undefined
	);

	async function saveQr() {
		if (!modules || !target) return;
		const scale = 24;
		const width = drawnSize(modules) * scale;
		const labelHeight = 176;
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = width + labelHeight;
		const context = canvas.getContext('2d');
		if (!context) return;
		const font = 'Plus Jakarta Sans Variable';
		await Promise.all([
			document.fonts.load(`600 40px "${font}"`),
			document.fonts.load(`700 60px "${font}"`)
		]);
		context.fillStyle = '#ffffff';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = '#2b2b2b';
		context.textAlign = 'center';
		context.font = `600 40px "${font}", sans-serif`;
		// Both lines below the code's white margin (the image's top `width` pixels), which scanners
		// need clear: the first line's capitals start about 10px under it.
		context.fillText(WHATSAPP.qr.printLabel, width / 2, width + 40);
		context.font = `700 60px "${font}", sans-serif`;
		context.fillText(target.display, width / 2, width + 120, width - 2 * scale);
		// The path is in modules; each module is `scale` pixels.
		context.scale(scale, scale);
		context.fill(new Path2D(qrPath(modules)));
		const name = qrFileName(target.number);
		canvas.toBlob((blob) => {
			if (!blob) return;
			const url = URL.createObjectURL(blob);
			const link = Object.assign(document.createElement('a'), { href: url, download: name });
			link.click();
			savedFile = name;
			setTimeout(() => URL.revokeObjectURL(url), 1000);
		}, 'image/png');
	}

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
		     field waits until it's asked for, and stays once it has words in it. -->
		{#if messageShown || hasMessage}
			<div>
				<label for="message" class={label}>Message <span class="text-muted">(optional)</span></label
				>
				<textarea
					id="message"
					bind:value={message}
					rows="3"
					placeholder="Hi! I'd like to ask about…"
					class="{field} resize-y"></textarea>
			</div>
		{:else}
			<button type="button" onclick={() => void showMessage()} class={smallButtonOnPage}>
				{WHATSAPP.addMessage}
			</button>
		{/if}
	</div>

	<!-- The answer, shown as what it becomes: the code as it will print, beside what the link is
	     for; then anything to check, and the two actions. Everything about the answer sits right
	     under the fields it comes from, so nothing floats over it on a short phone. -->
	<section
		aria-labelledby="result-heading"
		class="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
	>
		<div class="flex items-start gap-5 lg:gap-8">
			<!-- The print: what Save hands over, drawn the same way. White with graphite in both
			     themes: scanners read dark on light, and it's what prints. Empty, it holds its place,
			     so nothing moves when the first number reads as one, and in dark mode it waits in the
			     page's raised gray rather than glaring white. -->
			<div
				class="w-36 shrink-0 border border-border px-2 pt-2 pb-3 text-center sm:w-44 lg:w-56 {target
					? 'bg-white text-on-accent'
					: 'bg-white text-on-accent dark:bg-surface dark:text-muted'}"
			>
				{#if modules && target}
					<svg
						viewBox="0 0 {drawnSize(modules)} {drawnSize(modules)}"
						role="img"
						aria-label={WHATSAPP.qr.alt(target.display)}
						shape-rendering="crispEdges"
						class="block w-full"
					>
						<path d={qrPath(modules)} fill="currentColor" />
					</svg>
				{:else}
					<div class="m-[7%] aspect-square bg-black/5 dark:bg-white/5"></div>
				{/if}
				<!-- The saved image's two lines, said here for the eye: the code above is already named. -->
				<div aria-hidden="true">
					<p class="text-xs font-semibold">{WHATSAPP.qr.printLabel}</p>
					<p
						class="min-h-4 text-xs leading-tight font-extrabold break-words tabular-nums lg:min-h-5 lg:text-sm"
					>
						{target?.display ?? ''}
					</p>
				</div>
			</div>

			<div class="min-w-0">
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
					<!-- For someone making a link for their own number: where it goes, and a check before
					     it's printed, since a printed mistake can't be fixed. -->
					<p class="text-sm leading-relaxed text-muted">{WHATSAPP.result.useIt}</p>
					<button type="button" onclick={() => void saveQr()} class="{smallButtonOnPage} mt-3"
						>{WHATSAPP.qr.save}</button
					>
				{:else}
					<p class="text-sm leading-relaxed text-muted">{WHATSAPP.result.empty}</p>
				{/if}
			</div>
		</div>

		{#if target}
			{#if hasMessage}
				<!-- The box first and what the code holds under it, in one line either way, so ticking
				     it moves nothing under the finger. -->
				<div class="mt-5">
					<label class={checkRow}>
						<input type="checkbox" bind:checked={messageOutOfCode} class={checkbox} />
						{WHATSAPP.qr.leaveMessageOut}
					</label>
					<p class="text-sm text-muted">
						{messageOutOfCode ? WHATSAPP.qr.leavesMessageOut : WHATSAPP.qr.includesMessage}
					</p>
				</div>
			{/if}
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
			<!-- What a press did, under the buttons, where nothing below it can be pushed away: a copy,
			     or a code handed to the browser, which can land with nothing on screen saying so. -->
			{#if copied === 'yes'}{WHATSAPP.result.linkCopied}{:else if copied === 'failed'}{WHATSAPP
					.result.copyFailed}{:else if savedNow}{WHATSAPP.qr.saved(savedNow)}{/if}
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
