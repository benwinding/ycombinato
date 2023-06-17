"use client";
import { useMemo } from "react";
import { Story, StoryComment } from "./fetcher";

export function useDataFiltered(
  data: Story | undefined,
  filterText: string
): { data: Story; markCount: number } | undefined {
  const dataFiltered = useMemo(() => {
    if (!data) {
      return undefined;
    }
    return markAndCountChildren(data, filterText);
  }, [data, filterText]);
  return dataFiltered;
}

function markAndCountChildren(
  data: Story,
  filterText: string
): { data: Story; markCount: number } {
  const markedStory: Story = { ...data };
  const markCount = markedStory.children.reduce((a, comment) => {
    const markCountFromChildren = recursiveMarkAndCountChildren(
      comment,
      filterText
    );
    return a + markCountFromChildren;
  }, 0);
  return { data: markedStory, markCount };
}

function recursiveMarkAndCountChildren(
  comment: StoryComment,
  filterText: string
) {
  let totalMarkCount = 0;
  if (filterText) {
    const res = markTheHtml(comment.text || "", filterText);
    totalMarkCount += res.numReplacements;
    comment._textMarked = res.htmlNew;
  } else {
    comment._textMarked = undefined;
  }
  comment.children.forEach((comment) => {
    totalMarkCount += recursiveMarkAndCountChildren(comment, filterText);
  });
  return totalMarkCount;
}

function markTheHtml(html: string, filterBy: string) {
  const regex = new RegExp(escapeRegex(filterBy), "ig");
  const numReplacements = html.match(regex)?.length || 0;
  if (!numReplacements) {
    return { htmlNew: undefined, numReplacements };
  }
  const htmlNew = html.replaceAll(regex, "<mark>$&</mark>");
  return { htmlNew, numReplacements };
}

// https://stackoverflow.com/a/3561711/2419584
function escapeRegex(str: string) {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
