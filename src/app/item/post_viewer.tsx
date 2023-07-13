"use client";
import React, { useMemo } from "react";
import { QueryClientProvider } from "react-query";
import { sortChildren } from "./sorter";
import { useDebounce } from "./useDebounce";
import { useDataFiltered } from "./useDataFiltered";
import { CommentResults } from "./comments";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { LoadingScreen } from "@/components/loading_screen";
import { queryClient } from "@/api/query_client";
import { Story, useHnPost } from "@/api/use-hn-post";
import { useSearchParams } from "next/navigation";
import { RadioButton } from "@/components/RadioButton";

export const PostViewerWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostViewer />
    </QueryClientProvider>
  );
};

const PostViewer = () => {
  const [sortOption, setSortOoption] = React.useState<Option>(
    Option.byResponseCount
  );
  const [textFilter, setTextFilter] = React.useState<string>("");
  const params = useSearchParams();
  const postId = params.get("id");
  const query = useHnPost(postId + "");

  const [textFilterDebounced, debounceLoading] = useDebounce(textFilter, 400);
  const data = query.data;
  const dataSorted = useDataSort(data, sortOption);
  const commentCountResult = React.useMemo(() => getCommentCount(data), [data]);
  const dataFiltered = useDataFiltered(dataSorted, textFilterDebounced);
  const markCount = dataFiltered?.markCount;
  const filterOptions = (
    <div className="flex flex-col sm:flex-row gap-2">
      <SortOptions onChange={setSortOoption} value={sortOption} />
      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <FilterText onChange={setTextFilter} value={textFilter} />
        </div>
        <div className="flex-shrink-0">
          {markCount != null && (
            <FilterResultsCount
              count={markCount}
              loading={debounceLoading}
              filterText={textFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
  const results = useResults(
    dataFiltered?.data,
    textFilterDebounced,
    commentCountResult,
    filterOptions
  );
  return (
    <div className="flex flex-col py-1 px-2">
      {query.isLoading && query.isFetching && <LoadingScreen />}
      {results}
    </div>
  );
};

function FilterResultsCount(props: {
  count: number;
  loading: boolean;
  filterText: string;
}) {
  if (!props.filterText) {
    return <div className="w-20"></div>;
  }
  if (props.loading) {
    return <div>Searching...</div>;
  }
  return <div>Found {props.count} results</div>;
}

type CommentCountResults = {
  totalComments: number;
  idTotalMap: Map<number, number>;
};

type HasChildren = {
  id: number;
  children: HasChildren[];
};

function getCommentCount<T extends HasChildren>(
  data: T | undefined
): CommentCountResults {
  let totalComments = 0;
  const idTotalMap = new Map<number, number>();
  if (!data) {
    return {
      totalComments,
      idTotalMap,
    };
  }
  const getChildrenCountRecursively = (parent: HasChildren): number => {
    let childrenCount = 0;
    parent.children.forEach((child) => {
      totalComments++;
      const childCount = 1 + getChildrenCountRecursively(child);
      childrenCount += childCount;
      idTotalMap.set(child.id, childCount);
    });
    return childrenCount;
  };
  getChildrenCountRecursively(data);
  return {
    totalComments,
    idTotalMap,
  };
}

const useResults = (
  data: Story | undefined,
  filterText: string,
  commentCount: CommentCountResults,
  filterOptions: React.ReactNode
) => {
  const results = useMemo(
    () =>
      data && (
        <CommentResults
          story={data}
          filterText={filterText}
          commentCount={commentCount.totalComments}
          idTotalMap={commentCount.idTotalMap}
          filterOptions={filterOptions}
        />
      ),
    [data, filterText, commentCount, filterOptions]
  );
  return results;
};

const useDataSort = (data: Story | undefined, sortOption: Option) => {
  const dataSorted = useMemo(
    () =>
      data
        ? sortChildren(data, {
            byResponseCount: sortOption === Option.byResponseCount,
            byThreadDepth: sortOption === Option.byThreadDepth,
          })
        : undefined,
    [data, sortOption]
  );
  return dataSorted;
};

const enum Option {
  byResponseCount = "Sort by response count",
  byThreadDepth = "Sort by thread length",
}

function FilterText(props: {
  onChange: (newText: string) => void;
  value: string;
}) {
  return (
    <div className="flex">
      <input
        className="border rounded-md px-1 w-full"
        placeholder="Filter comments..."
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
      <button
        onClick={() => props.onChange("")}
        className="-ml-6 text-gray-400"
      >
        <XCircleIcon width={20} />
      </button>
    </div>
  );
}

function SortOptions(props: {
  value: Option | undefined;
  onChange: (value: Option) => void;
}) {
  const options: Option[] = [Option.byResponseCount, Option.byThreadDepth];

  return (
    <div className="flex items-center gap-2">
      {options.map((option) => (
        <RadioButton
          key={option}
          value={option}
          label={option}
          checked={option === props.value}
          onChange={(e) => props.onChange(option)}
        />
      ))}
    </div>
  );
}
