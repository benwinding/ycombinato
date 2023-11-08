"use client";
import { useQuery } from "react-query";

export type SearchPageQuery = {
  text: string;
  beforeISeconds: number;
  afterISeconds: number;
  pageSize: number;
  page: number;
};

export function useHnSearch(query: SearchPageQuery) {
  const queryKey = getQueryKey(query);
  const url = getQueryUrl(query);
  return useHnQuery(url, queryKey);
}

function useHnQuery(url: string, queryKey: string) {
  return useQuery(queryKey, () => fetchHackerNewsFrontPage(url));
}

function getQueryKey(query: SearchPageQuery): string {
  return `${query.text}_${query.afterISeconds}_${query.beforeISeconds}_${query.pageSize}_${query.page}`;
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

async function fetchHackerNewsFrontPage(url: string) {
  return fetch(url).then(
    (response) => response.json() as unknown as StoryFrontPageJson
  );
}

function getQueryUrl(args: SearchPageQuery): string {
  const b = new HnQueryBuilder();
  b.addTag("story");
  b.addPageSize(args.pageSize);
  b.addPage(Number(args.page) - 1);
  b.addText(args.text);
  b.addCreatedBeforeAfter({
    after: args.afterISeconds,
    before: args.beforeISeconds,
  });
  return b.build();
}

class HnQueryBuilder {
  private queryString: string = "";
  private baseUrl = "https://hn.algolia.com/api/v1/";
  private path = "search_by_date";

  addCreatedBeforeAfter(args: { after: number; before: number }) {
    this.queryString += `numericFilters=created_at_i>${args.after},created_at_i<${args.before}&`;
    return this;
  }

  addTag(tag: string) {
    this.queryString += `tags=${tag}&`;
    return this;
  }

  addPage(page: number) {
    this.queryString += `page=${page}&`;
    return this;
  }

  addText(text: string) {
    this.queryString += `query=${text}&`;
    return this;
  }

  addPageSize(pageSize: number) {
    this.queryString += `hitsPerPage=${pageSize}&`;
    return this;
  }

  build() {
    const url = `${this.baseUrl}${this.path}?${this.queryString}`;
    return url;
  }
}
