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
  const textFilterDebounced = useDebounce(textFilter, 1000);
  const data = query.data;
  const dataSorted = useDataSort(data, sortOption);
  const dataFiltered = useDataFiltered(dataSorted, textFilterDebounced);
  const results = useResults(dataFiltered?.data);
  return (
    <div className="flex flex-col py-1 px-2">
      <div className="flex gap-2">
        <SortOptions onChange={setSortOoption} value={sortOption} />
        <FilterText onChange={setTextFilter} value={textFilter} />
        Found {dataFiltered?.markCount} results
      </div>
      {/* <SearchField value={searchText} onChange={setSearchText} /> */}
      {query.isLoading && query.isFetching && <div>Loading...</div>}
      {results}
    </div>
  );
};

const useResults = (data: Story | undefined) => {
  const results = useMemo(
    () =>
      data && <CommentResults title={data.title} comments={data.children} />,
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

const useDataFiltered = (
  data: Story | undefined,
  filterText: string
): { data: Story; markCount: number } | undefined => {
  const dataFiltered = useMemo(() => {
    if (!data) {
      return undefined;
    }
    if (!filterText.trim()) {
      return { data, markCount: 0 };
    }
    return markAndCountChildren(data, filterText);
  }, [data, filterText]);
  return dataFiltered;
};

function markAndCountChildren(
  data: Story,
  filterText: string
): { data: Story; markCount: number } {
  const markedStory: Story = {...data};
  const markCount = markedStory.children.reduce((a, comment) => {
    const markCountFromChildren = recursiveMarkAndCountChildren(
      comment,
      filterText
    );
    return a + markCountFromChildren;
  }, 0);
  return { data, markCount };
}

function recursiveMarkAndCountChildren(data: StoryComment, filterText: string) {
  let totalMarkCount = 0;
  data.children.forEach((comment) => {
    const res = markTheHtml(comment.text || "", filterText);
    totalMarkCount += res.numReplacements;
    comment.text = res.htmlNew;
    totalMarkCount += recursiveMarkAndCountChildren(comment, filterText);
  });
  return totalMarkCount;
}

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
  title: string | null;
  comments: StoryComment[];
}) => {
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        {props.comments.map((child) => (
          <CommentCard key={child.id} comment={child} />
        ))}
      </div>
    </div>
  );
};

const CommentCard = ({ comment }: { comment: StoryComment }) => {
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div className="">
        <div
          className="text-xs py-1 pr-2"
          dangerouslySetInnerHTML={{ __html: comment.text || "" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {comment.children.map((child) => (
          <CommentCard key={child.id} comment={child} />
        ))}
      </div>
    </ul>
  );
};

function markTheHtml(html: string, filterBy: string) {
  const regex = new RegExp(filterBy, "gi");
  const htmlNew = html.replaceAll(filterBy, "<mark>$&</mark>");
  const numReplacements = html.match(regex)?.length || 0;
  return { htmlNew, numReplacements };
}
