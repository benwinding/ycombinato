import { InternalLink } from "./InternalLink";

const links = [
  ["/front", "front"],
  ["/ask", "ask"],
  ["/show", "show"],
  ["/about", "about"],
];

export function Footer() {
  return (
    <div className="text-gray-600 flex flex-col items-center py-8">
      <div className="flex justify-center pb-5">
        {links.map(([path, title], index) => (
          <span key={path}>
            {index !== 0 && <span className="px-3"> | </span>}
            <InternalLink href={path}>{title}</InternalLink>
          </span>
        ))}
      </div>
      <InternalLink href="/">YCombinato</InternalLink>
    </div>
  );
}
