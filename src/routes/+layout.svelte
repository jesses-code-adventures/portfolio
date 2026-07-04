<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { absoluteUrl } from '$lib/site.js';

	const defaultTitle = 'Jesse Williams - Software Engineer';
	const defaultDescription =
		'Portfolio for Sydney software engineer Jesse Williams: full-stack product work, AI agents, automation, infrastructure and open source tooling.';

	$: canonicalUrl = absoluteUrl($page.url.pathname);
	$: personSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Jesse Williams',
		url: absoluteUrl('/'),
		jobTitle: 'Software Engineer',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Sydney',
			addressCountry: 'AU'
		},
		sameAs: [
			'https://github.com/jesses-code-adventures/',
			'https://www.linkedin.com/in/jesse-williams-16b70bba/',
			'https://twitter.com/jessesbeets/'
		]
	});
	$: personSchemaTag = `<script type="application/ld+json">${personSchema}<` + '/script>';
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={defaultTitle} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Jesse Williams" />
	<meta name="twitter:card" content="summary" />
	{@html personSchemaTag}
</svelte:head>

<Navbar />
<div id="content" class="flex flex-col justify-between px-5 pt-16 text-center sm:px-8 lg:px-12">
	<slot />
</div>
<Footer />
