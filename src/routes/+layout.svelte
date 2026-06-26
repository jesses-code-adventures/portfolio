<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<div id="content" class="flex flex-col justify-between px-5 pt-16 text-center sm:px-8 lg:px-12">
	<slot />
</div>
<Footer />
