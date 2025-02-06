import React from 'react';
import Link from 'next/link';

import { ROUTES, TWITTER_LINK } from '@/utils/constants';
import { IBlogPost, LANDING_BLOG_POSTS } from '@/blogs/all';
import BaseLayout from '@/containers/BaseLayout';

export const HighlighedBlogPost: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <div>
      <div
        className="mt-6 flex flex-col md:flex-row md:gap-2 items-baseline"
        key={post.slug}
      >
        <h3 className="text-lg underline">
          {post.isExternal ? (
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          )}
        </h3>
        <p className="text-sm italic">{post.date}</p>
      </div>
      <p className="mt-1 elipsis-2-lines-text text-sm">{post.excerpt}</p>
    </div>
  );
};

const Landing: React.FC<any> = () => (
  <BaseLayout
    title="Jack O'Brien"
    description="Proven builder with several successful technical projects and acquired companies. Interested in software, startups, AI, and climate
    change solutions. At my core, I like to build things."
  >
    <div className="flex flex-col w-full align-center">
      <div className="flex flex-col justify-center max-w-3xl h-screen px-4 negative-landing-margin mx-auto">
        <h1 className=" text-3xl px-8 md:px-0 md:text-4xl font-semibold mx-[-10px] space-y-8 md:space-y-4">
          <span className="block">Proven engineer, CTO, and founder.</span>
          <span className="block">At MIT focused on AI & energy.</span>
          <span className="block">A builder to my core!</span>
        </h1>
      </div>

      <div className="px-4 max-w-2xl mx-auto ">
        <div className="w-full h-px bg-orange mx-auto" />

        <h2 className="mt-8 text-lg">
          For my latest,{' '}
          <a className="underline" href={TWITTER_LINK}>
            follow me on X/Twitter
          </a>
        </h2>

        <h2 className="mt-8 italic text-lg">Highlighted blog posts</h2>

        {LANDING_BLOG_POSTS.map((post: IBlogPost) => {
          return (
            <HighlighedBlogPost
              post={post}
              key={`${post.date}-${post.title}`}
            />
          );
        })}

        <h2 className="mt-8 text-lg">
          <Link href={ROUTES.BLOG} passHref>
            <span className="underline">Check out all posts.</span>
          </Link>
        </h2>

        {/* <h2 className="mt-8 text-lg">
          Looking for a good book?{' '}
          <Link href={ROUTES.BOOKS} passHref>
            <span className="underline">Check out my top recommendations.</span>
          </Link>
        </h2> */}
      </div>
    </div>
  </BaseLayout>
);

export default Landing;
