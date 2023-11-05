"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function HighlightedLink(
  props: React.PropsWithChildren<{ href: string }>
) {
  const pathname = usePathname();
  const isActiveRoute = pathname === props.href;
  return (
    <Link
      href={props.href}
      className={classNames("hover:underline", isActiveRoute && "underline")}
    >
      {props.children}
    </Link>
  );
}
