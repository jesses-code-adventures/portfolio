<script>
	let name = '';
	let email = '';
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

	/**
	 * @param {Event} event
	 */
	function handleSubmit(event) {
		event.preventDefault();
		console.log(name, email, message);
		alert('Message sent!');
		name = '';
		email = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Contact - Jesse Williams</title>
	<meta name="description" content="Contact Sydney-based software developer Jesse Williams." />
</svelte:head>

<div class="flex justify-evenly pt-12">
	<form
		class="flex h-96 w-72 flex-col justify-evenly dark:border-stone-200"
		name="contact"
		method="POST"
		on:submit={handleSubmit}
	>
		<input type="hidden" name="form-name" value="contact" />
		<input
			id="name"
			name="name"
			required
			placeholder="Name"
			autocomplete="name"
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
			type="text"
			on:change={setName}
		/>
		<input
			id="email"
			name="email"
			required
			placeholder="Email"
			autocomplete="email"
			type="email"
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
			on:change={setEmail}
		/>
		<textarea
			id="message"
			name="message"
			required
			placeholder="Type message..."
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
			on:change={setMessage}
		/>
		<button type="submit" class="bg-stone-50 p-4 hover:bg-stone-300 dark:bg-white dark:text-black dark:hover:text-white hover:dark:bg-stone-600 focus:outline-stone-300 focus:dark:outline-zinc-50 hover:cursor-default">Submit</button>
	</form>
</div>
