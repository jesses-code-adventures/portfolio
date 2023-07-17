<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "Ableton-V";
    const content = `Ableton-V is a CLI tool that's built in Rust, by the way.\n\nIt is a basic implementation of version control for Ableton sessions, and allows the user to trigger a save as action from the console while storing the session metadata in a Sqlite database.\n\nThe idea of this is to be able to work toward a git-like experience for Ableton.`
    const github_url = "https://github.com/jesses-code-adventures/ableton-v"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>Ableton-V - Jesse Williams</title>
    <meta name="description" content="An ableton version control system by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content}  github_url={github_url} images={images} />
