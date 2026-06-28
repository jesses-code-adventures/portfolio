<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Jesse Williams</title>
	<meta name="description" content="This page could not be found on Jesse Williams' portfolio." />
</svelte:head>

<main class="mx-auto max-w-3xl pb-20 pt-12 text-left">
	<p class="section-label">{$page.status}</p>
	<h1 class="mt-4 text-4xl leading-[0.98] sm:text-6xl">Page not found.</h1>
	<p class="mt-5 text-lg leading-8 text-stone-700 dark:text-stone-200">
		The page you were looking for does not exist, or has moved.
	</p>
	<a class="hyperlink mt-6 inline-block text-lg" href="/">Return home</a>
</main>
