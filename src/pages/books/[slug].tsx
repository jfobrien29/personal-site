import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ALL_BOOKS_MAP, BOOK_SLUGS } from '@/components/books/data';
import BookReview from '@/components/books/BookReview';

export default function BlogPage({ slug }: { slug: string }) {
  return <BookReview slug={slug} />;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  if (!ALL_BOOKS_MAP.has(params.slug)) {
    return {
      redirect: {
        destination: '/books',
        permanent: false,
      },
    };
  }

  return {
    props: { slug: params.slug || null },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BOOK_SLUGS.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};
