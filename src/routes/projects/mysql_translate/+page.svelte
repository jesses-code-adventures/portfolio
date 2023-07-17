<script>
    import ProjectView from "$lib/ProjectView.svelte";
    const name = "MySQL Translate";
    const content = `MySQL Translate is a CLI tool built in Rust. It is designed to keep multiple representations of a MySQL schema in sync with each other, and with the database. It is designed to be used to be able to quickly iterate on database schemas in multiple production environments, and is currently used in production at Givtel.`;
    const github_url = "https://github.com/jesses-code-adventures/mysql_translate"
</script>

<ProjectView name={name} content={content}  github_url={github_url} images={[]} />
