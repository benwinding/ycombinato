"use client";
import { Time } from "@/components/time";
import gitLogString from "./git-log.txt";

export function ChangelogTable() {
  const logs = gitLogString.split("\n");
  const logRows = logs
    .map((log) => log.split("\t"))
    .map(([commitHash, author, dateIso, message]) => ({
      commitHash,
      author,
      dateIso,
      message,
    }));

  return (
    <table className="table-auto border">
      <thead>
        <Headers />
      </thead>
      <tbody>
        {logRows.map((logRow) => (
          <LogRow key={logRow.commitHash} {...logRow} />
        ))}
      </tbody>
    </table>
  );
}

function Headers() {
  return (
    <tr className="text-gray-400">
      <td className="border px-2">Commit</td>
      <td className="border px-2">Message</td>
      <td className="border px-2">Date</td>
    </tr>
  );
}
function LogRow(props: {
  commitHash: string;
  author: string;
  dateIso: string;
  message: string;
}) {
  const githubUrl = `https://github.com/benwinding/ycombinato/commit/${props.commitHash}`;
  const dateFromNow = `${Time.fromIso({
    dateIso: props.dateIso,
  }).formatFromNow()}`;
  const dateString = `${Time.fromIso({
    dateIso: props.dateIso,
  }).formatAsDateString()}`;
  return (
    <tr className="text-gray-400">
      <td className="border px-2">
        <a href={githubUrl} className="underline">
          {props.commitHash}
        </a>
      </td>
      <td className="border px-2 text-gray-900">{props.message}</td>
      <td className="border px-2">
        <div className="flex flex-col">
          <span>{dateFromNow}</span>
          <span className="text-xs text-gray-300">{dateString}</span>
        </div>
      </td>
    </tr>
  );
}
