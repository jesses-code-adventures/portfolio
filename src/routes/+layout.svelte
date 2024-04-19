<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link href="/prism.css" rel="stylesheet" />
</svelte:head>

<div
	class="overflow-x-hidden bg-white text-black dark:bg-stone-950 dark:text-white"
>
	<script src="/prism.js"></script>
	<Navbar />
	<div id="content" class="flex h-screen flex-col justify-between pb-12 text-center">
		<slot />
	</div>
	<Footer />
</div>
