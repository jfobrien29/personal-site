import Link from 'next/link';
import React from 'react';
import BaseLayout from '../../containers/BaseLayout';
import { ALL_BOOKS, Category, IBook } from './data';

const BookListing: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <Link href={`/books/${book.slug}`} passHref>
      <a>
        <h2 className="mt-8 text-xl font-semibold">{book.title}</h2>
        <p className="mt-1 text-md italic">by {book.author}</p>
        {/* <p className="mt-2 text-md elipsis-2-lines-text">{blog.excerpt}</p> */}
      </a>
    </Link>
  );
};

const BookSection: React.FC<{ category: Category; header: string }> = ({
  header,
  category,
}) => {
  return (
    <div>
      <h2 className="mt-8 text-2xl font-semibold underline">{header}</h2>

      <div className="ml-4">
        {ALL_BOOKS.filter((book: IBook) => book.category === category).map(
          (book: IBook) => (
            <BookListing key={book.slug} book={book} />
          ),
        )}
      </div>
    </div>
  );
};

const Books: React.FC = () => (
  <BaseLayout
    title="Jack O'Brien's Recommended Books"
    description="Books I've read and recommend! Includes my must reads, entreupreneur stories, tech books, and other categories."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className=" text-white text-3xl font-semibold">Recommended Books</h1>
      <div>Books I've read and recommend!</div>

      <BookSection
        category={Category.MUST_READ}
        header="Top 5 Must Read Books"
      />
    </div>
  </BaseLayout>
);

export default Books;
