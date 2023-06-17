import React from "react";

export function ExternalLink(
  props: React.PropsWithChildren<{ href: string; className?: string }>
) {
  return (
    <a
      href={props.href}
      target="_blank"
      referrerPolicy="no-referrer"
      className={"hover:underline " + props.className}
    >
      {props.children}
    </a>
  );
}
