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
    document.title = "Contact - Jesse Williams";
</script>

<div class="flex justify-evenly pt-32 h-screen">
	<form class="flex flex-col w-72 dark:border-stone-200 h-96 justify-evenly">
        <label for="name">Name</label>
		<input id="name" class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" type="text" on:change={setName} />
        <label for="email">Email</label>
		<input id="email" class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" type="text" on:change={setEmail} />
        <label for="message">Message</label>
        <textarea id="message" class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow" on:change={setMessage} />
		<button class="hover:dark:bg-stone-600 p-4" on:click={() => console.log(name, email, message)}>Submit</button>
	</form>
</div>
