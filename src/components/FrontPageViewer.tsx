"use client";
import { StoryFrontPageJson } from "@/api/use-hn-page";
import { FrontPageItem } from "./FrontPageItem";

export function FrontPageViewer(props: { data: StoryFrontPageJson }) {
  const data = props.data;
  const page = props.data.page;
  const hitsPerPage = props.data.hitsPerPage;
  return (
    <div className="flex flex-col gap-1 font-sans">
      {data.hits.map((item, index) => (
        <FrontPageItem
          key={item.objectID}
          index={index + 1 + hitsPerPage * page}
          item={item}
        />
      ))}
    </div>
  );
}
