<script>
  import emailjs from '@emailjs/browser';
  // @ts-expect-error
  const sendEmail = (e) => {
    if (!e.target) return;
    emailjs
      .sendForm('service_x4ir6va', 'template_huobpyi', e.target, {
        publicKey: 'GIo-VAHsmJAU2L0cr',
      })
      .then(
        () => {
	  alert('Message sent!');
          console.log('SUCCESS!');
        },
        (error) => {
	  alert('Message failed :(');
          console.log('FAILED...', error.text);
        },
      );
  };
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
		on:submit|preventDefault={sendEmail}
	>
		<input type="hidden" name="form-name" value="contact" />
		<input
			id="from_name"
			name="from_name"
			required
			placeholder="Name"
			autocomplete="name"
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
			type="text"
		/>
		<input
			id="email"
			name="email"
			required
			placeholder="Email"
			autocomplete="email"
			type="email"
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
		/>
		<textarea
			id="message"
			name="message"
			required
			placeholder="Type message..."
			class="border-2 p-2 focus:shadow-glow focus:shadow-zinc-300 focus:outline-none dark:border-stone-200 dark:bg-stone-950 focus:dark:shadow-zinc-50"
		/>
		<button
			type="submit"
			class="bg-stone-50 p-4 hover:bg-stone-300 dark:bg-white dark:text-black dark:hover:text-white hover:dark:bg-stone-600 focus:outline-stone-300 focus:dark:outline-zinc-50 hover:cursor-default"
			>Submit</button
		>
	</form>
</div>
