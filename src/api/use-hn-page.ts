"use client";
import { useQuery } from "react-query";

type ApiFrontTag = "front_page";
type ApiOtherTags = "show_hn" | "ask_hn";

export type FrontPageQuery =
  | {
      tag: ApiFrontTag;
      pageSize: number;
      page: number;
    }
  | {
      tag: ApiOtherTags;
      createdAfterI: number;
      createdBeforeI: number;
      pageSize: number;
      page: number;
    };

export function useHnPage(query: FrontPageQuery) {
  const queryKey = getQueryKey(query);
  console.log("queryKey", queryKey);
  const queryRes = useQuery(queryKey, () => fetchHackerNewsFrontPage(query));
  return queryRes;
}

function getQueryKey(query: FrontPageQuery): string {
  if (query.tag === "front_page") {
    return `front_page_${query.pageSize}_${query.page}`;
  }
  return `${query.tag}_${query.createdAfterI}_${query.createdBeforeI}_${query.pageSize}_${query.page}`;
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

export type StoryFrontPageJson = {
  hits: StoryItem[];
  nbPages: number;
  hitsPerPage: number;
  page: number;
};

async function fetchHackerNewsFrontPage(args: FrontPageQuery) {
  const url = getQueryUrl(args);
  return fetch(url).then(
    (response) => response.json() as unknown as StoryFrontPageJson
  );
}

function getQueryUrl(args: FrontPageQuery): string {
  const b = new QueryBuilder();
  b.addTag(args.tag);
  b.addPageSize(args.pageSize);
  b.addPage(args.page - 1);
  if (args.tag !== "front_page") {
    b.addCreatedBeforeAfter({
      before: args.createdBeforeI,
      after: args.createdAfterI,
    });
  }
  return b.build();
}

class QueryBuilder {
  private url = "https://hn.algolia.com/api/v1/search?";

  addTag(tag: ApiFrontTag | ApiOtherTags) {
    this.url += `tags=${tag}&`;
    return this;
  }

  addCreatedBeforeAfter(args: { after: number; before: number }) {
    this.url += `numericFilters=created_at_i>${args.after},created_at_i<${args.before}&`;
    return this;
  }

  addPage(page: number) {
    this.url += `page=${page}&`;
    return this;
  }

  addPageSize(pageSize: number) {
    this.url += `hitsPerPage=${pageSize}&`;
    return this;
  }

  build() {
    return this.url;
  }
}
