<script>
	import Image from '$lib/Image.svelte';
	import ProjectsList from '$lib/ProjectsList.svelte';
	import FunProjectsView from '$lib/FunProjectsView.svelte';
</script>

<svelte:head>
	<title>Home - Jesse Williams</title>
	<meta
		name="description"
		content="Portfolio for Sydney-based software developer Jesse Williams."
	/>
</svelte:head>

<div class="flex flex-col text-center">
	<div class="flex flex-col sm:flex-row justify-between pt-16 sm:px-36">
		<h1 class="text-3xl md:text-left sm:pt-12"><span class="sm:border-b-2 border-stone-600">Jesse Williams - Software Developer</span></h1>
		<Image
			src="headshot.webp"
			tailwindClass="h-64 py-4 sm:py-0 sm:rounded-full sm:border-4 border-stone-600 object-scale-down"
			alt="Photo of jesse"
		/>
	</div>
	<ProjectsList title={true} />
	<FunProjectsView title={true} />
</div>
