import { source } from '@/lib/source';
import { LocalizedDocsLayout } from '@/components/doc-content';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LocalizedDocsLayout
      treeId={source.getPageTree('id')}
      treeEn={source.getPageTree('en')}
      {...baseOptions()}
    >
      {children}
    </LocalizedDocsLayout>
  );
}
