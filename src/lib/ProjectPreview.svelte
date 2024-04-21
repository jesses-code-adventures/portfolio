<script>
    import {onMount} from "svelte";
    /** @type {string} name */
    export let name;
    /** @type {string} description*/
    export let description;
    /** @type {string} url*/
    export let url;
    /** @type {boolean} external */
    export let external = false;
    onMount(() => {
        const link = document.getElementById(url);
        if (!link) {
            throw new Error("No a tag found");
        }
        if (external) {
            link.setAttribute("target", "_blank");
        } else {
            link.removeAttribute("target");
        }
    })

</script>

<a href={url} id={url}>
    <div class={`${external ? "hover:cursor-pointer": ""} h-48 w-72 sm:h-60 sm:w-52 md:h-48 md:w-72 rounded-sm border-2 border-t-0 border-gray-400 text-center hover:cursor-default hover:bg-opacity-30 hover:shadow-glow hover:shadow-zinc-300 dark:border-gray-200 hover:dark:shadow-zinc-50`}>
        <h3 class="border-2 border-x-0 border-gray-400 dark:border-gray-200 ">{name}</h3>
        <p class="p-4">{description}</p>
    </div>
</a>
