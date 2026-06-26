<script>
	const posts = [
		{
			title: 'The benefits of exploring programming languages',
			href: '/thoughts/language-exploration',
			date: '2023',
			status: 'Essay',
			description:
				'How Python, TypeScript, Rust, Go and other languages changed the way I think about validation, types, composition and maintainability.'
		}
	];

	const upcoming = [
		'Agentic coding workflows that actually survive review',
		'Why local development speed changes product behaviour',
		'Notes on Neovim as a long-term personal tool',
		'Automation that helps operations teams instead of confusing them'
	];
</script>

<svelte:head>
	<title>Thoughts - Jesse Williams</title>
	<meta name="description" content="Writing and notes by Jesse Williams" />
</svelte:head>

<main class="mx-auto max-w-7xl pb-20 text-left">
	<section
		class="grid gap-8 border-b border-stone-300 pb-10 dark:border-stone-700 md:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_24rem]"
	>
		<div>
			<p class="section-label">Thoughts</p>
			<h1 class="mt-4 max-w-5xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
				Notes from learning in public, slowly.
			</h1>
		</div>
		<p class="self-end text-base leading-8 text-stone-700 dark:text-stone-200 lg:text-lg">
			This section is intentionally smaller than the project list. It is for longer technical
			reflections, not release notes.
		</p>
	</section>

	<section
		class="grid gap-6 border-b border-stone-300 py-9 dark:border-stone-700 md:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr]"
	>
		<h2 class="section-label">Published</h2>
		<div class="divide-y divide-stone-300 dark:divide-stone-700">
			{#each posts as post}
				<a
					class="block py-5 transition-colors hover:text-amber-700 dark:hover:text-amber-300"
					href={post.href}
				>
					<div class="grid gap-3 md:grid-cols-[1fr_9rem] xl:grid-cols-[1fr_12rem]">
						<div>
							<h3 class="text-3xl leading-none xl:text-4xl">{post.title}</h3>
							<p class="mt-3 max-w-4xl leading-7 text-stone-700 dark:text-stone-200">
								{post.description}
							</p>
						</div>
						<div class="text-sm text-stone-500 dark:text-stone-400 md:text-right">
							<p>{post.status}</p>
							<p>{post.date}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="grid gap-6 py-9 md:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr]">
		<h2 class="section-label">Draft pile</h2>
		<ul
			class="grid gap-3 text-base leading-7 text-stone-700 dark:text-stone-200 sm:grid-cols-2 xl:grid-cols-4"
		>
			{#each upcoming as topic}
				<li class="border-t border-stone-300 pt-3 dark:border-stone-700">{topic}</li>
			{/each}
		</ul>
	</section>
</main>
