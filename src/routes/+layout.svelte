<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div
	class="overflow-x-hidden bg-white text-black dark:bg-stone-950 dark:text-white"
>
	<Navbar />
	<div id="content" class="flex h-screen flex-col justify-between pb-12 text-center">
		<slot />
	</div>
	<Footer />
</div>
