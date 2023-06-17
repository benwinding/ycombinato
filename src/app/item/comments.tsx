import { useState } from "react";
import { StoryComment } from "./fetcher";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ExternalLink } from "./ExternalLink";
dayjs.extend(relativeTime);

export const CommentResults = (props: {
  submissionLink: string;
  discussionId: number;
  title: string | null;
  comments: StoryComment[];
  filterText: string;
}) => {
  const linkToDiscussion = `https://news.ycombinator.com/item?id=${props.discussionId}`;
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-between">
          <ExternalLink href={props.submissionLink}>
            <h1 className="text-xl flex items-center gap-2">
              <ArrowTopRightOnSquareIcon width={20} /> {props.title}
            </h1>
          </ExternalLink>
          <ExternalLink href={linkToDiscussion}>(back to hn)</ExternalLink>
        </div>
        {props.comments.map((child) => (
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

const CommentCard = (props: { comment: StoryComment; filterText: string }) => {
  const { comment, filterText } = props;
  const html = comment._textMarked || comment.text || "<i>[deleted]<i/>";

  const expanderText = useTextCollapse(comment._textMarked, filterText);
  const expanderThread = useThreadCollapse();

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

function useThreadCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div id={id + ""}>
        {header}
        {!shouldCollapseText && (
          <div
            className="text-xs pb-1 pr-2"
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
      <ExternalLink href={linkToUser}>{comment.author}</ExternalLink>
      <ExternalLink href={linkToComment}>
        {getFromNowStr(comment.created_at)}
      </ExternalLink>
      <div className="pr-2">{expanderThread}</div>
      <div className="flex-grow"></div>
      <div className="pr-2">{expanderText}</div>
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
