"use client";
import { ChangelogTable } from "./changelog";

export default function Page() {
  const githubUrl = "https://github.com/benwinding/ycombinato/commits/main";

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl">Change Log</h1>
      <p>
        The latest changes to the app, with corresponding github commit links:
      </p>
      <ChangelogTable />
      <p>
        <a href={githubUrl} className="underline">
          View entire history here
        </a>
      </p>
    </div>
  );
}
