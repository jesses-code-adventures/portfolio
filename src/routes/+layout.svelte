<script>
	import '../app.css';
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="sm:h-full dark:bg-stone-950 bg-white dark:text-white text-black">
    <Navbar />
    <slot />
    <div class="h-16" />
    <Footer />
</div>
