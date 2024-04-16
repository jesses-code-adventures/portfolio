<script>
	import ProjectsList from '$lib/ProjectsList.svelte';
	import FunProjectsView from '$lib/FunProjectsView.svelte';
</script>

<svelte:head>
	<title>Projects - Jesse Williams</title>
	<meta
		name="description"
		content="List of projects by Jesse Williams."
	/>
</svelte:head>

<div class="flex h-full flex-col justify-evenly text-center">
	<ProjectsList title={false} />
	<FunProjectsView title={false} />
</div>
