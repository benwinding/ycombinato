"use client";
import React, { useMemo } from "react";
import { useUrlParams, fetchHackerNewsPost, StoryComment } from "./fetcher";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "./query_client";
import { sortChildren } from "./sorter";
import useDebounce from "./useDebounce";

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
  const data = query.data;
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
  const textFilterDebounced = useDebounce(textFilter, 1000);
  const results = useMemo(
    () =>
      dataSorted && (
        <CommentResults
          title={dataSorted.title}
          comments={dataSorted.children}
          filterBy={textFilterDebounced}
        />
      ),
    [dataSorted, textFilterDebounced]
  );
  return (
    <div className="flex flex-col py-1 px-2">
      <div className="flex gap-2">
        <SortOptions onChange={setSortOoption} value={sortOption} />
        <FilterText onChange={setTextFilter} value={textFilter} />
      </div>
      {/* <SearchField value={searchText} onChange={setSearchText} /> */}
      {query.isLoading && query.isFetching && <div>Loading...</div>}
      {results}
    </div>
  );
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

const CommentResults = (props: {
  title: string;
  comments: StoryComment[];
  filterBy: string;
}) => {
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        {props.comments.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            filterBy={props.filterBy}
          />
        ))}
      </div>
    </div>
  );
};

const CommentCard = (props: { comment: StoryComment; filterBy: string }) => {
  const highlightedHtml = useMemo(
    () =>
      props.filterBy
        ? markTheHtml(props.comment.text || "", props.filterBy)
        : props.comment.text,
    [props.comment, props.filterBy]
  );
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div className="">
        <div
          className="text-xs py-1 pr-2"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {props.comment.children.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            filterBy={props.filterBy}
          />
        ))}
      </div>
    </ul>
  );
};

function markTheHtml(html: string, filterBy: string) {
  return html.replaceAll(filterBy, "<mark>$&</mark>");
}
