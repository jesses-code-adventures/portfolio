<script>
	const sections = [
		{
			title: 'Agentic workflow and dev tools',
			items: [
				{
					name: 'treeai',
					url: 'https://github.com/jesses-code-adventures/treeai',
					detail:
						'Go CLI connecting git worktrees, tmux and AI coding sessions so multiple tasks can move in parallel without trashing the main checkout.'
				},
				{
					name: 'go-app-template / go-project-template',
					url: 'https://github.com/jesses-code-adventures/go-app-template',
					detail:
						'Reusable project scaffolds for fast Go service and CLI starts, with the boring local-dev and deployment pieces front-loaded.'
				},
				{
					name: 'tom',
					url: 'https://github.com/jesses-code-adventures/tom',
					detail:
						'AI assistant experimentation in Go, part of a broader push toward practical local agent workflows.'
				}
			]
		},
		{
			title: 'Neovim and editor tooling',
			items: [
				{
					name: 'nvim-minimal',
					url: 'https://github.com/jesses-code-adventures/nvim-minimal',
					detail:
						'Current minimal Neovim setup, tuned for fast project work, LSP-heavy development and agent-assisted editing.'
				},
				{
					name: 'diffview-pr.nvim',
					url: 'https://github.com/jesses-code-adventures/diffview-pr.nvim',
					detail:
						'Pull request review tooling that builds on the Diffview style of moving through focused git diffs inside Neovim.'
				},
				{
					name: 'bruno.nvim',
					url: 'https://github.com/jesses-code-adventures/bruno.nvim',
					detail: 'Tree-sitter-powered support for Bruno API collection files in Neovim.'
				},
				{
					name: 'pg_query.nvim',
					url: 'https://github.com/jesses-code-adventures/pg_query.nvim',
					detail: 'A Neovim plugin for rendering and executing Postgres queries from the editor.'
				},
				{
					name: 'dotenv.nvim',
					url: 'https://github.com/jesses-code-adventures/dotenv.nvim',
					detail: 'Small utility plugin for loading .env values into Neovim config sessions.'
				}
			]
		},
		{
			title: 'Open source contributions',
			items: [
				{
					name: 'air',
					url: 'https://github.com/air-verse/air/pull/641',
					detail:
						'Merged upstream PR adding a silent flag in .air.toml, allowing live-reload without Air writing its own status output.'
				},
				{
					name: 'Diffview ecosystem',
					url: 'https://github.com/jesses-code-adventures/diffview-pr.nvim',
					detail:
						'Built and maintained Diffview-adjacent plugins/forks for PR review and directory-hiding workflows around git diffs.'
				},
				{
					name: 'Obsidian releases / plugins',
					url: 'https://github.com/jesses-code-adventures/obsidian-mixtape',
					detail:
						'Obsidian plugin work including audio-link scraping into embedded media players and release-list experimentation.'
				}
			]
		},
		{
			title: 'Products, APIs and utilities',
			items: [
				{
					name: 'utapi-go',
					url: '/projects/utapi-go/',
					detail: 'Go wrapper for UploadThing, with API behaviour ported from the TypeScript SDK.'
				},
				{
					name: 'excavator',
					url: '/projects/excavator/',
					detail:
						'Go TUI for music producers managing samples across local folders and hardware workflows.'
				},
				{
					name: 'EveryLog',
					url: 'https://github.com/jesses-code-adventures/every_log',
					detail:
						'Public source for a potential SaaS, built in Go and representative of the service-building direction since the last portfolio update.'
				},
				{
					name: 'MySQL Translate',
					url: '/projects/mysql_translate/',
					detail:
						'Rust CLI for keeping database schema representations aligned with a live MySQL database.'
				},
				{
					name: 'frontliner',
					url: 'https://github.com/jesses-code-adventures/frontliner',
					detail:
						'Early Rust HTTP server for workplace-knowledge AI assistant experiments, originally targeting Slack bot workflows.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Projects - Jesse Williams</title>
	<meta
		name="description"
		content="Selected projects, open source contributions and developer tooling by Jesse Williams."
	/>
</svelte:head>

<main class="mx-auto max-w-7xl pb-20 text-left">
	<section class="mb-9 border-b border-stone-300 pb-10 dark:border-stone-700">
		<p class="section-label">Selected projects</p>
		<h1 class="mt-4 text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
			The last couple of years got busy.
		</h1>
		<p class="mt-5 max-w-4xl text-base leading-8 text-stone-700 dark:text-stone-200 lg:text-lg">
			This portfolio used to mostly show early Rust and Go experiments. The newer GitHub history is
			heavier on production-shaped Go, Neovim/Lua tooling, AI workflow infrastructure, open source
			contributions and internal product scaffolding.
		</p>
	</section>

	<div class="grid gap-9">
		{#each sections as section}
			<section
				class="grid gap-5 border-b border-stone-300 pb-8 last:border-b-0 dark:border-stone-700 md:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr]"
			>
				<h2 class="section-label">{section.title}</h2>
				<div class="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
					{#each section.items as item}
						<a
							class="border-t border-stone-300 py-4 transition-colors hover:text-amber-700 dark:border-stone-700 dark:hover:text-amber-300"
							href={item.url}
							target={item.url.startsWith('http') ? '_blank' : undefined}
							rel="noreferrer"
						>
							<h3 class="text-xl xl:text-2xl">{item.name}</h3>
							<p class="mt-2 leading-7 text-stone-700 dark:text-stone-200">{item.detail}</p>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</main>
