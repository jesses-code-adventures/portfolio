<script>
    /** @type {string} name */
    export let name;
    /** @type {string} description*/
    export let description;
    /** @type {string} url*/
    export let url;
</script>

<a href={url}>
    <div class="h-48 w-72 rounded-sm border-2 border-t-0 border-gray-200 text-center hover:shadow-glow hover:shadow-zinc-50 hover:cursor-default">
        <h3 class="border-2 border-x-0">{name}</h3>
        <p class="p-4">{description}</p>
    </div>
</a>
