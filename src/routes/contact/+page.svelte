<script>
	import { sendForm } from '@emailjs/browser';

	let status = 'idle';
	let statusMessage = '';

	/** @param {SubmitEvent} e */
	const sendEmail = async (e) => {
		const form = e.currentTarget;
		if (!(form instanceof HTMLFormElement)) return;

		status = 'sending';
		statusMessage = 'Sending...';

		try {
			await sendForm('service_x4ir6va', 'template_huobpyi', form, {
				publicKey: 'GIo-VAHsmJAU2L0cr'
			});

			status = 'success';
			statusMessage = 'Message sent. I will get back to you soon.';
			form.reset();
		} catch (error) {
			status = 'error';
			const detail = error && typeof error === 'object' && 'text' in error ? `: ${error.text}` : '';
			statusMessage = `Message failed${detail}. Please try again.`;
		}
	};
</script>

<svelte:head>
	<title>Contact - Jesse Williams</title>
	<meta name="description" content="Contact Sydney-based software developer Jesse Williams." />
</svelte:head>

<main class="mx-auto max-w-7xl pb-20 text-left">
	<section
		class="grid gap-8 border-b border-stone-300 pb-10 dark:border-stone-700 lg:grid-cols-[1fr_24rem]"
	>
		<div>
			<p class="section-label">Contact</p>
			<h1 class="mt-4 max-w-5xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
				Want to get in touch?
			</h1>
		</div>
		<p class="self-end text-base leading-8 text-stone-700 dark:text-stone-200 lg:text-lg">
			I am open to software engineering roles, technical conversations, recruiter messages and the
			occasional interesting collaboration. Send a note with the context and the best way to follow
			up.
		</p>
	</section>

	<section class="grid gap-8 py-10 lg:grid-cols-[18rem_1fr] xl:grid-cols-[22rem_1fr]">
		<aside class="grid content-start gap-6 text-stone-700 dark:text-stone-200">
			<div class="border-t border-stone-300 pt-4 dark:border-stone-700">
				<p class="section-label">Direct</p>
				<a
					class="mt-3 block text-2xl transition-colors hover:text-amber-700 dark:hover:text-amber-300"
					href="mailto:jesse@jessewilliams.dev"
				>
					jesse@jessewilliams.dev
				</a>
			</div>
			<div class="border-t border-stone-300 pt-4 dark:border-stone-700">
				<p class="section-label">Elsewhere</p>
				<div class="mt-3 flex flex-wrap gap-x-5 gap-y-3">
					<a
						class="pill-link"
						href="https://github.com/jesses-code-adventures"
						target="_blank"
						rel="noreferrer">GitHub</a
					>
					<a
						class="pill-link"
						href="https://www.linkedin.com/in/jesse-williams-16b70bba/"
						target="_blank"
						rel="noreferrer">LinkedIn</a
					>
				</div>
			</div>
			<div class="border-t border-stone-300 pt-4 dark:border-stone-700">
				<p class="section-label">Product work</p>
				<h2 class="mt-3 text-2xl leading-tight">
					Need a useful product, automation, or dev tool shipped?
				</h2>
				<p class="mt-3 leading-7">
					That work runs through <a
						class="hyperlink"
						href="https://soundsystems.dev/"
						target="_blank"
						rel="noreferrer">Sound Systems</a
					>, where I build contracted products, internal tooling and workflow automation.
				</p>
			</div>
		</aside>

		<form
			class="grid gap-5 border-t border-stone-300 pt-4 dark:border-stone-700"
			name="contact"
			method="POST"
			on:submit|preventDefault={sendEmail}
		>
			<input type="hidden" name="form-name" value="contact" />
			<div class="grid gap-5 md:grid-cols-2">
				<label
					class="grid gap-2 text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"
					for="from_name"
				>
					Name
					<input
						id="from_name"
						name="from_name"
						required
						autocomplete="name"
						class="border border-stone-300 bg-transparent p-4 text-base normal-case tracking-normal text-stone-950 outline-none transition-colors placeholder:text-stone-400 focus:border-amber-700 dark:border-stone-700 dark:text-stone-50 dark:placeholder:text-stone-500 dark:focus:border-amber-300"
						placeholder="Your name"
						type="text"
					/>
				</label>
				<label
					class="grid gap-2 text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"
					for="email"
				>
					Email
					<input
						id="email"
						name="email"
						required
						autocomplete="email"
						type="email"
						class="border border-stone-300 bg-transparent p-4 text-base normal-case tracking-normal text-stone-950 outline-none transition-colors placeholder:text-stone-400 focus:border-amber-700 dark:border-stone-700 dark:text-stone-50 dark:placeholder:text-stone-500 dark:focus:border-amber-300"
						placeholder="you@example.com"
					/>
				</label>
			</div>
			<label
				class="grid gap-2 text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"
				for="message"
			>
				Message
				<textarea
					id="message"
					name="message"
					required
					rows="8"
					placeholder="A few lines about why you are reaching out and the best next step."
					class="resize-y border border-stone-300 bg-transparent p-4 text-base normal-case leading-7 tracking-normal text-stone-950 outline-none transition-colors placeholder:text-stone-400 focus:border-amber-700 dark:border-stone-700 dark:text-stone-50 dark:placeholder:text-stone-500 dark:focus:border-amber-300"
				></textarea>
			</label>

			<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
				<button
					type="submit"
					disabled={status === 'sending'}
					class="border border-stone-950 bg-stone-950 px-6 py-4 text-sm uppercase tracking-[0.18em] text-stone-50 transition-colors hover:border-amber-700 hover:bg-amber-700 disabled:cursor-wait disabled:border-stone-400 disabled:bg-stone-400 dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950 dark:hover:border-amber-300 dark:hover:bg-amber-300"
				>
					{status === 'sending' ? 'Sending' : 'Send message'}
				</button>
				{#if statusMessage}
					<p
						class={`leading-7 ${
							status === 'success'
								? 'text-amber-700 dark:text-amber-300'
								: status === 'error'
									? 'text-red-700 dark:text-red-300'
									: 'text-stone-600 dark:text-stone-300'
						}`}
					>
						{statusMessage}
					</p>
				{/if}
			</div>
		</form>
	</section>
</main>
