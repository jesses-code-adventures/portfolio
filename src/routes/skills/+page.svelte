<svelte:head>
	<title>Skills - Jesse Williams</title>
	<meta name="Jesse Williams - Skills" content="Specifics around my work skills" />
</svelte:head>

<div class="flex flex-col justify-between text-center">
	<div class="flex h-72 justify-between">
		<div class="relative flex w-full flex-col justify-end border-stone-600 md:h-2/5 md:border-b-4">
			<h1 class="text-3xl sm:pl-12 md:text-left lg:pl-36">Skills</h1>
		</div>
	</div>
	<div class="flex justify-evenly whitespace-pre-line">
		<div id="bioText" class="w-3/5">
		Much of my programming experience has been professional, and isn't available for public display. However, I have picked up some skills in the process that could be worth touching on.

                I am a self-taught programmer, and learned what I know while working for a charity call center in Sydney. When I was appointed as an Operations Assistant, no employee in the business could write code and all status reports and operational processes were generated/executed by hand.

                Since I had picked up some Java and Max/MSP experience in university, I recognised that much of our repeated work could be automated. This started my journey down a rabbit hole with unforetold depth!
            <h2 class="py-8 text-2xl">Scheduled Scripting</h2>
            <p>
                The most obvious deficiency I observed in the business was the exact same technical tasks being repeated by specific employees.

                People were spending 15-30 minutes downloading 4 separate sources of raw data from the reporting page of our dialling software and make pivot tables of each in Excel.

                They would then use VLookups to join the data from each source together, and would need to do this twice - once to analyse campaign performance, and another to analyse employee performance.

                To remedy this, I used Selenium in Python to execute the same physical motions people made to download each raw data file, then used Pandas to join the data together and generate pivot tables and emailed the results to the relevant people.

                This meant these status reports could happen four times per day rather than once, while freeing up time for my non-technical coworkers to work with staff in a more hands-on way.

                After solving the problem in this way, things felt good but I knew they could be better. I started learning about APIs and realised things didn't need to be done using web crawlers if you could access an API directly (something that feels hilariously obvious now).
            </p>
	</div>
	</div>
</div>
