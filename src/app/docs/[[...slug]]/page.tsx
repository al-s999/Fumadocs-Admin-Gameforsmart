import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  LocalizedDocsPage,
  LocalizedDocTitle,
  LocalizedDocDescription,
  LocalizedDocActions,
  LocalizedDocBody,
} from '@/components/doc-content';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/getting-started');
  }

  const pageId = source.getPage(params.slug, 'id');
  if (!pageId) notFound();

  const pageEn = source.getPage(params.slug, 'en');

  const MDXId = pageId.data.body;
  const MDXEn = pageEn?.data.body;

  const markdownUrlId = getPageMarkdownUrl(pageId).url;
  const markdownUrlEn = pageEn ? getPageMarkdownUrl(pageEn).url : markdownUrlId;

  return (
    <LocalizedDocsPage
      idToc={pageId.data.toc}
      enToc={pageEn?.data.toc}
      full={pageId.data.full}
    >
      <DocsTitle>
        <LocalizedDocTitle idTitle={pageId.data.title} enTitle={pageEn?.data.title} />
      </DocsTitle>
      <DocsDescription className="mb-0">
        <LocalizedDocDescription
          idDescription={pageId.data.description}
          enDescription={pageEn?.data.description}
        />
      </DocsDescription>
      <LocalizedDocActions
        markdownUrlId={markdownUrlId}
        markdownUrlEn={markdownUrlEn}
        githubPathId={pageId.path}
        githubPathEn={pageEn?.path}
      />
      <DocsBody>
        <LocalizedDocBody
          idBody={
            <MDXId
              components={getMDXComponents({
                a: createRelativeLink(source, pageId),
              })}
            />
          }
          enBody={
            MDXEn ? (
              <MDXEn
                components={getMDXComponents({
                  a: createRelativeLink(source, pageEn ?? pageId),
                })}
              />
            ) : undefined
          }
        />
      </DocsBody>
    </LocalizedDocsPage>
  );
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  const params: { slug: string[] }[] = [];
  for (const page of source.getPages()) {
    const key = page.slugs.join('/');
    if (!slugs.has(key)) {
      slugs.add(key);
      params.push({ slug: page.slugs });
    }
  }
  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  if (!params.slug || params.slug.length === 0) {
    return {
      title: 'Mulai dari Sini',
      description: 'Panduan orientasi operasional bagi staf administrator baru GameForSmart.',
    };
  }

  const page = source.getPage(params.slug, 'id');
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
