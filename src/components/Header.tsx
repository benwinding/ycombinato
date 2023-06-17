"use client";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function Header() {
  return (
    <div className="bg-orange-500 flex justify-between items-center px-2 py-1">
      <MenuItem href="/" icon={<HomeIcon width="15" />}>
        YCombinato
      </MenuItem>
      <div className="flex gap-2 text-black">
        <MenuItem href="/about">About</MenuItem>
      </div>
    </div>
  );
}

function MenuItem(
  props: React.PropsWithChildren<{ href: string; icon?: React.ReactNode }>
) {
  return (
    <Link className="flex flex-row gap-2 items-center" href={props.href}>
      <span>{props.icon}</span>
      <span>{props.children}</span>
    </Link>
  );
}
