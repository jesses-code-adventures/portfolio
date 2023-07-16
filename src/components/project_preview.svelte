<script>
    /** @type {string} name */
    export let name;
    /** @type {string} description*/
    export let description;
    /** @type {string} url*/
    export let url;
</script>

<a href={url}>
    <div class="h-48 border-gray-200 border-2 border-t-0 text-center w-72 hover:shadow-glow">
        <h4 class="border-2 border-x-0">{name}</h4>
        <p class="p-4">{description}</p>
    </div>
</a>
