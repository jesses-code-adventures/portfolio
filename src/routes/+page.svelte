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
	<link rel="canonical" />
</svelte:head>

<div class="flex flex-col text-center">
	<div class="flex flex-col justify-between sm:flex-row sm:px-24 md:px-36 lg:px-52 xl:px-72 2xl:px-96">
		<h1 class="text-3xl sm:pt-12 md:text-left"><span class="border-stone-600 sm:border-b-2">Jesse Williams - Software Developer</span></h1>
		<Image
			src="headshot.webp"
			tailwindClass="h-48 aspect-auto w-auto py-4 sm:py-0 sm:rounded-full sm:border-4 border-stone-600 object-scale-down"
			alt="Photo of jesse"
		/>
	</div>
	<ProjectsList title={true} />
	<FunProjectsView title={true} />
</div>
