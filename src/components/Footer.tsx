import { HighlightedLink } from "./HighlightedLink";

const links = [
  ["/", "front"],
  ["/ask", "ask"],
  ["/show", "show"],
  ["/about", "about"],
  ["/about/changelog", "changelog"],
];

export function Footer() {
  return (
    <div className="text-gray-600 flex flex-col items-center py-8">
      <div className="flex flex-wrap justify-center pb-5">
        {links.map(([path, title], index) => (
          <span key={path}>
            {index !== 0 && <span className="px-3"> | </span>}
            <HighlightedLink href={path}>{title}</HighlightedLink>
          </span>
        ))}
      </div>
      <HighlightedLink href="/">YCombinato</HighlightedLink>
    </div>
  );
}
