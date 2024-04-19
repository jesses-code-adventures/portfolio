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
		// fetch('/', {
		// 	method: 'GET',
		// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		// 	body: new URLSearchParams({ 'form-name': 'contact', name, email, message }).toString()
		// }).then(() => {
		// 	alert('Message sent!');
		// 	name = '';
		// 	email = '';
		// 	message = '';
		// }).catch((error) => {
		// 	alert('Error sending message. Please try again later.');
		// 	console.error(error);
		// })
	}
</script>

<svelte:head>
	<title>Contact - Jesse Williams</title>
	<meta name="description" content="Contact Sydney-based software developer Jesse Williams." />
</svelte:head>

<div class="flex justify-evenly pt-12">
	<form
		class="flex flex-col w-72 dark:border-stone-200 h-96 justify-evenly"
		name="contact"
		method="POST"
		on:submit={handleSubmit}
	>
		<input type="hidden" name="form-name" value="contact" />
		<label for="name">Name</label>
		<input
			id="name"
			name="name"
			required
			placeholder="Name"
			autocomplete="name"
			class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow p-2"
			type="text"
			on:change={setName}
		/>
		<label for="email">Email</label>
		<input
			id="email"
			name="email"
			required
			placeholder="Email"
			autocomplete="email"
			type="email"
			class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow p-2"
			on:change={setEmail}
		/>
		<label for="message">Message</label>
		<textarea
			id="message"
			name="message"
			required
			placeholder="Type here..."
			class="dark:bg-stone-950 dark:border-stone-200 border-2 focus:shadow-glow p-2"
			on:change={setMessage}
		/>
		<button type="submit" class="hover:dark:bg-stone-600 p-4">Submit</button>
	</form>
</div>
