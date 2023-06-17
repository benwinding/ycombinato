"use client";
import React from "react";
import { FrontPageViewerWrapper } from "./front-page-viewer";

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const viewer = React.useMemo(
    () => (mounted ? <FrontPageViewerWrapper /> : null),
    [mounted]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {viewer}
      </div>
    </main>
  );
};

export default Page;
