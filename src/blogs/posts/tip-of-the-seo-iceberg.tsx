import React from 'react';
import { IBlogPost } from '../all';
import { P } from '../common';

export const SLUG = 'tip-of-the-seo-iceberg';
export const TITLE = 'Tip of the SEO Iceberg';
export const DATE = 'Coming soon...';
export const EXCERPT =
  'Search engine optimization is a daunting topic. Get started here.';

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        Coming soon! Coming soon! Coming soon! Coming soon! Coming soon! Coming
        soon!
      </P>
      <P> - Jack</P>
    </>
  );
};

export const TipOfTheSEOIceberg: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};
