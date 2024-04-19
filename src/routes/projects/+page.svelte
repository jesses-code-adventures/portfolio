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

<div class="flex flex-col justify-evenly text-center pt-16">
	<ProjectsList title={false} />
	<FunProjectsView title={false} />
</div>
