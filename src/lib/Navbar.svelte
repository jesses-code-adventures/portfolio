<script>
	import { onMount } from 'svelte';
	let isOpen = false;
	const tinyDeviceWidth = 340;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	function changeWindow() {
		closeMenu();
	}

	//Reset scroll top


	// window.on('beforeunload', function(){
	// 	  $(window).scrollTop(0);
	// });

	let smallDevice = false;
	let tinyDevice = false;
	onMount(() => {
		history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        window.onpopstate = () => {
            window.scrollTo(0, 0);
        };
		smallDevice = window.innerWidth <= 640;
		tinyDevice = window.innerWidth <= tinyDeviceWidth;
		window.addEventListener('resize', () => {
			isOpen = false;
			if (window.innerWidth <= 640 && window.innerWidth > tinyDeviceWidth) {
				smallDevice = true;
				tinyDevice = false;
			} else if (window.innerWidth <= tinyDeviceWidth) {
				tinyDevice = true;
				smallDevice = false;
			} else {
				smallDevice = false;
				tinyDevice = false;
			}
		});
	});
</script>

{#if tinyDevice}
	<div hidden>navbar</div>
{:else if smallDevice}
	<div
		id="smallDevceMenuAndButton"
		class="fixed left-0 top-0 z-50 w-full bg-stone-100 text-black dark:bg-black dark:text-white"
	>
		<div id="smallDeviceButtonContainer" class="flex items-center justify-end p-4">
			<button id="hamburger" aria-label="hamburger" class="hamburger" on:click={toggleMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					class="bi bi-list"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M2.5 12.5A.5.5 0 0 1 2 12h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 2 8h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 2 4h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"
					/>
				</svg>
			</button>
		</div>
		<div
			id="smallDeviceOptions"
			class:menu-enter={!isOpen}
			class:menu-enter-active={isOpen}
			class="h-screen flex flex-col text-center"
		>
			<a
				id="smallHomeOption"
				class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
				on:click={changeWindow}
				href="/">Home</a
			>
			<a
				id="smallBackgroundOption"
				class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
				on:click={changeWindow}
				href="/background">Background</a
			>
			<a
				id="smallThoughtsOption"
				class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
				href="/thoughts"
				on:click={changeWindow}>Thoughts</a
			>
			<a
				id="smallContactOption"
				class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
				href="/contact"
				on:click={changeWindow}>Contact</a
			>
		</div>
	</div>
{:else}
	<div
		id="largeDeviceOptions"
		class="fixed top-0 z-50 flex w-full justify-evenly bg-stone-100 text-black dark:bg-black dark:text-white sm:px-16"
	>
		<a
			id="largeHomeOption"
			class="p-4 hover:cursor-default dark:text-white hover:bg-stone-300 dark:hover:bg-stone-700 sm:text-xl"
			href="/"
			on:click={changeWindow}>Home</a
		>
		<a
			id="largeBackgroundOption"
			class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
			on:click={changeWindow}
			href="/background">Background</a
		>
		<a
			id="largeThoughtsOption"
			class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
			href="/thoughts"
			on:click={changeWindow}>Thoughts</a
		>
		<a
			id="largeContactOption"
			class="p-4 hover:cursor-default hover:bg-stone-300 dark:text-white dark:hover:bg-stone-700 sm:text-xl"
			href="/contact"
			on:click={changeWindow}>Contact</a
		>
	</div>
{/if}

<style>
	.menu-enter {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		background-color: var(--tw-bg-opacity);
		transform: translateX(-100%);
		transition: transform 0.3s ease;
	}

	.menu-enter-active {
		transform: translateX(0);
	}

	.hamburger {
		display: block;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		.hamburger {
			display: none;
		}
	}
</style>
