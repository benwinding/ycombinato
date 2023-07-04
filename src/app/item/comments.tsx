import { useState } from "react";
import { Story, StoryComment } from "./fetcher";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ExternalLink } from "./ExternalLink";
dayjs.extend(relativeTime);

export const CommentResults = (props: {
  story: Story;
  filterText: string;
  commentCount: number;
  idTotalMap: Map<number, number>;
  filterOptions: React.ReactNode;
}) => {
  const comments = props.story.children;
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <DiscussionHeader
          story={props.story}
          commentCount={props.commentCount}
          filterOptions={props.filterOptions}
        />
        {comments.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            idTotalMap={props.idTotalMap}
            filterText={props.filterText}
          />
        ))}
      </div>
    </div>
  );
};

function DiscussionHeader({
  story,
  commentCount,
  filterOptions,
}: {
  story: Story;
  commentCount: number;
  filterOptions: React.ReactNode;
}) {
  const discussionId = story.id;
  const submissionLink = story.url;
  const title = story.title;
  const linkToDiscussion = `https://news.ycombinator.com/item?id=${discussionId}`;
  return (
    <div className="flex flex-col text-gray-700">
      <div className="flex gap-2 items-center justify-between">
        <ExternalLink href={submissionLink}>
          <h1 className="text flex items-center gap-2">{title}</h1>
        </ExternalLink>
        <ExternalLink href={linkToDiscussion} className="text-xs flex-shrink-0">
          (read on hn)
        </ExternalLink>
      </div>
      <div className="text-xs">
        {story.points} points by {story.author}{" "}
        {getFromNowStr(story.created_at)} | {commentCount} comments
      </div>
      <div className="border border-gray-300 p-2 rounded mt-2">
        {filterOptions}
      </div>
    </div>
  );
}

const CommentCard = (props: {
  comment: StoryComment;
  idTotalMap: Map<number, number>;
  filterText: string;
}) => {
  const { comment, filterText, idTotalMap } = props;
  const html = comment._textMarked || comment.text || "<i>[deleted]<i/>";
  const commentChildrenCount = idTotalMap.get(comment.id) || 0;

  const expanderText = useTextCollapse(comment._textMarked, filterText);
  const expanderThread = useThreadCollapse(filterText, commentChildrenCount);

  return (
    <CommentCardContent
      id={comment.id}
      html={html}
      comments={comment.children}
      idTotalMap={idTotalMap}
      isTextCollapsed={expanderText.isCollapsed}
      isThreadCollapsed={expanderThread.isCollapsed}
      header={
        <CommentHeader
          comment={comment}
          expanderThread={<Expander {...expanderThread} />}
          expanderText={<Expander {...expanderText} />}
        />
      }
      filterText={filterText}
    />
  );
};

function CommentCardContent(props: {
  id: number;
  comments: StoryComment[];
  idTotalMap: Map<number, number>;
  header: React.ReactElement;
  isTextCollapsed: boolean;
  isThreadCollapsed: boolean;
  filterText: string;
  html: string;
}) {
  const {
    id,
    comments,
    header,
    isTextCollapsed,
    isThreadCollapsed,
    filterText,
    html,
  } = props;
  const shouldCollapseText = isThreadCollapsed || isTextCollapsed;
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-1 sm:pl-2">
      <div id={id + ""}>
        {header}
        {!shouldCollapseText && (
          <div
            className="text-xs pb-1 pr-2 break-words"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
      {!isThreadCollapsed && (
        <div className="flex flex-col gap-2">
          {comments.map((child) => (
            <CommentCard
              key={child.id}
              comment={child}
              idTotalMap={props.idTotalMap}
              filterText={filterText}
            />
          ))}
        </div>
      )}
    </ul>
  );
}

function CommentHeader({
  comment,
  expanderThread,
  expanderText,
}: {
  comment: StoryComment;
  expanderThread: React.ReactNode;
  expanderText: React.ReactNode;
}) {
  const linkToComment = `https://news.ycombinator.com/item?id=${comment.id}`;
  const linkToUser = `https://news.ycombinator.com/user?id=${comment.author}`;
  return (
    <div className="flex items-center gap-2 text-gray-500 text-xs py-1">
      <ExternalLink href={linkToUser} className="flex-shrink-0">
        {comment.author}
      </ExternalLink>
      <ExternalLink href={linkToComment} className="flex-shrink-0 line-clamp-1">
        {getFromNowStr(comment.created_at)}
      </ExternalLink>
      <div className="flex-shrink-0">{expanderThread}</div>
      <div className="w-full"></div>
      <div className="flex-shrink-0 pr-2">{expanderText}</div>
    </div>
  );
}

function useThreadCollapse(
  filterText: string,
  commentCount: number | undefined
): ExpanderProps {
  const [isCollapsed, setIsCollapsed] = useState(false);

  React.useEffect(() => {
    if (filterText) {
      setIsCollapsed(false);
    }
  }, [filterText]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);

  const labelIsCollapsed =
    !!commentCount && commentCount > 1 ? `${commentCount} more` : "+";

  return {
    expanderText: isCollapsed ? labelIsCollapsed : "-",
    isCollapsed,
    onCollapse,
    onExpand,
  };
}

function useTextCollapse(
  textMarked: string | undefined,
  filterText: string
): ExpanderProps {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const shouldCollapse = !textMarked;

  React.useEffect(() => {
    const isFiltering = !!filterText;
    setIsCollapsed(isFiltering && shouldCollapse);
  }, [filterText, shouldCollapse]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);

  return {
    expanderText: isCollapsed ? "+" : "-",
    isCollapsed,
    onCollapse,
    onExpand,
  };
}

type ExpanderProps = {
  isCollapsed: boolean;
  expanderText: string;
  onExpand: () => void;
  onCollapse: () => void;
};

function Expander({
  isCollapsed,
  expanderText,
  onExpand,
  onCollapse,
}: ExpanderProps) {
  const onClickExpander = React.useCallback(() => {
    isCollapsed ? onExpand() : onCollapse();
  }, [isCollapsed, onCollapse, onExpand]);
  return <button onClick={onClickExpander}>[{expanderText}]</button>;
}

function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}
