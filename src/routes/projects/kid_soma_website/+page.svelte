<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "Kid Soma Artist Website";
    const content = `Kid Soma is a musician based in Sydney who I frequently collaborate with.\n\nI built this website for him using Astro and TailwindCSS.\n\nIt is hosted on Vercel.`;
    const github_url = "https://github.com/jesses-code-adventures/kid-soma-website"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>Kid Soma Website - Jesse Williams</title>
    <meta name="description" content="An artist marketing website by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content} web_url={"https://kid-soma-website.vercel.app/"} github_url={github_url} images={images} />
