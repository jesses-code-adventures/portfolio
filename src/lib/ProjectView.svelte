<script>
    /** @type {string} name */
    export let name;
    /** @type {string} content */
    export let content;
    /** @type {?string} web_url*/
    export let web_url;
    /** @type {?string} github_url */
    export let github_url;
    /** @type {Array<import('$lib/Image.svelte')>} */
    export let images;
</script>

<div class="pt-24 h-screen">
    <h1 class="text-3xl text-left lg:pl-24">{name}</h1>
    {#if web_url}
        <a href={web_url} target="_blank" class="text-xl text-left lg:pl-24 italic">Website</a>
        <br />
    {/if}
    {#if github_url}
        <a href={github_url} target="_blank" class="text-xl text-left lg:pl-24 italic">Github</a>
        <br />
    {/if}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center items-center mx-auto gap-y-8">
        {#each images as image}
            {image}
        {/each}
    </div>
    <div class="whitespace-pre-line p-4 text-xl">{content}</div>
</div>
