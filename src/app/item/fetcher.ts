"use client";
import React from "react";

export type Story = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string;
  url: string;
  text: string | null;
  points: number | null;
  parent_id: number | null;
  story_id: number | null;
  children: StoryComment[];
};

export type StoryComment = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string | null;
  url: string | null;
  text: string | undefined;
  points: number | null;
  parent_id: number;
  story_id: number;
  children: StoryComment[];
};

export const fetchHackerNewsPost = async (itemId: string) => {
  const url = `https://hn.algolia.com/api/v1/items/${itemId}`;
  return fetch(url).then((response) => response.json() as unknown as Story);
};

export const useUrlParams = () => {
  const [id, setId] = React.useState<URLSearchParams>();
  React.useEffect(() => {
    // Get the query string from the URL
    const queryString = window.location.search;
    // Create a new URLSearchParams object from the query string
    const searchParams = new URLSearchParams(queryString);
    setId(searchParams);
  }, []);
  return id;
};
