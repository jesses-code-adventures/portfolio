<script>
	import ProjectView from '$lib/ProjectView.svelte';

	const name = 'pipeline.nvim';
	const content = `
pipeline.nvim is a Neovim plugin for viewing GitHub Actions runs without leaving the editor.

I built it because I prefer CI and deployment feedback to be tightly integrated with my editor. When I am iterating on a product, reviewing an agent's changes, or waiting on a deployment, I want to keep progressing in the same Neovim session while still being able to monitor whether the supporting checks are moving, failing or passing.

The plugin opens a floating window that shows workflow status for the current repository and refreshes run state in place, making CI feedback part of the same editor workflow as code review and development.

The plugin uses the GitHub CLI for authentication and repository access, so setup stays close to the tools most GitHub-heavy terminal workflows already use.

Install it with Neovim's built-in package support:

<pre class="z-0"><code class="language-lua z-0">vim.pack.add {
    {'https://github.com/jesses-code-adventures/pipeline.nvim'}
}

require('pipeline').setup({
    exclude_organisations = {"microsoft", "google"}
})

vim.keymap.set('n', '&lt;leader&gt;pl', ':Pipeline open&lt;CR&gt;')</code></pre>

Once installed, run <span class="italic">:Pipeline open</span> to open the pipeline viewer.
`;
	const github_url = 'https://github.com/jesses-code-adventures/pipeline.nvim';
	/** @type {Array<import('$lib/Image.svelte')>} */
	const images = [];
</script>

<svelte:head>
	<title>pipeline.nvim - Jesse Williams</title>
	<meta
		name="description"
		content="A Neovim plugin for viewing GitHub Actions pipeline status in a floating editor window."
	/>
	<link href="/prism.css" rel="stylesheet" />
	<script src="/prism.js" defer></script>
</svelte:head>

<ProjectView {name} {content} web_url={null} {github_url} {images} />
