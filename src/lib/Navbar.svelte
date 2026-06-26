<script>
	let isOpen = false;

	const links = [
		['Home', '/'],
		['Projects', '/projects'],
		['Background', '/background'],
		['Thoughts', '/thoughts'],
		['Contact', '/contact']
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav
	class="fixed left-0 top-0 z-50 w-full border-b border-stone-200 bg-stone-50 text-stone-900 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
		<a class="nav-mark" href="/" on:click={closeMenu}>Jesse Williams</a>

		<div class="nav-desktop-links items-center gap-7">
			{#each links.slice(1) as [label, href]}
				<a class="nav-link" {href} on:click={closeMenu}>{label}</a>
			{/each}
		</div>

		<button
			class="nav-menu-button"
			aria-label="Toggle navigation"
			aria-expanded={isOpen}
			on:click={toggleMenu}
		>
			<span></span>
			<span></span>
		</button>
	</div>

	<div
		class="nav-dropdown absolute left-0 top-[100%] w-full transition-opacity"
		class:pointer-events-none={!isOpen}
		class:opacity-0={!isOpen}
		class:opacity-100={isOpen}
	>
		<div class="mx-auto flex max-w-7xl justify-end px-5">
			<div
				class="mt-2 grid min-w-48 gap-5 border border-stone-200 bg-stone-50 px-5 py-5 text-right shadow-lg shadow-stone-200/40 dark:border-stone-800 dark:bg-stone-950 dark:shadow-black/30"
			>
				{#each links as [label, href]}
					<a class="nav-link text-lg" {href} on:click={closeMenu}>{label}</a>
				{/each}
			</div>
		</div>
	</div>
</nav>

<style>
	.nav-mark,
	.nav-link {
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
	}

	.nav-desktop-links {
		display: none;
	}

	.nav-dropdown {
		display: block;
	}

	.nav-mark {
		font-size: 0.8rem;
		font-weight: 650;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.nav-link {
		position: relative;
		font-size: 0.78rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: inherit;
		opacity: 0.72;
		transition:
			opacity 160ms ease,
			color 160ms ease;
	}

	.nav-link:hover,
	.nav-mark:hover {
		opacity: 1;
		color: rgb(180 83 9);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.35rem;
		height: 1px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 160ms ease;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	.nav-menu-button {
		display: grid;
		gap: 0.35rem;
		width: 2rem;
		padding: 0.35rem 0;
		cursor: pointer;
		place-items: center;
	}

	.nav-menu-button span {
		display: block;
		height: 1px;
		width: 100%;
		background: currentColor;
	}

	@media (min-width: 640px) {
		.nav-desktop-links {
			display: flex;
		}

		.nav-menu-button,
		.nav-dropdown {
			display: none;
		}
	}
</style>
