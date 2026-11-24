<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Caution from '#lib/Caution.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolTitle from '#lib/ToolTitle.svelte';
	import SearchableSelect, { type Choice } from '#lib/SearchableSelect.svelte';
	import { QR_CODE, SITE_URL, TITLE_SUFFIX, WHATSAPP } from '#lib/content.js';
	import { COUNTRIES, searchNames } from '#lib/countries.js';
	import { countriesWithCode } from '#lib/whatsapp.js';
	import { drawnSize, pngScale, qrModules, qrPath, qrSvg, QR_CAPACITY } from '#lib/qr.js';
	import {
		codeFileName,
		codeFor,
		emptyEntries,
		phoneNumber,
		KINDS,
		textFromHash,
		waitsForTyping,
		withScheme,
		type Kind
	} from '#lib/qr-code.js';
	import { field, label, primaryButton, secondaryButtonOnPage } from '#lib/styles.js';

	// What's typed is kept for every kind, so picking another kind and coming back loses nothing.
	let kind: Kind = $state('text');
	const entries = $state(emptyEntries());

	const made = $derived(codeFor(kind, entries));

	// A phone number is read the way WhatsApp click-to-chat reads one, in the country chosen, and
	// said back under its field as the code will dial it: in full, so it works from anywhere.
	const choices: Choice[] = COUNTRIES.map((country) => ({
		value: country.name,
		label: `+${country.phoneCode}${country.areaCodes ? ` ${country.areaCodes.join('/')}` : ''} ${country.name}`,
		searchTerms: searchNames(country.name)
	}));
	const readable = (read: ReturnType<typeof phoneNumber>) =>
		read && 'display' in read ? { ...read, chosen: '' } : undefined;
	const phoneRead = $derived.by(() => {
		const read = readable(phoneNumber(entries.phone.country, entries.phone.number));
		return read && { ...read, chosen: entries.phone.country };
	});
	const contactRead = $derived.by(() => {
		const read = readable(phoneNumber(entries.contact.country, entries.contact.phone));
		return read && { ...read, chosen: entries.contact.country };
	});
	/** Which country a number is for: the one chosen, or the ones its own code belongs to. */
	const countryOf = (read: { countryCode: string; chosen: string }) => {
		const code = COUNTRIES.find((country) => country.name === read.chosen)?.phoneCode;
		return read.countryCode === code
			? read.chosen
			: countriesWithCode(read.countryCode).join(' or ');
	};
	const code = $derived(made && 'data' in made ? made : undefined);
	// Drawn as each character is typed, so the code on screen is always the one Save hands over.
	const modules = $derived(code ? qrModules(code.data) : undefined);

	// An address or a number is wrong halfway through typing it: that waits until the typing stops,
	// or the field is left. Too long can't come right by typing more, so it's said at once.
	let typingStopped = $state(true);
	let typingTimer: ReturnType<typeof setTimeout> | undefined;
	function typing() {
		typingStopped = false;
		clearTimeout(typingTimer);
		typingTimer = setTimeout(stoppedTyping, 800);
	}
	function stoppedTyping() {
		clearTimeout(typingTimer);
		typingStopped = true;
	}
	const problem = $derived.by(() => {
		if (!made || !('problem' in made)) return undefined;
		return waitsForTyping(made) && !typingStopped ? undefined : made;
	});
	const problemText = $derived(
		problem
			? problem.problem === 'too-long'
				? QR_CODE.problems['too-long']((problem.bytes ?? 0) - QR_CAPACITY)
				: problem.problem === 'phone'
					? problem.phone && QR_CODE.problems.phone(problem.phone)
					: QR_CODE.problems[problem.problem]
			: undefined
	);

	// A web address typed without https:// is text to a phone: the fix is offered under the field.
	const schemed = $derived(kind === 'text' ? withScheme(entries.text) : undefined);
	function useScheme() {
		if (!schemed) return;
		entries.text = schemed;
		document.getElementById('text')?.focus();
	}

	// Picking a kind on the shelf puts its fields where the first part's are, and focus into them,
	// so the next thing typed goes where the person is looking.
	async function pick(next: Kind) {
		kind = next;
		stoppedTyping();
		await tick();
		const first = document.getElementById(`${next}-first`) ?? document.getElementById('text');
		first?.focus();
		first?.scrollIntoView({ block: 'center' });
	}
	const shelf = $derived(KINDS.filter((other) => other !== kind));

	// A link handed over from another tool after the # (WhatsApp click-to-chat's), which never
	// reaches the server. It's read once and taken out of the address, so a reload starts clean.
	onMount(() => {
		const handed = textFromHash(location.hash);
		if (!handed) return;
		entries.text = handed;
		history.replaceState(history.state, '', location.pathname + location.search);
	});

	// The file last handed to the browser, said under the buttons, since a download can land with
	// nothing on screen saying so. It's said only while the code is still the one saved.
	let saved: { file: string; data: string } | undefined = $state();
	const savedNow = $derived(code && saved?.data === code.data ? saved.file : undefined);
	// Save pressed before there's a code: the reason, said under the buttons then, not at rest. It
	// goes as soon as there's a code to save.
	let tooEarly = $state(false);
	$effect(() => {
		if (code) tooEarly = false;
	});

	function hand(blob: Blob, file: string, data: string) {
		const url = URL.createObjectURL(blob);
		Object.assign(document.createElement('a'), { href: url, download: file }).click();
		saved = { file, data };
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}

	/** The bare code as a PNG, drawn on a canvas here: no words added, nothing uploaded. */
	function savePng() {
		if (!modules || !code) return;
		const { data, fileStem } = code;
		const scale = pngScale(modules);
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = drawnSize(modules) * scale;
		const context = canvas.getContext('2d');
		if (!context) return;
		context.fillStyle = '#ffffff';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = '#2b2b2b';
		context.scale(scale, scale);
		context.fill(new Path2D(qrPath(modules)));
		canvas.toBlob((blob) => {
			if (blob) hand(blob, codeFileName(fileStem, 'png'), data);
		}, 'image/png');
	}

	/** The bare code as an SVG: sharp at any size, for printers and designers. */
	function saveSvg() {
		if (!modules || !code) return;
		const blob = new Blob([qrSvg(modules)], { type: 'image/svg+xml' });
		hand(blob, codeFileName(code.fileStem, 'svg'), code.data);
	}

	/** A field's look, with the deep-rose edge while what's in it has a problem. */
	const checked = `${field} aria-invalid:border-accent-edge`;
	const optional = `text-muted font-normal`;
</script>

<Seo
	title="{QR_CODE.name}{TITLE_SUFFIX}"
	description={QR_CODE.description}
	path={QR_CODE.path}
	structuredData={{
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: QR_CODE.name,
		description: QR_CODE.description,
		url: `${SITE_URL}${QR_CODE.path}`,
		applicationCategory: 'UtilitiesApplication',
		operatingSystem: 'Any',
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: 'https://itrium.id' }
	}}
/>

<ToolTitle
	tool="qr-code"
	title={QR_CODE.name}
	introduction={QR_CODE.introduction}
	width="max-w-xl lg:max-w-6xl"
/>

<!-- No card: the fields, then under a plain line the code, then the shelf of other kinds. From
     1024px the code has its own column beside the fields and the shelf. -->
<form
	class="mx-auto max-w-xl px-5 pt-4 pb-20 sm:px-8 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start"
	onsubmit={(event) => event.preventDefault()}
>
	<!-- The kind being made: its fields, where the first part always is. -->
	<div class="space-y-4 pb-5 lg:pr-16 lg:pb-0">
		{#if kind !== 'text'}
			<h2 class="text-2xl font-extrabold tracking-[-0.03em]">{QR_CODE.kinds[kind]}</h2>
		{/if}

		{#if kind === 'text'}
			<div>
				<label for="text" class={label}>{QR_CODE.fields.text}</label>
				<textarea
					id="text"
					bind:value={entries.text}
					rows="2"
					autocomplete="off"
					spellcheck="false"
					placeholder="https://"
					aria-describedby="text-note"
					aria-invalid={problem ? true : undefined}
					class="{checked} resize-y"></textarea>
			</div>
		{:else if kind === 'wifi'}
			<div>
				<label for="wifi-first" class={label}>{QR_CODE.fields.wifiName}</label>
				<input
					id="wifi-first"
					bind:value={entries.wifi.name}
					autocomplete="off"
					spellcheck="false"
					class={field}
				/>
			</div>
			<div>
				<label for="wifi-password" class={label}
					>{QR_CODE.fields.wifiPassword} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<!-- Shown as typed: it's being put into a code for others to read, and a typo here
				     means a code that doesn't join. -->
				<input
					id="wifi-password"
					bind:value={entries.wifi.password}
					autocomplete="off"
					autocapitalize="off"
					spellcheck="false"
					aria-describedby="wifi-password-hint"
					class={field}
				/>
				<p id="wifi-password-hint" class="mt-1.5 text-sm text-muted">
					{QR_CODE.fields.wifiPasswordHint}
				</p>
			</div>
		{:else if kind === 'contact'}
			<div>
				<label for="contact-first" class={label}>{QR_CODE.fields.contactName}</label>
				<input
					id="contact-first"
					bind:value={entries.contact.name}
					autocomplete="off"
					class={field}
				/>
			</div>
			<div>
				<label for="contact-country" class={label}>{QR_CODE.fields.country}</label>
				<SearchableSelect
					id="contact-country"
					{choices}
					value={entries.contact.country}
					onchange={(value) => (entries.contact.country = value)}
					placeholder="Type a country or a code"
				/>
			</div>
			<div>
				<label for="contact-phone" class={label}
					>{QR_CODE.fields.contactPhone} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<input
					id="contact-phone"
					type="tel"
					inputmode="tel"
					bind:value={entries.contact.phone}
					oninput={typing}
					onblur={stoppedTyping}
					autocomplete="off"
					aria-describedby="contact-phone-problem"
					aria-invalid={problem?.problem === 'phone' ? true : undefined}
					class={checked}
				/>
				<!-- Always here, so a screen reader hears the problem when it comes; until then, the number
				     as the code will dial it, to check against what was typed. -->
				<p id="contact-phone-problem" class="mt-1.5 flex gap-2 text-sm empty:hidden" role="status">
					{#if problem?.problem === 'phone'}<span class="flex gap-2 font-medium"
							><Caution class="mt-0.5 shrink-0" />{problemText}</span
						>{:else if contactRead}<span class="text-muted tabular-nums"
							>{WHATSAPP.reads(contactRead.display, countryOf(contactRead))}</span
						>{/if}
				</p>
			</div>
			<div>
				<label for="contact-email" class={label}
					>{QR_CODE.fields.contactEmail} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<input
					id="contact-email"
					type="email"
					bind:value={entries.contact.email}
					oninput={typing}
					onblur={stoppedTyping}
					autocomplete="off"
					aria-describedby="contact-email-problem"
					aria-invalid={problem?.problem === 'not-an-email' ? true : undefined}
					class={checked}
				/>
				<!-- Always here, so a screen reader hears the problem when it comes. -->
				<p
					id="contact-email-problem"
					class="mt-1.5 flex gap-2 text-sm font-medium empty:hidden"
					role="status"
				>
					{#if problem?.problem === 'not-an-email'}<Caution
							class="mt-0.5 shrink-0"
						/>{problemText}{/if}
				</p>
			</div>
			<div>
				<label for="contact-website" class={label}
					>{QR_CODE.fields.contactWebsite} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<input
					id="contact-website"
					type="url"
					inputmode="url"
					bind:value={entries.contact.website}
					autocomplete="off"
					class={field}
				/>
			</div>
		{:else if kind === 'email'}
			<div>
				<label for="email-first" class={label}>{QR_CODE.fields.emailAddress}</label>
				<input
					id="email-first"
					type="email"
					bind:value={entries.email.address}
					oninput={typing}
					onblur={stoppedTyping}
					autocomplete="off"
					aria-describedby="email-first-problem"
					aria-invalid={problem ? true : undefined}
					class={checked}
				/>
				<!-- Always here, so a screen reader hears the problem when it comes. -->
				<p
					id="email-first-problem"
					class="mt-1.5 flex gap-2 text-sm font-medium empty:hidden"
					role="status"
				>
					{#if problem?.problem === 'not-an-email'}<Caution
							class="mt-0.5 shrink-0"
						/>{problemText}{/if}
				</p>
			</div>
			<div>
				<label for="email-subject" class={label}
					>{QR_CODE.fields.emailSubject} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<input id="email-subject" bind:value={entries.email.subject} class={field} />
			</div>
			<div>
				<label for="email-body" class={label}
					>{QR_CODE.fields.emailBody} <span class={optional}>{QR_CODE.optional}</span></label
				>
				<textarea id="email-body" bind:value={entries.email.body} rows="3" class="{field} resize-y"
				></textarea>
			</div>
		{:else}
			<div>
				<label for="phone-country" class={label}>{QR_CODE.fields.country}</label>
				<SearchableSelect
					id="phone-country"
					{choices}
					value={entries.phone.country}
					onchange={(value) => (entries.phone.country = value)}
					placeholder="Type a country or a code"
				/>
			</div>
			<div>
				<label for="phone-first" class={label}>{QR_CODE.fields.phoneNumber}</label>
				<input
					id="phone-first"
					type="tel"
					inputmode="tel"
					bind:value={entries.phone.number}
					oninput={typing}
					onblur={stoppedTyping}
					autocomplete="off"
					aria-describedby="phone-first-problem"
					aria-invalid={problem ? true : undefined}
					class={checked}
				/>
				<!-- Always here, so a screen reader hears the problem when it comes; until then, the number
				     as the code will dial it, to check against what was typed. -->
				<p id="phone-first-problem" class="mt-1.5 flex gap-2 text-sm empty:hidden" role="status">
					{#if problem?.problem === 'phone'}<span class="flex gap-2 font-medium"
							><Caution class="mt-0.5 shrink-0" />{problemText}</span
						>{:else if phoneRead}<span class="text-muted tabular-nums"
							>{WHATSAPP.reads(phoneRead.display, countryOf(phoneRead))}</span
						>{/if}
				</p>
			</div>
		{/if}

		<!-- Under a link or text, one slot two lines tall for whichever line has something to say:
		     what phones do with a code (before anything's typed), a web address that needs https://,
		     or that it's too long. The code under it doesn't move when one gives way to another. -->
		{#if kind === 'text'}
			<p id="text-note" class="-mt-2.5 flex min-h-10 gap-2 text-sm" role="status">
				{#if problemText}<span class="flex gap-2 font-medium"
						><Caution class="mt-0.5 shrink-0" />{problemText}</span
					>{:else if schemed}<span class="text-muted"
						>{QR_CODE.noScheme}
						<button
							type="button"
							onclick={useScheme}
							class="-my-2 min-h-9 font-medium text-text underline underline-offset-4 pointer-coarse:min-h-11"
							>{QR_CODE.useScheme}</button
						></span
					>{:else}<span class="text-muted">{QR_CODE.hint}</span>{/if}
			</p>
		{/if}
	</div>

	<!-- The code, as Save hands it over, beside what scanning it does; then the two saves. -->
	<section
		aria-labelledby="code-heading"
		class="border-t border-border pt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
	>
		<div class="flex items-start gap-5 lg:gap-8">
			<!-- White with graphite in both themes: scanners read dark on light, and it's what
			     prints. Empty, it holds its place, and in dark mode waits in the page's raised gray
			     rather than glaring white. The margin is part of the drawing, as in the file. -->
			<div
				class="w-38 shrink-0 border border-border sm:w-44 lg:w-64 {modules
					? 'bg-white text-on-accent'
					: 'bg-white dark:bg-surface'}"
			>
				{#if modules && code}
					<svg
						viewBox="0 0 {drawnSize(modules)} {drawnSize(modules)}"
						role="img"
						aria-label={QR_CODE.alt(code.does)}
						shape-rendering="crispEdges"
						class="block w-full"
					>
						<path d={qrPath(modules)} fill="currentColor" />
					</svg>
				{:else}
					<div class="m-[12%] aspect-square bg-elevated"></div>
				{/if}
			</div>

			<div class="min-w-0">
				<h2 id="code-heading" class="mb-2 text-2xl font-extrabold tracking-[-0.03em]">
					{QR_CODE.heading}
				</h2>
				<p class="text-sm leading-relaxed [overflow-wrap:anywhere] text-muted">
					{#if code}{QR_CODE.does(code.does)}
						{QR_CODE.check}{:else if problem}{QR_CODE.blocked}{:else}{QR_CODE.empty}{/if}
				</p>
			</div>
		</div>

		<!-- Always here, so nothing moves when the first character makes a code. Until then they
		     can't save anything, but stay reachable, and a press says why in the line under them. -->
		<div class="mt-5 flex flex-wrap gap-3">
			<button
				type="button"
				onclick={() => (code ? savePng() : (tooEarly = true))}
				aria-disabled={!code}
				class="{primaryButton} grow px-4! py-3.5 text-base whitespace-nowrap aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
			>
				{QR_CODE.savePng}
			</button>
			<button
				type="button"
				onclick={() => (code ? saveSvg() : (tooEarly = true))}
				aria-disabled={!code}
				class="{secondaryButtonOnPage} grow px-4! py-3.5 text-base whitespace-nowrap aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
			>
				{QR_CODE.saveSvg}
			</button>
		</div>
		<p class="mt-3 min-h-10 text-sm [overflow-wrap:anywhere]" role="status">
			{#if savedNow}{QR_CODE.saved(savedNow)}{:else if tooEarly}{QR_CODE.nothingYet}{/if}
		</p>
	</section>

	<!-- The other kinds, quiet until one is picked: each row says what its code is for. -->
	<section aria-labelledby="shelf-heading" class="pt-3 lg:pt-8 lg:pr-16">
		<h2 id="shelf-heading" class="text-lg font-extrabold tracking-[-0.02em]">
			{kind === 'text' ? QR_CODE.shelf : QR_CODE.shelfElse}
		</h2>
		<ul class="mt-2 border-t border-border">
			{#each shelf as other (other)}
				<li class="border-b border-border">
					<button
						type="button"
						onclick={() => void pick(other)}
						class="group flex min-h-12 w-full items-center justify-between gap-4 py-2 text-left"
					>
						<span class="font-semibold underline underline-offset-4 group-hover:decoration-2"
							>{QR_CODE.kinds[other]}</span
						>
						<span class="text-right text-sm text-muted">{QR_CODE.kindsFor[other]}</span>
					</button>
				</li>
			{/each}
		</ul>
	</section>
</form>
