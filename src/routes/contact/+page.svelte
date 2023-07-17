<script>
	let name = '';
	let email= '';
	let message = '';

	/**
	 * @param {Event & { currentTarget: HTMLInputElement }} event
	 */
	function setName(event) {
		name = event.currentTarget.value;
	}

	/**
	 * @param {Event & { currentTarget: HTMLInputElement }} event
	 */
	function setEmail(event) {
		email = event.currentTarget.value;
	}

	/**
	 * @param {Event & { currentTarget: HTMLTextAreaElement }} event
	 */
	function setMessage(event) {
		message = event.currentTarget.value;
	}
</script>

<svelte:head>
    <title>Contact - Jesse Williams</title>
    <meta name="description" content="Contact Sydney-based software developer Jesse Williams.">
</svelte:head>

<div class="flex justify-evenly pt-32 h-screen">
	<form class="flex flex-col w-72 dark:border-stone-200 h-96 justify-evenly" name="contact" method="POST" data-netlify="true" >
    <input type="hidden" name="form-name" value="contact" />
        <label for="name" >Name</label>
		<input id="name" required placeholder="Name" class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" type="text" on:change={setName} />
        <label for="email">Email</label>
		<input id="email" required placeholder="Email" type="email" class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" on:change={setEmail} />
        <label for="message">Message</label>
        <textarea id="message" required placeholder="Type here..." class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" on:change={setMessage} />
		<button type="submit" class="hover:dark:bg-stone-600 p-4">Submit</button>
	</form>
</div>
