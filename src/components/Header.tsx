"use client";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { HighlightedLink } from "./HighlightedLink";
import { InternalLink } from "./InternalLink";

const links = [
  ["/", "front"],
  ["/ask", "ask"],
  ["/show", "show"],
];

export function Header() {
  return (
    <div className="bg-orange-500 text-gray-900 flex flex-col px-2 py-1 w-full">
      <InternalLink href="/">
        <span className="flex items-end gap-2">
          YCombinato <Ricon /> <JustDropTheR />
        </span>
      </InternalLink>
      <div className="flex justify-between flex-wrap w-full">
        <div className="flex items-center text-xs gap-2">
          {links.map(([link, label], index) => (
            <Fragment key={label}>
              {index !== 0 && "|"}
              <MenuItem href={link}>{label}</MenuItem>
            </Fragment>
          ))}
        </div>
        <div className="text-xs text-black">
          <MenuItem href="/about">About</MenuItem>
        </div>
      </div>
    </div>
  );
}

function JustDropTheR() {
  return (
    <span className="text-xxs flex text-gray-100 italic">
      <ArrowLongLeftIcon width={13} />
      {"Just drop the 'r'"}
    </span>
  );
}

function Ricon() {
  return (
    <div className="-ml-1 inline-block" style={{ marginBottom: -4 }}>
      <span
        style={{ transform: "rotate(70deg)" }}
        className="text-gray-500 inline-block"
      >
        r
      </span>
    </div>
  );
}

function MenuItem(
  props: React.PropsWithChildren<{ href: string; icon?: React.ReactNode }>
) {
  return (
    <HighlightedLink href={props.href}>
      <div className="flex flex-row gap-2 items-center">
        {props.icon && <span>{props.icon}</span>}
        <span>{props.children}</span>
      </div>
    </HighlightedLink>
  );
}
