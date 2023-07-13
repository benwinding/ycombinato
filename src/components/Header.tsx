"use client";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const links = ["best", "top", "ask", "show"];

export function Header() {
  return (
    <div className="bg-orange-500 text-gray-900 flex flex-col tiny:flex-row justify-between items-start shrink:items-center px-2 py-1">
      <div className="flex flex-col">
        <MenuItem href="/">
          <span className="flex items-end gap-2">
            YCombinato <Ricon /> <JustDropTheR />
          </span>
        </MenuItem>
        <div className="flex text-xs gap-2">
          {links.map((link, index) => (
            <Fragment key={link}>
              {index !== 0 && "|"}
              <MenuItem key={link} href={link}>
                {link}
              </MenuItem>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex text-black">
        <MenuItem href="/about">About</MenuItem>
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
