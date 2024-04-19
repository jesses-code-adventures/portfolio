<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "MySQL Translate";
    const content = `MySQL Translate is a CLI tool that's built in Rust.

It is designed to keep multiple representations of a MySQL schema in sync with each other, and with the database.

I built this because I was programming multiple consumers of the same MySQL database across different languages and ORMs. I also prefer to manage schema migrations outside of an ORM, so I wanted something that would allow me to keep my ORM schemas aligned with the state of the database schemas.

It does have utility because one of the ORM's I use, Prisma, removes relations you have created in the ORM model if you use their provided pull method. I was able to avoid that behaviour by building something custom. It  was also a great hands on introduction to Rust, particularly due to the amount of string processing that was required.

With that said, the benefits of this may be outweighed by the difficulty of maintainence and slow iteration speed. It has some bugs and probably isn't something I'd plan to revisit, as maintaining the ORM schemas by hand is an easier solution.

If I revisit this, I would probably take a simpler approach using bash scripts or a less complex approach in Rust. After having built other projects, I feel like I could have built the generic implementation of this more simply and handled Prisma's edge cases in a more isolated or plugin-oriented way.
`;
    const github_url = "https://github.com/jesses-code-adventures/mysql_translate"
    /** @type {Array<import('$lib/Image.svelte')>} */
    const images = [];
</script>

<svelte:head>
    <title>MySQL Translate - Jesse Williams</title>
    <meta name="description" content="An sql schema representation sync system by Jesse Williams.">
</svelte:head>

<ProjectView name={name} content={content} web_url={null} github_url={github_url} images={images} />
