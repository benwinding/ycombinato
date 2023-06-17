"use client";
import React from "react";
import { PostViewerWrapper } from "./post_viewer";

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const viewer = React.useMemo(
    () => (mounted ? <PostViewerWrapper /> : null),
    [mounted]
  );
  return viewer;
};

export default Page;
