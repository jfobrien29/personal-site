import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { ALL_BOOKS_MAP, IBook } from './data';

const BookReview: React.FC<any> = ({ slug }) => {
  const book: IBook | undefined = ALL_BOOKS_MAP.get(slug);

  if (!book) {
    return null;
  }

  return (
    <BaseLayout title={book.title} description={book.title}>
      <div className="flex flex-col max-w-3xl px-4 py-6 md:px-6 bg-white text-gray-700 rounded-md shadow-xl">
        <h1 className="text-4xl font-semibold">{book.title}</h1>
        <p className="text-lg font-semibold text-gray-500 mt-2">
          By {book.author}
        </p>
        <hr className="my-4 border-px border-orange" />
      </div>
    </BaseLayout>
  );
};

export default BookReview;
