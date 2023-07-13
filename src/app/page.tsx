"use client";
import { HnPageFooter } from "@/components/HnPageFooter";
import { FrontPageViewerWrapper } from "@/components/front-page-viewer";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const params = useSearchParams();
  const viewer = React.useMemo(
    () =>
      mounted ? (
        <FrontPageViewerWrapper
          tag="front_page"
          page={Number(params?.get("page") || 0)}
          pageSize={10}
          footer={<HnPageFooter pageCount={10} />}
        />
      ) : null,
    [mounted, params]
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
