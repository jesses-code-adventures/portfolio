<script>
	import ProjectPreview from '$lib/ProjectPreview.svelte';
	/** @type {boolean} */
	export let title = false;
</script>

<div id="funSideProjectsContainer">
	{#if title}
		<h2 class="py-12 text-2xl">Side Projects/Developers Might Like</h2>
	{/if}
	<div
		class="mx-auto flex w-full flex-col items-center justify-evenly justify-items-center gap-y-8 sm:flex-row"
	>
		<ProjectPreview
			name="Ableton V"
			description="Ableton version control. A CLI tool built in Rust."
			url="/projects/ableton_v/"
		/>
		<ProjectPreview
			name="draw"
			description="A simple browser-based drawing app written in Javascript and served using a golang web server."
			url="/projects/draw/"
		/>
		<ProjectPreview
			name="nvim-config"
			description="My Neovim config."
			url="https://github.com/jesses-code-adventures/nvim-config"
			external={true}
		/>
	</div>
</div>
