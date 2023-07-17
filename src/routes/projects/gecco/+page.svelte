<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "Gecco";
    const content = `Gecco is a management console built for a charity call center.\n\nIt allows access to leads that have been pushed to the charity via an API I built in Python, as well as offering the ability to test phone number connection status via an external API, manage staff rostering and various other operational tasks.\n\nIt was built using the T3 Stack, which includes Typescript, TRPC, Tailwind, Prisma and Zod.`;
    const github_url = "https://github.com/jesses-code-adventures/gecco"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>Gecco - Jesse Williams</title>
    <meta name="description" content="A management console made by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content}  github_url={github_url} images={images} />
