import { TWITTER_LINK } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const HeaderLink: React.FC<any> = ({ href, text, newTab }) => (
  <Link href={href} passHref>
    <a
      className="text-white font-semibold text-md"
      target={newTab ? '_blank' : ''}
      rel="noreferrer"
    >
      {text}
    </a>
  </Link>
);

const Header: React.FC = () => (
  <header className="w-full mb-6 md:mb-16">
    <nav className="max-w-1030 flex justify-between mx-auto py-4 px-2 items-center">
      <h2 className="text-white text-2xl font-bold leading-tight">
        <Link href="/">Jack O&apos;Brien</Link>
      </h2>
      <div className="flex gap-2 md:gap-8 items-center">
        <HeaderLink href="/blog" text="Blog" />
        <HeaderLink href="/about" text="About" />
        <HeaderLink href={TWITTER_LINK} text="Twitter" newTab />
      </div>
    </nav>
  </header>
);

export default Header;
