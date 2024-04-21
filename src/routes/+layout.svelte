<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<div id="content" class="flex flex-col justify-between text-center pt-20 px-4">
	<slot />
</div>
<Footer />
