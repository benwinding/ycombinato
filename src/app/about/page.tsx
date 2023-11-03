import { PropsWithChildren } from "react";
import { ExternalLink } from "@/components/ExternalLink";

const sourceLink = "https://github.com/benwinding/ycombinato";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h1 className="text-2xl">About YCombinato</h1>
        <p>
          This is a tiny webapp that uses the{" "}
          <ExternalLink href="https://hn.algolia.com/api">
            Hacker News Algolia Api
          </ExternalLink>
          .
        </p>
      </div>

      <div className="text-gray-600">
        <h2 className="text-xl">FAQ</h2>
        <i className="text-xs text-gray-500">
          {
            '(Well these aren\'t really "frequently asked" more pre-emptive questions I suppose...)'
          }
        </i>
        <FAQHeading>What is this?</FAQHeading>
        <p>
          {
            "It's just a little webapp to browse Hacker News and order/filter comments. More of a meme than a project really..."
          }
        </p>

        <FAQHeading>How do I use this?</FAQHeading>
        <p>
          {
            'Simply go to a Hacker News discussion, and delete the "r" in the URL then press "enter"'
          }
        </p>

        <FAQHeading>Why build it?</FAQHeading>
        <p>Short Answer: Because building things is fun! :)</p>
        <p>
          Long Answer: I found myself wanting to sort/find comments in
          discussions on my phone, this will just make it a bit easier
        </p>

        <FAQHeading>{"What's this phishing warning I see?"}</FAQHeading>
        <p className="">
          Well Chrome is a bit smarter now, this little domain name hack will
          probably flag a lot of things... but dont worry about it,{" "}
          <span>
            <ExternalLink href={sourceLink}>
              you can view the source code if you want.{" "}
              <GithubIcon width={20} />
            </ExternalLink>
          </span>
        </p>

        <FAQHeading>Is this related to YCombinator?</FAQHeading>
        <p>
          No, only in: name, content, style & UX. They are unaffiliated with
          this site
        </p>

        <FAQHeading>Are you scared of YCombinator suing?</FAQHeading>
        <p>A little</p>

        <FAQHeading>Who built this?</FAQHeading>
        <p>
          <ExternalLink href="https://benwinding.com">Me</ExternalLink>
        </p>
        <FAQHeading>Source Code?</FAQHeading>
        <p>
          <ExternalLink href={sourceLink}>
            {"Here's the source code"} <GithubIcon width={20} />
          </ExternalLink>
        </p>
        <FAQHeading>Tech Stack?</FAQHeading>
        <TechList
          defs={{
            NextJS: "JS Framework",
            "React Query": "Data querying library",
            "Tailwind.css": "CSS Library",
            "Day.js": "Time manipulation, formatting etc...",
            "Github Pages": "Static hosting",
            "Hacker News Algolia Api": "All of the content...",
          }}
        />
      </div>
    </div>
  );
}

function TechList(props: { defs: { [key: string]: string } }) {
  return (
    <ul className="list-disc list-inside">
      {Object.entries(props.defs).map(([key, value]) => (
        <li key={key} className="pl-3">
          <b>{key}</b>: <i>{value}</i>
        </li>
      ))}
    </ul>
  );
}

function FAQHeading(props: PropsWithChildren) {
  return (
    <h2 style={{ fontSize: 17 }} className="italic pt-2 text-black">
      {props.children}
    </h2>
  );
}

function GithubIcon(props: { width: number }) {
  return (
    <svg
      className="inline-block"
      role="img"
      width={props.width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
