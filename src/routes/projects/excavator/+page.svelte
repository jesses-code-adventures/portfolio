<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "Excavator";
    const content = `
Excavator is a CLI application designed to help music producers manage their samples more easily. This is quite niche of course as it requires someone who makes sample-based music and is comfortable using the command line, but I made it because I wanted it.

Using Excavator, it's possible to create libraries out of your samples by tagging them as parts of certain collections, which can contain subcollections. You can then export your collections to a directory, which can be loaded onto a hardware machine. Additionally, the export can be done using symlinks instead of copying the files directly, allowing DAW users to create virtual collections of their samples and reducing the need to jump between sample packs.

This was the first CLI application I'd made in Go, but I was familiar with making CLI applications in Rust, so the learning curve was not too steep. I was able to get the application to a usable state in a few days, and I've been using it to manage my own samples since then. It was my first experience deploying an application to Homebrew, a process which has caused me considerable emotional turmoil, but this was also a great exercise in building a deployment pipeline and testing it.

I'd also like to mention how great the Charm CLI tools are, including bubbletea, lipgloss and various others. These tools allowed me to establish the render loop and the styling of the application extremely quickly, they were really a pleasure to get set up with.

I'm not sure how useful this application is to anyone else, but it's very satisfying to me personally.
`
    const github_url = "https://github.com/jesses-code-adventures/excavator"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>Excavator - Jesse Williams</title>
    <meta name="description" content="A golang terminal application for managing music samples">
</svelte:head>

<ProjectView name={name} content={content} web_url={null} github_url={github_url} images={images} />
