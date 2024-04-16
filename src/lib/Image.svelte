<script>
	import { onMount } from 'svelte';
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let tailwindClass;
	/** @type {string} */
	export let alt;
	/** @type {boolean} */
	export let description = false;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
		loading = true;
		loaded = false;
	});
</script>

{#if loaded && description}
	<div class="flex flex-col text-center">
		<img {src} class={tailwindClass} {alt} />
		<p class="italic text-zinc-900 dark:text-zinc-100">{alt}</p>
	</div>
{:else if loaded}
	<img {src} class={tailwindClass} {alt} />
{:else if failed}
	<img
		class={tailwindClass}
		src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
		alt="Not Found"
	/>
{:else if loading}
	<img
		class={tailwindClass}
		src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
		alt="Loading..."
	/>
{/if}
