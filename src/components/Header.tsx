"use client";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const links = [
  {label: "front", link: "/"}, 
  {label: "ask"}, 
  {label: "show"}
];

export function Header() {
  return (
    <div className="bg-orange-500 text-gray-900 flex flex-col px-2 py-1 w-full">
      <MenuItem href="/">
        <span className="flex items-end gap-2">
          YCombinato <Ricon /> <JustDropTheR />
        </span>
      </MenuItem>
      <div className="flex justify-between flex-wrap w-full">
        <div className="flex items-center text-xs gap-2">
          {links.map(({label, link}, index) => (
            <Fragment key={label}>
              {index !== 0 && "|"}
              <MenuItem href={link || label}>
                {label}
              </MenuItem>
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
    <Link className="flex flex-row gap-2 items-center" href={props.href}>
      {props.icon && <span>{props.icon}</span>}
      <span>{props.children}</span>
    </Link>
  );
}
