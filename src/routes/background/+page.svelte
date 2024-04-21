<div class="prosepre xl:px-48 pb-20">
	<pre class="prosepre">
I am a self-taught software developer and have been creating automation solutions for the charity telefundraising agency <a
			class="hyperlink"
			href="https://givetel.com/"
			target="_blank">Givetel</a
		> as an Operations Development Manager since 2021. I took on  this role after implementing solutions to automate our internal reporting processes using VBA in 2020, saving hours of excel work per week that was being done by hand in the management team. This led to learning Python and developing these solutions further, increasing the variety of information that could be provided and the speed of the feedback loop we worked with.

As I continued to gain experience, we reached a point where a major migration was required. This meant we needed to rebuild our API's from scratch, as our current setup had been outsourced to a company we were no longer in touch with. Our previous platform served inherently non-relational data, so our previous API had been built around storing non-relational data in DynamoDB. We wanted to move toward a relational model to standardize our data, which was now possible. I used AWS API Gateway and Lambda functions to build the API endpoints, along with setting up a MySQL database which would go on to serve many purposes.

Now that we had a new API, we needed a way to monitor its activity and export data that had been pushed to it. This presented an opportunity to build an internal web platform that allowed our data team to monitor and access the incoming records. Previously this had been a desktop application for the old API, which limited its usage to Windows and was generally a bit slow. I had picked up a little Javascript while learning to code, but when I came across <a
			href="https://twitter.com/t3dotgg"
			target="_blank"
			class="hyperlink">Theo's</a
		> <a href="https://create.t3.gg/" target="_blank" class="hyperlink">T3 Stack</a
		> the concepts were straightforward enough for me to tie the concepts together and build what we needed quite quickly. The density of the Typescript/React ecosystem allowed me to access a thorough set of features for next to no cost, as most of the services have extremely generous free tiers. With the platform in production for over a year, costs have not increased despite having detailed logs (Vercel & Axiom), easy authentication management with hotswappable oauth providers (Next Auth) and email services provided by React Email.

If you're a bit more technical, you might enjoy <a
			class="internalHyperlink"
			href="/thoughts/language-exploration"
			>reading about my experiences exploring programming languages over the past few years</a
		>. I didn't want to go too much further into it than I did above, but I have a lot of thoughts on it.

My work has continued to present novel problems and new opportunities to learn, which is what I love about writing code. Maintaining my code for a long period of time has taught me a lot of lessons about premature abstraction, writing readable code, using suitable logging solutions, applying appropriate design patterns and many more of the endless programming problems that can only be discovered by shooting yourself in the foot. Repeatedly.
</pre>
</div>

<svelte:head>
	<title>Background - Jesse Williams</title>
	<meta name="description" content="A bit about me" />
	<link href="/prism.css" rel="stylesheet" />
	<script src="/prism.js" defer></script>
</svelte:head>
