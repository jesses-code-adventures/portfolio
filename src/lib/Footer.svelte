<script>
	import Image from './Image.svelte';
</script>

<div
	id="footer"
	class="fixed bottom-0 z-50 hidden w-full justify-evenly border-t-2 border-t-black bg-white py-2 text-black dark:border-t-white dark:bg-stone-950 dark:text-white sm:flex"
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
