"use client";
import { useQuery } from "react-query";

export type FrontPageQuery = {
  tag: ApiTag;
  createdAfterI: number;
  createdBeforeI: number;
  hitsPerPage?: number;
};

export function useHnPage(query: FrontPageQuery) {
  const queryKey = `${query.tag}_${query.createdAfterI}_${query.createdBeforeI}`;
  const queryRes = useQuery(queryKey, () => fetchHackerNewsFrontPage(query));
  return queryRes;
}

export type StoryItem = {
  author: string;
  created_at_i: number;
  created_at: string;
  num_comments: number;
  objectID: string;
  points: number;
  title: string;
  url: string;
};

type StoryFrontPageJson = {
  hits: StoryItem[];
};

type ApiTag = "front_page" | "show_hn" | "ask_hn";

async function fetchHackerNewsFrontPage(args: FrontPageQuery) {
  const url = `https://hn.algolia.com/api/v1/search?tags=${args.tag}&numericFilters=created_at_i>${args.createdAfterI}`; //,created_at_i<${args.createdBeforeI}`;
  return fetch(url).then(
    (response) => response.json() as unknown as StoryFrontPageJson
  );
}
