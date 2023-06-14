import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { ALL_BLOGS_MAP, BLOG_SLUGS, IBlogPost } from '@/blogs/all';
import Link from 'next/link';
import moment from 'moment';

const BlogListing: React.FC<any> = ({ slug }) => {
  const blog: IBlogPost | undefined = ALL_BLOGS_MAP.get(slug);

  if (!blog) {
    return null;
  }

  if (blog.isExternal) {
    return (
      <a href={blog.link} target="_blank" rel="noreferrer">
        <h2 className="mt-8 text-2xl font-semibold">{blog.title}</h2>
        <p className="mt-1 text-md italic">
          {moment(blog.date).format('MMM Do, YYYY')}
        </p>
        <p className="mt-2 text-md elipsis-2-lines-text">{blog.excerpt}</p>
      </a>
    );
  }

  return (
    <Link href={`/blog/${slug}`} passHref>
      <h2 className="mt-8 text-2xl font-semibold">{blog.title}</h2>
      <p className="mt-1 text-md italic">
        {' '}
        {moment(blog.date).format('MMM DD, YYYY')}
      </p>
      <p className="mt-2 text-md elipsis-2-lines-text">{blog.excerpt}</p>
    </Link>
  );
};

const Blog: React.FC = () => (
  <BaseLayout
    title="Jack O'Brien's Blog"
    description="Blog post from Jack O'Brien's work, life, and everything else. Includes posts from this site and links to external posts!"
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className=" text-white text-3xl font-semibold">Blog</h1>

      {BLOG_SLUGS.filter((slug: string) => ALL_BLOGS_MAP.has(slug)).map(
        (slug: string) => (
          <BlogListing key={slug} slug={slug} />
        ),
      )}
    </div>
  </BaseLayout>
);

export default Blog;
