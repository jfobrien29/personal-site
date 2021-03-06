import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { ALL_BLOGS_MAP, IBlogPost } from '@/blogs/all';

const BlogPost: React.FC<any> = ({ slug }) => {
  const blog: IBlogPost | undefined = ALL_BLOGS_MAP.get(slug);

  if (!blog) {
    return null;
  }

  return (
    <BaseLayout title={blog.title} description={blog.excerpt}>
      <article className="flex flex-col max-w-3xl px-4 py-6 md:px-6 bg-white text-zinc-700 rounded-md shadow-xl">
        <h1 className="text-4xl font-semibold">{blog.title}</h1>
        <p className="text-lg font-semibold text-gray-500">{blog.date}</p>
        <hr className="my-4 border-px border-orange" />

        {blog.post}
      </article>
    </BaseLayout>
  );
};

export default BlogPost;
