"use client";
import React, { useMemo } from "react";
import {
  useUrlParams,
  fetchHackerNewsPost,
  StoryComment,
  Story,
} from "./fetcher";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "./query_client";
import { sortChildren } from "./sorter";
import { useDebounce } from "./useDebounce";
import { useDataFiltered } from "./useDataFiltered";
import { CommentResults } from "./comments";

export const PostViewerWrapper = React.memo(function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostViewer />
    </QueryClientProvider>
  );
});

const PostViewer = () => {
  const [sortOption, setSortOoption] = React.useState<Option>(
    Option.byResponseCount
  );
  const [textFilter, setTextFilter] = React.useState<string>("");
  const params = useUrlParams();
  const postId = params?.get("id");
  const query = useQuery(
    "post" + postId,
    () => fetchHackerNewsPost(postId + ""),
    {
      enabled: postId != null,
    }
  );
  const [textFilterDebounced, debounceLoading] = useDebounce(textFilter, 400);
  const data = query.data;
  const dataSorted = useDataSort(data, sortOption);
  const dataFiltered = useDataFiltered(dataSorted, textFilterDebounced);
  const results = useResults(dataFiltered?.data, textFilterDebounced != null);
  const markCount = dataFiltered?.markCount;
  return (
    <div className="flex flex-col py-1 px-2">
      <div className="flex gap-2">
        <SortOptions onChange={setSortOoption} value={sortOption} />
        <FilterText onChange={setTextFilter} value={textFilter} />
        {markCount != null && (
          <FilterResultsCount count={markCount} loading={debounceLoading} />
        )}
      </div>
      {/* <SearchField value={searchText} onChange={setSearchText} /> */}
      {query.isLoading && query.isFetching && <div>Loading...</div>}
      {results}
    </div>
  );
};

function FilterResultsCount(props: { count: number; loading: boolean }) {
  if (props.loading) {
    return <div>Searching...</div>;
  }
  return <div>Found {props.count} results</div>;
}

const useResults = (data: Story | undefined, isFiltering: boolean) => {
  const results = useMemo(
    () =>
      data && (
        <CommentResults
          title={data.title}
          comments={data.children}
          isFiltering={isFiltering}
        />
      ),
    [data]
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
    <input
      className="border rounded-md"
      placeholder="Filter comments..."
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
    />
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

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioButton({ label, value, checked, onChange }: RadioButtonProps) {
  return (
    <label className="text-xs flex items-center gap-1">
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
