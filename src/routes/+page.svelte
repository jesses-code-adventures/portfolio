<script>
	import ProjectPreview from '$lib/ProjectPreview.svelte';
	import Image from '$lib/Image.svelte';
</script>

<svelte:head>
	<title>Home - Jesse Williams</title>
	<meta
		name="description"
		content="Portfolio for Sydney-based software developer Jesse Williams."
	/>
</svelte:head>

<div class="flex flex-col justify-between text-center pb-8">
	<div class="h-72 flex justify-between">
		<div class="relative flex flex-col justify-end md:h-2/5 md:border-b-4 border-stone-600 w-full">
			<h1 class="text-3xl md:text-left sm:pl-12 lg:pl-36">Jesse Williams - Software Developer</h1>
			<Image
				src="headshot.webp"
				tailwindClass="absolute right-20 sm:right-64 md:right-20 lg:right-72 top-4 object-scale-down rounded-full h-72 border-4 border-stone-600"
				alt="Photo of jesse"
			/>
		</div>
	</div>
	<h2 class="pb-12 text-2xl">Projects I Made And Use</h2>
	<div
		class="flex flex-col sm:flex-row justify-evenly w-full justify-items-center items-center mx-auto gap-y-8"
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
	<h2 class="py-12 text-2xl">More Fun Side Projects</h2>
	<div
		class="flex flex-col sm:flex-row justify-evenly w-full justify-items-center items-center mx-auto gap-y-8"
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
	</div>
</div>
