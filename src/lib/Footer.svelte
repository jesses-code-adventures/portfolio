<script>
	import Image from './Image.svelte';
</script>

<div
	class="fixed bottom-0 w-full flex justify-evenly border-t-2 border-t-black bg-white py-2 text-black dark:border-t-white dark:bg-stone-950 dark:text-white"
>
	<a
		target="_blank"
		href="https://github.com/jesses-code-adventures/"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/github.webp" alt="github" tailwindClass="w-6 h-6" />
	</a>
	<a
		target="_blank"
		href="https://www.linkedin.com/in/jesse-williams-16b70bba/"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/linkedin.webp" alt="linkedin" tailwindClass="w-6 h-6" />
	</a>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="mailto:jesse@negativespacesounds.com?subject=Website%20Contact&body=Hello!"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/gmail.webp" alt="email" tailwindClass="w-6 h-6" />
	</a>
	<a
		target="_blank"
		href="https://twitter.com/jessesbeets/"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/twitter.webp" alt="twitter" tailwindClass="w-6 h-6" />
	</a>
	<a
		target="_blank"
		href="https://open.spotify.com/playlist/08MtGBJVaGsawTXaiC3M9m?si=9df6230465f34073"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/spotify.webp" alt="spotify" tailwindClass="w-6 h-6" />
	</a>
	<a
		target="_blank"
		href="https://soundcloud.com/jessesbeetshoppe/"
		class="rounded-sm p-4 hover:bg-stone-300 hover:dark:bg-stone-600"
	>
		<Image src="/soundcloud.webp" alt="soundcloud" tailwindClass="w-6 h-6" />
	</a>
</div>
