<script>
	import '../app.css';
    import Navbar from "$lib/Navbar.svelte";
</script>

<div class="sm:h-screen dark:bg-stone-950 bg-white dark:text-white text-black">
    <Navbar />
    <slot />
    <div class="h-16" />
</div>
