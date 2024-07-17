import React from 'react';
import Link from 'next/link';

import BaseLayout from '@/containers/BaseLayout';
import { ROUTES } from '@/utils/constants';

import { ALL_BOOKS_MAP, IBook } from './data';

const BookReview: React.FC<any> = ({ slug }) => {
  const book: IBook | undefined = ALL_BOOKS_MAP.get(slug);

  if (!book) {
    return null;
  }

  return (
    <BaseLayout title={book.title} description={book.title}>
      <article className="flex flex-col max-w-3xl px-4 py-6 md:px-6 bg-white text-zinc-700 rounded-md shadow-xl">
        <h1 className="text-4xl font-semibold">{book.title}</h1>
        <p className="text-lg font-semibold text-gray-500 mt-2">
          By {book.author}
        </p>
        <hr className="mt-4 border-px border-orange" />

        <h2 className="mt-4 text-gray-500 font-semibold">Overview</h2>
        <p className="mt-2">{book.quickDescription}</p>
        {/* <h2 className="mt-4 text-gray-500 font-semibold">Review</h2>
        <p className="mt-2">
          {book.review || "I haven't written a review yet!"}
        </p> */}

        <hr className="mt-4 border-px border-orange" />
        {book.links?.book && (
          <a
            href={book.links.book}
            className="underline mt-4"
            target="_blank"
            rel="noreferrer"
          >
            See this book on Amazon
          </a>
        )}

        <div className="flex mt-4">
          <Link href={ROUTES.BOOKS}>
            <span className="underline">Back to all books</span>
          </Link>
        </div>
      </article>
    </BaseLayout>
  );
};

export default BookReview;
