<script>
	import ProjectView from '$lib/ProjectView.svelte';

	const name = 'Rivergraph';
	const content = `
Rivergraph is a Go library for tracking event flows where one event can fan out into child events, and those child events may continue the chain.

I built it while working on onboarding systems at GiveTel, where a single operational action could kick off a set of downstream jobs, retries, callbacks and side effects. The hard part was not just firing those events, but being able to understand the shape of what happened afterwards: which parent event caused which child event, where a branch stopped, and how a larger workflow moved through the system.

The project models that as a graph rather than a flat event log. That made it easier to reason about fan-out, follow a path from the original trigger to later side effects, and keep debugging focused on the relationships between events instead of searching through unrelated log lines.

It is a fairly specific tool, but it came from a real production pain point: making event-driven backend work easier to inspect when the interesting behaviour is spread across several related events rather than one request.
`;
	const github_url = 'https://github.com/jesses-code-adventures/rivergraph';
	/** @type {Array<import('$lib/Image.svelte')>} */
	const images = [];
</script>

<svelte:head>
	<title>Rivergraph - Jesse Williams</title>
	<meta
		name="description"
		content="Rivergraph is a Go library for tracking parent and child event fan-out flows."
	/>
</svelte:head>

<ProjectView {name} {content} web_url={null} {github_url} {images} />
