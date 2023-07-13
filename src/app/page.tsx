"use client";
import { FrontPageViewerWrapper } from "@/components/front-page-viewer";
import { usePageFromParams } from "@/components/usePageFromParams";
import React from "react";

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const page = usePageFromParams();
  const viewer = React.useMemo(
    () =>
      mounted ? (
        <FrontPageViewerWrapper tag="front_page" page={page} pageSize={30} />
      ) : null,
    [mounted, page]
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
