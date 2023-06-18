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
          (back to hn)
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

const CommentCard = (props: { comment: StoryComment; filterText: string }) => {
  const { comment, filterText } = props;
  const html = comment._textMarked || comment.text || "<i>[deleted]<i/>";

  const expanderText = useTextCollapse(comment._textMarked, filterText);
  const expanderThread = useThreadCollapse(filterText);

  return (
    <CommentCardContent
      id={comment.id}
      html={html}
      comments={comment.children}
      isTextCollapsed={expanderText.isCollapsed}
      isThreadCollapsed={expanderThread.isCollapsed}
      header={
        <CommentHeader
          comment={comment}
          expanderThread={
            <Expander
              isCollapsed={expanderThread.isCollapsed}
              onCollapse={expanderThread.onCollapse}
              onExpand={expanderThread.onExpand}
            />
          }
          expanderText={
            <Expander
              isCollapsed={expanderText.isCollapsed}
              onCollapse={expanderText.onCollapse}
              onExpand={expanderText.onExpand}
            />
          }
        />
      }
      filterText={filterText}
    />
  );
};

function useThreadCollapse(filterText: string) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  React.useEffect(() => {
    if (filterText) {
      setIsCollapsed(false);
    }
  }, [filterText]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);
  return { isCollapsed, onCollapse, onExpand };
}

function useTextCollapse(textMarked: string | undefined, filterText: string) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const shouldCollapse = !textMarked;

  React.useEffect(() => {
    const isFiltering = !!filterText;
    setIsCollapsed(isFiltering && shouldCollapse);
  }, [filterText, shouldCollapse]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);
  return { isCollapsed, onCollapse, onExpand };
}

function CommentCardContent(props: {
  id: number;
  comments: StoryComment[];
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

function Expander({
  isCollapsed,
  onExpand,
  onCollapse,
}: {
  isCollapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const expanderIcon = isCollapsed ? "+" : "-";
  const onClickExpander = React.useCallback(() => {
    isCollapsed ? onExpand() : onCollapse();
  }, [isCollapsed, onCollapse, onExpand]);
  return <button onClick={onClickExpander}>[{expanderIcon}]</button>;
}

function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}
