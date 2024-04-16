<script>
	import ProjectPreview from './ProjectPreview.svelte';
	/** @type {boolean} */
	export let title = false;
</script>

<div id="makeAndUseContainer" class="">
	{#if title}
		<h2 class="pb-8 text-2xl">Projects I Made And Use</h2>
	{/if}
	<div
		class="mx-auto flex w-full flex-col items-center justify-evenly justify-items-center gap-y-8 sm:flex-row"
	>
		<ProjectPreview
			name="MySQL Translate"
			description="Keep multiple mysql schema representations in sync with each other, and with the database. A CLI tool written in Rust."
			url="/projects/mysql_translate/"
		/>
		<ProjectPreview
			name="utapi-go"
			description="An api wrapper for the Uploadthing service. Allows golang users to interact with their uploadthing files."
			url="/projects/utapi-go/"
		/>
		<ProjectPreview
			name="excavator"
			description="A golang CLI application for managing music samples locally. Designed to make managing files between hardware samplers easier."
			url="/projects/excavator/"
		/>
	</div>
</div>
