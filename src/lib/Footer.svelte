<script>
	import Image from './Image.svelte';
	import { onMount } from 'svelte';
	let smallDevice = false;
	onMount(() => {
		smallDevice = window.innerWidth <= 640;
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 640) {
				smallDevice = true;
			} else {
				smallDevice = false;
			}
		});
	});
</script>

{#if smallDevice}
	<div id="hiddenFooter" hidden>footer</div>
{:else}
	<div
		id="footer"
		class="fixed bottom-0 w-full flex justify-evenly border-t-2 border-t-black bg-white py-2 text-black dark:border-t-white dark:bg-stone-950 dark:text-white z-50"
	>
		<a
			target="_blank"
			href="https://github.com/jesses-code-adventures/"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="githubImageContainer"
		>
			<Image src="/github.webp" alt="github" tailwindClass="w-4 h-4" />
		</a>
		<a
			target="_blank"
			href="https://www.linkedin.com/in/jesse-williams-16b70bba/"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="linkedinImageContainer"
		>
			<Image src="/linkedin.webp" alt="linkedin" tailwindClass="w-4 h-4" />
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="mailto:jesse@negativespacesounds.com?subject=Website%20Contact&body=Hello!"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="emailImageContainer"
		>
			<Image src="/gmail.webp" alt="email" tailwindClass="w-4 h-4" />
		</a>
		<a
			target="_blank"
			href="https://twitter.com/jessesbeets/"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="twitterImageContainer"
		>
			<Image src="/twitter.webp" alt="twitter" tailwindClass="w-4 h-4" />
		</a>
		<a
			target="_blank"
			href="https://open.spotify.com/playlist/08MtGBJVaGsawTXaiC3M9m?si=9df6230465f34073"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="spotifyImageContainer"
		>
			<Image src="/spotify.webp" alt="spotify" tailwindClass="w-4 h-4" />
		</a>
		<a
			target="_blank"
			href="https://soundcloud.com/jessesbeetshoppe/"
			class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
			id="soundcloudImageContainer"
		>
			<Image src="/soundcloud.webp" alt="soundcloud" tailwindClass="w-4 h-4" />
		</a>
	</div>
{/if}
