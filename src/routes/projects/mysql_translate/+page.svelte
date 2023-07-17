<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "MySQL Translate";
    const content = `MySQL Translate is a CLI tool that's built in Rust, but the way.\n\nIt is designed to keep multiple representations of a MySQL schema in sync with each other, and with the database.\n\nIt is designed to be used to be able to quickly iterate on database schemas in multiple production environments, and is currently used at Givetel.`;
    const github_url = "https://github.com/jesses-code-adventures/mysql_translate"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>MySQL Translate - Jesse Williams</title>
    <meta name="description" content="An sql schema representation sync system by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content}  github_url={github_url} images={images} />
