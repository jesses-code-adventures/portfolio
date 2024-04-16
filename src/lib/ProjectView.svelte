<script>
	/** @type {string} name */
	export let name;
	/** @type {string} content */
	export let content;
	/** @type {?string} web_url*/
	export let web_url;
	/** @type {?string} github_url */
	export let github_url;
	/** @type {Array<import('$lib/Image.svelte')>} */
	export let images;
</script>

<div class="h-screen pt-24">
	<h1 class="text-left text-3xl lg:pl-24">{name}</h1>
	<div class="text-left lg:pl-24">
		{#if web_url}
			<a
				href={web_url}
				target="_blank"
				class="text-left text-xl italic text-stone-800 dark:text-stone-200">Website</a
			>
		{/if}
		{#if web_url && github_url}
			<span> | </span>
		{/if}
		{#if github_url}
			<a
				href={github_url}
				target="_blank"
				class="text-left text-xl italic text-stone-800 dark:text-stone-200">Github</a
			>
		{/if}
	</div>
	<div
		class="mx-auto grid w-full grid-cols-1 items-center justify-items-center gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each images as image}
			{image}
		{/each}
	</div>
	<div class="flex justify-evenly">
		<!-- eslint-disable-next-line -->
		<div class="w-4/5 whitespace-pre-line p-4 text-left text-xl">{@html content}</div>
		<!--(eslint warns of xss attacks using @html, but I don't really care for a static site) -->
	</div>
</div>
