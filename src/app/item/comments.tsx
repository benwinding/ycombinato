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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { comment, filterText } = props;
  const html = comment._textMarked || comment.text || "<i>[deleted]<i/>";
  const shouldCollapse = !comment._textMarked;

  React.useEffect(() => {
    const isFiltering = !!filterText;
    setIsCollapsed(isFiltering && shouldCollapse);
  }, [comment.id, filterText, shouldCollapse]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);

  return (
    <CommentCardContent
      id={comment.id}
      html={html}
      comments={comment.children}
      isCollapsed={isCollapsed}
      header={
        <CommentHeader
          comment={comment}
          isCollapsed={isCollapsed}
          onCollapse={onCollapse}
          onExpand={onExpand}
        />
      }
      filterText={filterText}
    />
  );
};

function CommentCardContent(props: {
  id: number;
  comments: StoryComment[];
  header: React.ReactElement;
  isCollapsed: boolean;
  filterText: string;
  html: string;
}) {
  const { comments, isCollapsed, filterText, html } = props;
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div id={props.id + ""}>
        {props.header}
        {!isCollapsed && (
          <div
            className="text-xs py-1 pr-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        {comments.map((child) => (
          <CommentCard key={child.id} comment={child} filterText={filterText} />
        ))}
      </div>
    </ul>
  );
}

function CommentHeader({
  comment,
  isCollapsed,
  onExpand,
  onCollapse,
}: {
  comment: StoryComment;
  isCollapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const expanderIcon = isCollapsed ? "+" : "-";
  const onClickExpander = React.useCallback(() => {
    isCollapsed ? onExpand() : onCollapse();
  }, [isCollapsed, onCollapse, onExpand]);
  const linkToComment = `https://news.ycombinator.com/item?id=${comment.id}`;
  const linkToUser = `https://news.ycombinator.com/user?id=${comment.author}`;
  return (
    <div className="flex items-center gap-2 text-gray-500 text-xs pt-1">
      <ExternalLink href={linkToUser}>{comment.author}</ExternalLink>
      <ExternalLink href={linkToComment}>
        {getFromNowStr(comment.created_at)}
      </ExternalLink>
      <button style={{ marginTop: -2 }} onClick={onClickExpander}>
        [{expanderIcon}]
      </button>
    </div>
  );
}

function getFromNowStr(input: string): string {
  return dayjs(input).fromNow();
}
