<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div
	class=""
>
	<Navbar />
	<div id="content" class="flex flex-col justify-between text-center pt-20">
		<slot />
	</div>
	<Footer />
</div>
