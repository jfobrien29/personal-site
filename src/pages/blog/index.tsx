import React from 'react';
import { GetStaticProps } from 'next';
import Blog from '@/components/Blog';
import { BLOG_SLUGS } from '@/blogs/all';

export default function BlogPage({ slugs }: any) {
  return <Blog slugs={slugs} />;
}

export const getStaticProps: GetStaticProps = async () => {
  console.log(BLOG_SLUGS);
  return {
    props: { slugs: BLOG_SLUGS ?? null },
  };
};
