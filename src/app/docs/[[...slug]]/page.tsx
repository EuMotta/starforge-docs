import { notFound } from 'next/navigation';

import { createMetadata } from '@/lib/create-metadata';
import { source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle
} from 'fumadocs-ui/page';
import { AlertCircle, Lightbulb, Github } from 'lucide-react';

const FOOTER_CONTENTS = {
  title: 'Contribute to Star Forge',
  reportBug: {
    text: 'Report a bug',
    template: {
      title: (slug: string) => `[bug]: ${slug}`,
      body: (slug: string) => `**Bug Description**
Provide a clear and detailed explanation of the issue encountered.

**Steps to Reproduce**
Detailed steps to replicate the problem:
1. Navigate to 'https://starforge-docs.vercel.app/docs/${slug}'
2. Perform the following action: '....'
3. Continue with: '....'

**Expected Result**
Describe what should have happened under normal circumstances.

**Screenshots (if applicable)**
Include any visual aids that help illustrate the problem.`
    }
  },
  requestFeature: {
    text: 'Request a feature',
    template: {
      title: '[feat]: New feature request',
      body: `**Problem Context**
Explain the challenge or limitation you're facing. For instance: I frequently encounter difficulties when [...]

**Proposed Solution**
Outline your ideal approach or desired functionality in detail.

**Supporting Details**
Attach any relevant context, mockups, or additional information that helps clarify your request.`
    }
  },
  viewOnGithub: 'View on GitHub',
  builtWith: 'Built with ❤️ using React, Next.js, TypeScript, and Tailwind CSS',
  since: 'Online since 2025 • Built with web technologies'
} as const;

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const currentSlug = params.slug?.join('/') || '';

  const footer = (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-3">
        <h3 className="mb-1 font-medium">{FOOTER_CONTENTS.title}</h3>
        <div className="flex flex-col space-y-2">
          <a
            href={`https://github.com/eumotta/star-forge/issues/new?labels=bug&template=bug_report.md&title=${encodeURIComponent(FOOTER_CONTENTS.reportBug.template.title(currentSlug))}&body=${encodeURIComponent(FOOTER_CONTENTS.reportBug.template.body(currentSlug))}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
          >
            <AlertCircle className="size-4" />
            {FOOTER_CONTENTS.reportBug.text}
          </a>
          <a
            href={`https://github.com/eumotta/starforge-docs/issues/new?labels=enhancement&template=feature_request.md&title=${encodeURIComponent(FOOTER_CONTENTS.requestFeature.template.title)}&body=${encodeURIComponent(FOOTER_CONTENTS.requestFeature.template.body)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
          >
            <Lightbulb className="size-4" />
            {FOOTER_CONTENTS.requestFeature.text}
          </a>
          <a
            href="https://github.com/EuMotta/starforge-docs"
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
          >
            <Github className="size-4" />
            {FOOTER_CONTENTS.viewOnGithub}
          </a>
        </div>
      </div>

      <div className="flex flex-col space-y-2 border-t pt-4">
        <p className="text-muted-foreground text-xs">
          {FOOTER_CONTENTS.builtWith}
        </p>
        <p className="text-muted-foreground text-xs">{FOOTER_CONTENTS.since}</p>
      </div>
    </div>
  );
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={footer}
      tableOfContent={
        page.data.showToc
          ? { footer, single: false, style: 'clerk' }
          : undefined
      }
      article={{
        className: 'w-full max-w-screen-xl px-4 max-sm:pb-16'
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page)
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description
  });
}
