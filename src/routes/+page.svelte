<script>
	import ProjectPreview from "../components/project_preview.svelte";
</script>

<div class="flex flex-col justify-between text-center">
    <h1 class="text-3xl">Jesse Williams</h1>
    <h2 class="text-xl">Software Engineer</h2>
    <h3 class="p-4 text-xl">Projects</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-items-center items-center mx-auto gap-y-8">
        <ProjectPreview name="Ableton V" description="Ableton version control. A CLI tool built in Rust." url="/projects/ableton-v/"/>
        <ProjectPreview name="Gecco" description="A management console built for a charity call center. Integrates with Evergiving and enables many business workflows. Built using the T3 stack."url="/projects/gecco/"/>
        <ProjectPreview name="Kid Soma Website" description="An artist showcase website for a music project I am a part of. Built using Astro." url="/projects/kid_soma_website"/>
        <ProjectPreview name="MySQL Translate" description="Keep multiple mysql schema representations in sync with each other, and with the database. A CLI tool written in Rust." url="/projects/mysql_translate/"/>
    </div>
</div>
