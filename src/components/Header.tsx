import { TWITTER_LINK } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const HeaderLink: React.FC<any> = ({ href, text, isExternal }) => {
  if (isExternal) {
    return (
      <a
        href={href}
        className="font-semibold text-sm md:text-md"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a className="font-semibold text-sm md:text-md">{text}</a>
    </Link>
  );
};

const Header: React.FC = () => (
  <header className="w-full mb-6 md:mb-16 text-white z-50">
    <nav className="max-w-1030 flex justify-between mx-auto py-4 px-2 items-center">
      <h2 className="text-2xl font-bold leading-tight px-4 border-x border-orange">
        <Link href="/">Jack O'Brien</Link>
      </h2>
      <div className="flex gap-2 md:gap-4 items-center">
        <HeaderLink href="/blog" text="Blog" />
        <div className="border-r h-4 border-orange" />
        <HeaderLink href="/about" text="About" />
        <div className="border-r h-4 border-orange" />
        <HeaderLink href={TWITTER_LINK} text="Twitter" isExternal />
      </div>
    </nav>
  </header>
);

export default Header;
