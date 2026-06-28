<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let tailwindClass;
	/** @type {string} */
	export let alt;
	/** @type {boolean} */
	export let description = false;
</script>

{#if description}
	<div class="flex flex-col text-center">
		<img {src} class={tailwindClass} {alt} />
		<p class="italic text-zinc-900 dark:text-zinc-100">{alt}</p>
	</div>
{:else}
	<img {src} class={tailwindClass} {alt} />
{/if}
