<script>
	const chapters = [
		{
			year: '2018-2020',
			title: 'Manual work became scripts',
			body: 'Started in operations and used VBA, then Python, Selenium and Pandas to remove recurring reporting work. This was the practical beginning: messy workflows, real users, and immediate feedback when automation helped or hurt.'
		},
		{
			year: '2021-2023',
			title: 'Scripts became systems',
			body: 'Built the first serious internal platforms at GiveTel: MySQL/RDS databases, AWS API Gateway/Lambda endpoints, TypeScript interfaces, batch exports, call-recording ETL, OAuth and security controls.'
		},
		{
			year: '2024-now',
			title: 'Systems became products',
			body: 'Founded Sound Systems and joined FeeWise, moving deeper into production product work: AI support agents, automated refunds, payment reporting, client portals, phishing simulation platforms, migrations and founder-led product builds.'
		},
		{
			year: 'Recent obsession',
			title: 'Parallelising development',
			body: 'Agentic coding changed the shape of my workflow. A lot of recent public work is about making autonomous changes easier to isolate and review: worktrees, tmux, Neovim plugins, Go CLIs and small tools that make iteration cheaper.'
		}
	];

	const principles = [
		'Ship the smallest useful version, then make it observable.',
		'Prefer boring infrastructure until the problem proves it needs drama.',
		'Automate operational drag before it becomes team culture.',
		'Keep local development fast enough that experimentation is cheap.',
		'Make systems understandable to the people who have to operate them.'
	];
</script>

<svelte:head>
	<title>Background - Jesse Williams</title>
	<meta name="description" content="Professional background for Jesse Williams" />
</svelte:head>

<main class="mx-auto max-w-7xl pb-20 text-left">
	<section
		class="grid gap-8 border-b border-stone-300 pb-10 dark:border-stone-700 md:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_24rem]"
	>
		<div>
			<p class="section-label">Background</p>
			<h1 class="mt-4 max-w-5xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
				I got into software by making operations less painful.
			</h1>
		</div>
		<p class="self-end text-base leading-8 text-stone-700 dark:text-stone-200 lg:text-lg">
			That still shapes how I build: useful first, polished second, maintainable before it becomes
			someone else's problem.
		</p>
	</section>

	<section class="py-10">
		<div class="grid gap-x-8 gap-y-8 lg:grid-cols-2">
			{#each chapters as chapter}
				<article class="border-t border-stone-300 pt-4 dark:border-stone-700">
					<p class="section-label">{chapter.year}</p>
					<h2 class="mt-2 text-3xl leading-none xl:text-4xl">{chapter.title}</h2>
					<p class="mt-3 max-w-2xl leading-7 text-stone-700 dark:text-stone-200">
						{chapter.body}
					</p>
				</article>
			{/each}
		</div>
	</section>

	<section
		class="grid gap-6 border-t border-stone-300 pt-10 dark:border-stone-700 md:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr]"
	>
		<h2 class="section-label">Operating principles</h2>
		<ul class="grid gap-x-8 text-lg leading-8 dark:divide-stone-700 md:grid-cols-2 xl:grid-cols-3">
			{#each principles as principle}
				<li class="border-t border-stone-300 py-3 dark:border-stone-700">{principle}</li>
			{/each}
		</ul>
	</section>
</main>
