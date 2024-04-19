<script>
	import ProjectView from '$lib/ProjectView.svelte';
	const name = 'Ableton-V';
	const content = `
Ableton-V is a CLI tool that's built in Rust.

It is a basic implementation of version control for Ableton sessions, and allows the user to trigger a save as action from the console while storing the session metadata in a Sqlite database.

I didn't go into this project expecting to build it all the way out, but I wanted to experiment with treating Ableton sessions as raw XML as I had seen this mentioned on a forum somewhere. It turns out parsing them as XML in Rust was very doable, and I was able to extract metadata such as track names/numbers, sample locations and much more.

Rust's From trait is an example of a pattern that makes the language suited to this task. Being able to define a struct in a way that makes sense for the program and implementing the From trait for a reference to an XML event made it very simple to parse out different types of XML chunk in a dynamic way.

<pre class="z-0">
<code class="language-rust z-0">
impl<'a> From<&XmlEvent> for ParserOutput<'a> {
    fn from(event: &XmlEvent) -> ParserOutput<'a> {
        match event {
            XmlEvent::StartElement { name, .. } => match name.local_name.as_str() {
                "Ableton" => ParserOutput::Ableton(Ableton::from(event)),
                "LiveSet" => ParserOutput::LiveSet(LiveSet::from(event)),
                "Tracks" => ParserOutput::TracksStart(event.clone()),
                _ => { // More cases could be added above to parse out different events from the xml
                    ParserOutput::UnchangedChunk(event.clone())
                }
            },
            XmlEvent::EndElement { name, .. } => match name.local_name.as_str() {
                "Ableton" => ParserOutput::AbletonEnd(event.clone()),
                "LiveSet" => ParserOutput::LiveSetEnd(event.clone()),
                "Tracks" => ParserOutput::TracksEnd(event.clone()),
                _ => ParserOutput::Close(event.clone()),// More cases could be added above to parse out different events from the xml
            },
            XmlEvent::StartDocument { .. } => ParserOutput::EndDocument,
            _ => ParserOutput::None,
        }
    }
}
</code>
</pre>

As a proof of concept I quite enjoyed exploring this, and unlike <a href="/projects/mysql_translate" class="hyperlink hover:cursor-default">MySQL Translate</a> I think Rust was the right choice here. I would like to build out the ability to diff sessions, and to be able to navigate through session history in the terminal as I can with git if I were to complete this.
`;
	const github_url = 'https://github.com/jesses-code-adventures/ableton-v';
	/** @type {Array<import('$lib/Image.svelte')>} */
	const images = [];
</script>

<svelte:head>
	<title>Ableton-V - Jesse Williams</title>
	<meta name="description" content="An ableton version control system by Jesse Williams." />
	<link href="/prism.css" rel="stylesheet" />
	<script src="/prism.js" defer></script>
</svelte:head>

<ProjectView {name} {content} web_url={null} {github_url} {images} />
