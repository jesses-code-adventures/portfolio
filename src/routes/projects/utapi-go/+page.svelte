<script>
	import ProjectView from '$lib/ProjectView.svelte';
	const name = 'utapi-go';
	const content = `
A simple golang library built to interact with the API of a file upload service called <a href="https://uploadthing.com/ target="_blank">Uploadthing</a>.

I built this to mirror the functionality provided by <a href="https://uploadthing-1m3c.vercel.app/api-reference/ut-api" target="_blank">Uploadthing's typescript SDK</a> for users that ran golang servers.

The reason for building the library and making it public was that Uploadthing don't provide documentation for traditional API endpoints, instead encouraging users to use the SDK. I wanted Go users to be able to reference that documentation with access to similar tools.

You can use utapi-go by running <span class="italic">go get github.com/jesses-code-adventures/utapi-go</span> and then importing it into your project. Documentation is in the github repository and in the docstrings of the code.

Example usage:
<pre class="z-0">
<code class="language-go z-0">
package main

import (
    "github.com/jesses-code-adventures/utapi-go"
    "os"
    "fmt"
)

func main() {
    // Create api handler
    utApi, err := utapi.NewUtApi()
    if err != nil {
        fmt.Println("Error creating uploadthing api handler")
        fmt.Println(fmt.Errorf("%s", err))
        os.Exit(1)
    }

    // Example - deleting a file
    // This is the key returned by uploadthing when you create a file
    keys := []string{"fc8d296b-20f6-4173-bfa5-5d6c32fc9f6b-geat9r.csv"}
	resp, err := utApi.DeleteFiles(keys)
	if err != nil {
		fmt.Println("Error deleting files")
		fmt.Println(fmt.Errorf("%s", err))
	} else {
		fmt.Println("Successfully deleted file")
		fmt.Println(resp.Success)
	}
}
</code>
</pre>
`;
	const github_url = 'https://github.com/jesses-code-adventures/utapi-go';
	/** @type {Array<import('$lib/Image.svelte')>} */
	const images = [];
</script>

<svelte:head>
	<title>utapi-go - Jesse Williams</title>
	<meta
		name="description"
		content="A golang api wrapper for interacting with the uploadthing API."
	/>
</svelte:head>

<ProjectView {name} {content} web_url={null} {github_url} {images} />
