<script>
    /** @type {string} name */
    export let name;
    /** @type {string} content */
    export let content;
    /** @type {?string} github_url */
    export let github_url;
    /** @type {Array<import('$lib/Image.svelte')>} */
    export let images;
    document.title = name;
</script>

<div>
    <h1 class="text-3xl text-left pl-36">{name}</h1>
    {#if github_url}
        <a href={github_url} class="text-3xl text-left pl-36 italic">View the code on github</a>
    {/if}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center items-center mx-auto gap-y-8">
        {#each images as image}
            {image}
        {/each}
    </div>
    <div class="p-4 text-xl">{content}</div>
</div>
