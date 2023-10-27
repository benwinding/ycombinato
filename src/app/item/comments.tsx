import { useState } from "react";
import React from "react";
import {
  ExternalLink,
  LinkToAuthor,
  LinkToDiscussion,
  LinkToDiscussionWrapper,
} from "@/components/ExternalLink";
import { Story, StoryComment } from "@/api/use-hn-post";

export type CommentIdMaps = {
  idTotalMap: Map<number, number>;
};

export const CommentResults = (props: {
  story: Story;
  filterText: string;
  commentCount: number;
  maps: CommentIdMaps;
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
            maps={props.maps}
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
  const submissionLink = story.url;
  const title = story.title;
  return (
    <div className="flex flex-col text-gray-700">
      <div className="flex flex-col tiny:flex-row gap-2 items-center justify-between">
        <ExternalLink href={submissionLink}>
          <h1 className="text flex items-center gap-2">{title}</h1>
        </ExternalLink>
        <LinkToDiscussionWrapper
          discussionId={story.id}
          className="text-xs flex-shrink-0"
        >
          (read on hn)
        </LinkToDiscussionWrapper>
      </div>
      <div className="text-xs">
        {story.points} points by <LinkToAuthor author={story.author} />{" "}
        <LinkToDiscussion
          discussionId={story.id}
          createdAt={story.created_at}
        />{" "}
        | {commentCount} comments
      </div>
      {story.text && <HTMLOutput className="text-xs pt-2" html={story.text} />}
      <div className="border border-gray-300 p-2 rounded mt-2">
        {filterOptions}
      </div>
    </div>
  );
}

const CommentCard = (props: {
  comment: StoryComment;
  maps: CommentIdMaps;
  filterText: string;
}) => {
  const { comment, filterText, maps } = props;
  const html = comment._textMarked || comment.text || "<i>[deleted]<i/>";
  const commentChildrenCount = maps.idTotalMap.get(comment.id) || 0;

  const expanderText = useTextCollapse(comment._textMarked, filterText);
  const expanderThread = useThreadCollapse(filterText, commentChildrenCount);

  return (
    <CommentCardContent
      id={comment.id}
      html={html}
      comments={comment.children}
      maps={maps}
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
  maps: CommentIdMaps;
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
          <HTMLOutput className="text-xs pr-2" html={html} />
        )}
      </div>
      {!isThreadCollapsed && (
        <div className="flex flex-col gap-2">
          {comments.map((child) => (
            <CommentCard
              key={child.id}
              comment={child}
              maps={props.maps}
              filterText={filterText}
            />
          ))}
        </div>
      )}
    </ul>
  );
}

function HTMLOutput(props: { html: string; className?: string }) {
  return (
    <div
      className={props.className + " comment-text"}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
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
  return (
    <div className="flex items-center gap-2 text-gray-500 text-xs py-1">
      <LinkToAuthor className="flex-shrink-0" author={comment.author} />
      <LinkToDiscussion
        className="line-clamp-1"
        discussionId={comment.id}
        createdAt={comment.created_at}
      />
      <div className="flex-shrink-0">{expanderThread}</div>
      <div className="flex-grow"></div>
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
