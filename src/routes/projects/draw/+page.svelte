<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "draw";
    const content = `
draw is a simple drawing application inspired by tools like <a href="https://excalidraw.com/" class="text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100" target="_blank">Excalidraw</a> and <a href="https://dingboard.com/" target="_blank" class="text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100">Dingboard</a>. Despite being less developed than the apps that inspired it, draw attempts to emulate the feel of these apps by placing the user in a web sandbox and allowing them to create.

Practically I wanted to explore this idea to get a different experience of client-side javascript, particularly focusing on building and deploying the application with no dependencies.

This desire was borne out of witnessing many online debates between other nerds about the evils of javascript frameworks and how much needless complexity they were adding. Since I learned javascript, typescript and web frameworks simultaneously, I wanted to use the project as a way to step back and get a sense of the other side of the discussion.`;
    const github_url = "https://github.com/jesses-code-adventures/draw"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>Gecco - Jesse Williams</title>
    <meta name="description" content="A management console made by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content} web_url={"https://draw.fly.dev/"} github_url={github_url} images={images} />
