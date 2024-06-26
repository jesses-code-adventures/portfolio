<div class="xl:px-48 pb-20">
	<pre class="prosepre">
<h1 id="language-exploration-header" class="text-xl">Language Exploration</h1>
Every time I've learned a new programming language, I've come away with a new perspective, pattern or approach that I can translate to the languages I knew before.

It's fair to say that my first practical programming language was Python. I learned the basics with Java at university and did some VBA scripts early in my career, but I never wrote larger solutions until working with Python. While it still makes up a large amount of my professional programming, concepts from other languages improved my Python programming substantially. Maybe Python's looseness meant that more strict languages would inevitably be educational, but the large difference between the ideas from each new language makes it feel like variety itself is of benefit.

At this stage, an approach to getting a set of records from an API might've looked like this for me.
</pre>
	<pre class="prosepre">
<code class="language-python">
{`
import requests
import EXTERNAL_BASE_URL
import MySQL  ## class I had made to handle sql requests

sql = MySQL()

def get_record(record_id):
    url = EXTERNAL_BASE_URL + "/record/" + record_id
    resp = requests.get(url)
    record = resp.json()
    return record

def get_record_ids(campaign_id):
    url = EXTERNAL_BASE_URL + "/records/" + campaign_id
    resp = requests.get(url)
    record_ids = resp.json()
    return record_ids

def put_record_in_database(record):
    sql.core.put_item_in_database(record)

def transfer_records(campaign_id):
    record_ids = get_record_ids(campaign_id)
    for record_id in record_ids:
        record = get_record(record_id)
        put_record_in_database(record)

def transfer_all_records():
    campaign_ids = sql.core.execute_raw_sql(
        "select campaign_id from Campaigns", fetchall=True
    )
    for campaign_id in campaign_ids:
        transfer_records(campaign_id)

transfer_all_records()
`}
</code>
</pre>
	<pre class="prosepre">
After writing code like this I would run it locally, then start making adjustments as errors or unexpected behaviour emerged.

Next I tackled Typescript as a result of needing to build a web tool for monitoring our API behaviour at work. Immediately I learned the value of two things: strong type hints and using tools that will tell you when you've goofed it up (namely good linting and formatting). These ideas are front and center when learning Typescript, but were a bit of an afterthought in the Python community (this is less the case now). Changing a few VSC*de settings and installing a Python linter immediately improved my work, and it wouldn't have happened as quickly without learning Typescript.

As a side note, it was applying these concepts to Python that also made me appreciate using jsdoc comments with vanilla Javascript over using Typescript. The ability to get all the linting and LSP benefits without a build stage and with what feels like better performance is a nice alternative to Typescript. Simply using type hints and linters in Python made it evident that Typescript is essentially just a Javascript linter.

Since our internal tooling needed to be interactive in multiple ways, I used more than just Typescript to build the platform. The <a
			href="https://create.t3.gg/"
			target="_blank"
			class="hyperlink">T3 Stack</a
		> was instrumental in putting it together and provided insights into how modern Javascript websites patch many third party services together. Learning NextJS in combination with TRPC and Prisma was such a refreshing workflow, and it made type-safety and composability strong preferences of mine. I found myself bringing patterns back to Python that I used more in the NextJS environment, particularly the use of type hints and sharing global state throughout an application. Using Zod also made me more aware of the level of validation I should be doing at runtime in dynamically typed languages, as it constantly surprised me how often incoming data would be parsed as an unexpected type in Javascript.
</pre>

	<pre class="prosepre">
<code class="language-python">
{`
import requests
import EXTERNAL_BASE_URL
import MySQL


def validate(record: dict[str, str]) -> None:
    """
    Add validation function in line with the types we expect.
    """
    if record is None:
        raise ValueError("Record is None")
    schema = {
        "id": str,
        "agent_id": int,
        "outcome": str,
        "customer_id": str,
    }
    for key, value in record.items():
        if key not in schema:
            raise ValueError(f"Invalid key: {key}")
        if not isinstance(value, schema[key]):
            raise ValueError(f"Invalid value for key {key}: {value}")


def get_record(record_id: str) -> dict[str, str] | None:
    url = EXTERNAL_BASE_URL + "/record/" + record_id
    resp = requests.get(url)
    record = resp.json()
    try:
        validate(record)
    except ValueError as e:
        print(f"Error: {e}")
        return None
    return record


def get_record_ids(campaign_id: str) -> list[dict[str, str]]:
    url = EXTERNAL_BASE_URL + "/records/" + campaign_id
    resp = requests.get(url)
    records = resp.json()
    return records


def put_record_in_database(record: dict[str, str]) -> None:
    sql.core.put_item_in_database(record)


def transfer_records(campaign_id: str) -> None:
    record_ids = get_record_ids(campaign_id)
    for record_id in record_ids:
        record = get_record(record_id)
        put_record_in_database(record)


def transfer_all_records(sql: MySQL):
    campaign_ids = sql.core.execute_raw_sql("select id from Campaign", fetchall=True)
    for campaign_id in campaign_ids:
        transfer_records(campaign_id)


if __name__ == "__main__":
    sql = MySQL() # treat sql as shared state that is passed into functions
                  # I chose to move to this pattern after using React Context
    transfer_all_records(sql)`}
</code>
</pre>

	<pre class="prosepre">
At this point the stack at work was becoming fairly stable and I was getting some time for recreational coding. I wanted to try a strongly typed language because it felt like I was always trying to make dyanamically typed languages have types - why not just use types? Since I had already tried Java in university and wanted something new, I chose Rust.

I made this choice assuming I'd learn about memory management - the language isn't garbage collected, after all. In hindsight something more traditional like C would have been a better choice for this. Rust got me thinking about copying references vs values which made me more conscious of memory in my programming overall, but utimately Rust's borrow checker and helpful compiler give you a new set of problems to consider that don't fully overlap with core memory management concepts. In fact, they are designed so you can avoid them.

The concepts I learned while using Rust have been valuable and have defied my initial expectations. It forces you to be more conscious of errors, which is an awareness that translated to less strict languages. This also helped me develop an attitude of keeping error-prone code like I/O operations and data parsing in their own areas, so that the core functionality can be more stable by using optimal data types at all times.

The practicality of Rust's enums also unlocked some new approaches for me in other languages. Using enums to describe distinctly separate stages of a problem or variants of a type opened a new genre of control flow for my solutions, which I now use in languages that support it well enough (namely Go and Python). A simple example of this could be a Log struct with a Level enum.
</pre>
	<pre class="prosepre">
<code class="language-rust">
{`enum Level {
    Info,
    Warn,
    Error,
}

struct Log {
    level: Level,
    message: String,
}

/// Methods for Log
impl Log {
    fn print(&self) {
        match self.level {
            // Could handle anything here rather than printing directly.
            // For example, applying different colours per log level.
            Level::Info => println!("[INFO] {}", self.message),
            Level::Warn => println!("[WARN] {}", self.message),
            Level::Error => println!("[ERROR] {}", self.message),
        }
    }
}`}
</code>
</pre>
	<pre class="prosepre">
This was a central concept in Rust, but it was more obscured in languages I was used to (especially before Python introduced match statements in 3.10). However, it's an invaluable pattern for solving many programming problems and using Rust gave me a new appreciation for languages with good enum support.

To go back to our example of transferring records in Python, I'll be upfront - there's a bit more code (perhaps a byproduct of using Rust at all). It's worth it though. Rust's powerful iterators gave me the desire to make better use of my Python iterations, so I googled my way to generators. We weren't able to use multithreaded requests without hitting rate limits, but creating a generator of parsed Record responses allowed data to flow much more effectively than when we were waiting for the records, then putting them all in the database. It also naturally handled large batches of records better, only dealing with one record at a time regardless of the size of the job.
</pre>

	<pre class="prosepre">
<code class="language-python">
{`
from typing import Generator
import requests
import EXTERNAL_BASE_URL
import MySQL
from urllib.parse import urljoin


class Record:
    """
    Note that parsing the record into a class instance also includes validation.
    Here I have chosen to return None if the record is invalid, but would handle it differently depending on the situation.
    Optional vs non-optional values are now more specific.
    """

    def __init__(self, id: str, agent_id: int, outcome: str | None, customer_id: str):
        self.id = id
        self.agent_id = agent_id
        self.outcome = outcome
        self.customer_id = customer_id

    @classmethod
    def validate(cls, record: dict[str, str]) -> bool:
        """Validation logic"""
        return all(
            [
                isinstance(record.get("id"), str),
                isinstance(record.get("agent_id"), int),
                isinstance(record.get("outcome"), (str, None)),  # allow optional value
                isinstance(record.get("customer_id"), str),
            ]
        )

    @classmethod
    def from_dict(cls, record: dict[str, str]) -> "Record" | None:
        """Idea of using the from method similar to Rust's From trait"""
        if not cls.validate(record):
            return None
        return cls(
            id=record["id"],
            agent_id=int(record["agent_id"]),
            outcome=record["outcome"],
            customer_id=record["customer_id"],
        )


def get_record(record_id: str) -> Record | None:
    url = urljoin(EXTERNAL_BASE_URL, f"record/{record_id}")  # improved url construction
    resp = requests.get(url)
    try:  # added error handling to json parsing
        record = resp.json()
    except ValueError as e:
        print(f"Error: {e}")
        return None
    # Validaton now moved to Record.from_dict()
    parsed = Record.from_dict(record)
    if parsed is None:
        print("Error: Invalid record")
    return parsed


def get_records(campaign_id: str) -> Generator[Record, None, None]:
    """
    Note that using a generator allows us to pass out each record as it's pulled from the API.
    We can now validate, parse and push each record in one iteration.
    """
    url = urljoin(EXTERNAL_BASE_URL, f"records/{campaign_id}")
    resp = requests.get(url)
    try:
        record_ids = resp.json()
    except ValueError as e:
        print(f"Error: {e}")
        return
    for record_id in record_ids:
        record = get_record(record_id)
        if record is not None:
            # function progressively yields Record instances
            yield record


def transfer_records(campaign_id: str) -> None:
    for record in get_records(campaign_id): # function now returns an iterator
        ## Add a native function to put a Record into the database
        ## No validation required because we know it is a validated Record
        sql.put_record_in_database(record)


def transfer_all_records(sql: MySQL):
    campaign_ids = sql.core.execute_raw_sql("select id from Campaign", fetchall=True)
    for campaign_id in campaign_ids:
        transfer_records(campaign_id)


if __name__ == "__main__":
    sql = MySQL()
    transfer_all_records(sql)

`}
</code>
</pre>
	<pre class="prosepre">
Although this is a bit of a contrived example, the reality of this exploration is that it had influence on many more parts of my practice. I see there being a point of diminishing returns to constantly exploring new languages, but having an expanded toolkit doesn't hurt. I plan to explore some embedded development using Rust or C in the future, but what I've learned from these explorations has made me confident in my ability to apply these concepts to the web-oriented languages I'm familiar with.
</pre>
</div>

<svelte:head>
	<title>Language Exploration - Jesse Williams</title>
	<meta name="description" content="exploring a variety of programming languages is good" />
	<link href="/prism.css" rel="stylesheet" />
	<script src="/prism.js" defer></script>
</svelte:head>
