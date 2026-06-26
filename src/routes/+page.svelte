<script>
	import Image from '$lib/Image.svelte';

	const work = [
		[
			'Sound Systems',
			'https://soundsystems.dev/',
			'Founder',
			'Contracted delivery of full products & internal operational software, as well as building our own products & tools.'
		],
		[
			'FeeWise',
			'https://www.getfeewise.com',
			'Full stack developer',
			'AI support RAG systems, key product flows such as refunds & third party integrations, internal payment volume reporting, client access portals, and more.'
		],
		[
			'GiveTel',
			'https://givetel.com',
			'Operations / automation',
			'APIs, client portals, ETL, reporting, data/security/platform migrations'
		]
	];

	const projects = [
		[
			'treeai',
			'Go workflow tool for agentic coding with git worktrees and tmux',
			'https://github.com/jesses-code-adventures/treeai'
		],
		[
			'diffview-pr.nvim',
			'Neovim PR review tooling built around practical Diffview-style workflows',
			'https://github.com/jesses-code-adventures/diffview-pr.nvim'
		],
		[
			'bruno.nvim',
			'Tree-sitter-powered Bruno API collection support for Neovim',
			'https://github.com/jesses-code-adventures/bruno.nvim'
		],
		[
			'utapi-go',
			'Go SDK wrapper for the UploadThing API',
			'https://github.com/jesses-code-adventures/utapi-go'
		],
		[
			'excavator',
			'Go TUI for organising audio samples',
			'https://github.com/jesses-code-adventures/excavator'
		],
		[
			'nvim-minimal',
			'Current minimal Neovim setup',
			'https://github.com/jesses-code-adventures/nvim-minimal'
		]
	];
</script>

<svelte:head>
	<title>Jesse Williams - Software Engineer</title>
	<meta
		name="description"
		content="Portfolio for Sydney software engineer Jesse Williams: full-stack product work, AI agents, automation, infrastructure and open source tooling."
	/>
	<link rel="canonical" />
</svelte:head>

<main class="mx-auto max-w-7xl pb-20 text-left">
	<section
		class="grid items-start gap-8 border-b border-stone-300 pb-10 dark:border-stone-700 md:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_18rem]"
	>
		<div>
			<p class="section-label">Jesse Williams · Sydney · Software Engineer</p>
			<h1 class="mt-5 max-w-5xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
				I build quality software at pace.
			</h1>
			<p class="mt-6 max-w-4xl text-lg leading-8 text-stone-700 dark:text-stone-200 xl:text-xl">
				Six professional years across full-stack products, AI support agents, payments tooling,
				internal automation, data pipelines, infrastructure and open source developer tools. I care
				most about getting solid systems into users' hands quickly.
			</p>
		</div>

		<Image
			src="me.webp"
			tailwindClass="w-48 md:w-56 xl:w-64 aspect-square object-cover grayscale border border-stone-400 dark:border-stone-600"
			alt="Photo of Jesse"
		/>
	</section>

	<section
		class="grid gap-6 border-b border-stone-300 py-9 dark:border-stone-700 md:grid-cols-[10rem_1fr] xl:grid-cols-[12rem_1fr]"
	>
		<h2 class="section-label">Company work</h2>
		<div class="grid gap-5 xl:grid-cols-3">
			{#each work as [company, url, role, detail]}
				<div class="grid gap-2 xl:block">
					<div>
						<h3 class="text-xl xl:text-2xl">
							<a
								class="transition-colors hover:text-amber-700 dark:hover:text-amber-300"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								{company}
							</a>
						</h3>
						<p class="text-sm text-stone-500 dark:text-stone-400">{role}</p>
					</div>
					<p class="leading-7 text-stone-700 dark:text-stone-200">{detail}</p>
				</div>
			{/each}
		</div>
	</section>

	<section
		class="grid gap-6 border-b border-stone-300 py-9 dark:border-stone-700 md:grid-cols-[10rem_1fr] xl:grid-cols-[12rem_1fr]"
	>
		<h2 class="section-label">Recent public work</h2>
		<div class="grid gap-x-8 gap-y-0 md:grid-cols-2 xl:grid-cols-3">
			{#each projects as [name, detail, url]}
				<a
					class="border-t border-stone-300 py-4 transition-colors hover:text-amber-700 dark:border-stone-700 dark:hover:text-amber-300"
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					<h3 class="text-xl xl:text-2xl">{name}</h3>
					<p class="mt-2 leading-7 text-stone-700 dark:text-stone-200">{detail}</p>
				</a>
			{/each}
		</div>
	</section>

	<section class="grid gap-6 py-9 md:grid-cols-[10rem_1fr] xl:grid-cols-[12rem_1fr]">
		<h2 class="section-label">Open source</h2>
		<div class="grid gap-5 text-base leading-8 text-stone-700 dark:text-stone-200 lg:grid-cols-3">
			<p>
				Merged an upstream contribution to <a
					class="hyperlink"
					href="https://github.com/air-verse/air/pull/641"
					target="_blank"
					rel="noreferrer">air</a
				> adding a silent flag for .air.toml, useful when live reload needs to stay out of logs or agent
				output.
			</p>
			<p>
				Built Diffview-adjacent tooling through <a
					class="hyperlink"
					href="https://github.com/jesses-code-adventures/diffview-pr.nvim"
					target="_blank"
					rel="noreferrer">diffview-pr.nvim</a
				>
				and an actively maintained
				<a
					class="hyperlink"
					href="https://github.com/jesses-code-adventures/diffview_hide_dir.nvim"
					target="_blank"
					rel="noreferrer">diffview_hide_dir.nvim</a
				> fork.
			</p>
			<p>
				The rest of the GitHub trail is mostly Go services and CLIs, Lua plugins, AI workflow
				experiments, Obsidian tooling and production-shaped templates.
			</p>
		</div>
	</section>
</main>
