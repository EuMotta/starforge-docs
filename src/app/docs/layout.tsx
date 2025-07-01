import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import Background from "@/components/common/background";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Background />
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </div>
  );
}
