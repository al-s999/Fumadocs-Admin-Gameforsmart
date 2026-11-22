'use client';

import { useLanguage } from '@/components/provider';
import type { ReactNode } from 'react';
import { DocsPage, type DocsPageProps } from 'fumadocs-ui/layouts/docs/page';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { Root } from 'fumadocs-core/page-tree';
import { MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import { gitConfig } from '@/lib/shared';

export function LocalizedDocsLayout({
  treeId,
  treeEn,
  children,
  ...props
}: Omit<DocsLayoutProps, 'tree'> & {
  treeId: Root;
  treeEn: Root;
  children: ReactNode;
}) {
  const { locale } = useLanguage();
  const tree = locale === 'en' ? treeEn : treeId;

  return (
    <DocsLayout tree={tree} {...props}>
      {children}
    </DocsLayout>
  );
}

export function LocalizedDocsPage({
  idToc,
  enToc,
  children,
  ...props
}: Omit<DocsPageProps, 'toc'> & {
  idToc?: DocsPageProps['toc'];
  enToc?: DocsPageProps['toc'];
  children: ReactNode;
}) {
  const { locale } = useLanguage();
  const toc = locale === 'en' && enToc && enToc.length > 0 ? enToc : idToc;

  return (
    <DocsPage toc={toc} {...props}>
      {children}
    </DocsPage>
  );
}

export function LocalizedDocTitle({
  idTitle,
  enTitle,
}: {
  idTitle: string;
  enTitle?: string;
}) {
  const { locale } = useLanguage();
  return <>{locale === 'en' && enTitle ? enTitle : idTitle}</>;
}

export function LocalizedDocDescription({
  idDescription,
  enDescription,
}: {
  idDescription?: string;
  enDescription?: string;
}) {
  const { locale } = useLanguage();
  return <>{locale === 'en' && enDescription ? enDescription : idDescription}</>;
}

export function LocalizedDocActions({
  markdownUrlId,
  markdownUrlEn,
  githubPathId,
  githubPathEn,
}: {
  markdownUrlId: string;
  markdownUrlEn: string;
  githubPathId: string;
  githubPathEn?: string;
}) {
  const { locale } = useLanguage();
  const markdownUrl = locale === 'en' ? markdownUrlEn : markdownUrlId;
  const githubPath = locale === 'en' && githubPathEn ? githubPathEn : githubPathId;

  return (
    <div className="flex flex-row gap-2 items-center border-b pb-6">
      <MarkdownCopyButton markdownUrl={markdownUrl} />
      <ViewOptionsPopover
        markdownUrl={markdownUrl}
        githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${githubPath}`}
      />
    </div>
  );
}

export function LocalizedDocBody({
  idBody,
  enBody,
}: {
  idBody: ReactNode;
  enBody?: ReactNode;
}) {
  const { locale } = useLanguage();
  const isEn = locale === 'en' && Boolean(enBody);

  return (
    <>
      <div className={isEn ? 'block' : 'hidden'}>{enBody ?? idBody}</div>
      <div className={!isEn ? 'block' : 'hidden'}>{idBody}</div>
    </>
  );
}
