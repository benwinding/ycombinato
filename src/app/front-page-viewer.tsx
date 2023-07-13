"use client";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "./item/query_client";
import { LinkToAuthor } from "./item/ExternalLink";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading_screen";

type StoryFrontPage = {
  author: "kevincox";
  created_at_i: 1686924783;
  created_at: "2023-06-16T14:13:03.000Z";
  num_comments: 135;
  objectID: "36356876";
  points: 850;
  title: "Full Time";
  url: "https://www.marginalia.nu/log/83_full_time/";
};

type StoryFrontPageJson = {
  hits: StoryFrontPage[];
};

const fetchHackerNewsFrontPage = async () => {
  const url = "https://hn.algolia.com/api/v1/search?tags=front_page";
  return fetch(url).then(
    (response) => response.json() as unknown as StoryFrontPageJson
  );
};

export function FrontPageViewerWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <FrontPageViewer />
    </QueryClientProvider>
  );
}

function FrontPageViewer() {
  const query = useQuery("front-page", () => fetchHackerNewsFrontPage());

  if (query.isLoading) {
    return <LoadingScreen />;
  }
  if (query.status === "error") {
    return <div>Problem loading data, err: {query.error + ""}</div>;
  }
  if (!query.data) {
    return <div>No data?...</div>;
  }

  return (
    <div className="flex flex-col gap-1 font-sans">
      {query.data.hits.map((item, index) => (
        <FrontPageItem key={item.objectID} index={index + 1} item={item} />
      ))}
    </div>
  );
}

function FrontPageItem({
  item,
  index,
}: {
  item: StoryFrontPage;
  index: number;
}) {
  const linkToDiscussion = `/item?id=${item.objectID}`;
  return (
    <div className="flex flex-row items-start gap-1">
      <span>{index}.</span>
      <div className="flex flex-col">
        <h2>{item.title}</h2>
        <div className="flex items-center text-gray-500 text-xs">
          <p>
            {item.points} points by <LinkToAuthor author={item.author} />
          </p>
          <Link className="pl-1" href={linkToDiscussion}>
            ({item.num_comments} comments)
          </Link>
        </div>
      </div>
    </div>
  );
}
