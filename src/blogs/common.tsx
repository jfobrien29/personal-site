import React from 'react';
import Image from 'next/image';
import { blurDataUrlShimmer } from '@/utils/shimmer';

import { Source_Serif_Pro } from 'next/font/google';
import clsx from 'clsx';

const font = Source_Serif_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
});

export const P: React.FC<any> = ({ children, className }) => {
  return (
    <div className={clsx('mt-4', className || '')}>
      <p className={font.className}>{children}</p>
    </div>
  );
};

export const Ul: React.FC<any> = ({ children }) => {
  return (
    <p>
      <ul className="mt-4 ml-4">{children}</ul>
    </p>
  );
};

export const Ol: React.FC<any> = ({ children }) => {
  return (
    <p className={font.className}>
      <ol className="mt-4 ml-4">{children}</ol>
    </p>
  );
};

export const Li: React.FC<any> = ({ children }) => {
  return (
    <li className="list-disc">
      <span className={font.className}>{children}</span>
    </li>
  );
};
export const OLi: React.FC<any> = ({ children }) => {
  return (
    <li className="list-decimal">
      <span className={font.className}>{children}</span>
    </li>
  );
};

export const Quote: React.FC<any> = ({ children }) => {
  return (
    <div className="mt-6 pl-3 italic border-l-2 border-orange">
      <p className={font.className}>{children}</p>
    </div>
  );
};

export const A: React.FC<any> = ({ children, href, noBlank }) => {
  return (
    <a
      className="underline decoration-orange"
      href={href}
      target={noBlank ? '' : '_blank'}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export const Heading2: React.FC<any> = ({ id, children }) => {
  return (
    <h2 id={id} className="mt-8 text-2xl font-bold">
      {children}
    </h2>
  );
};

export const Heading3: React.FC<any> = ({ id, children }) => {
  return (
    <h3 id={id} className="mt-10 text-xl font-semibold">
      {children}
    </h3>
  );
};

export const SubTitle: React.FC<any> = ({ children }) => {
  return <p className="mt-1 text-zinc-500 font-semibold">{children}</p>;
};

export const Heading4: React.FC<any> = ({ children }) => {
  return <h4 className="mt-6 text-lg font-semibold">{children}</h4>;
};

export const Divider: React.FC = () => {
  return <hr className="my-8 border-px border-orange" />;
};

export const MAX_HEIGHT = 400;

export const PostImage: React.FC<any> = ({
  src,
  alt,
  h = 300,
  w = 300,
  subtitle,
}) => {
  let width = w;
  let height = h;
  if (w > MAX_HEIGHT) {
    width = (w * MAX_HEIGHT) / h;
    height = MAX_HEIGHT;
  }

  return (
    <div className="mt-6 flex flex-col items-center mb-2">
      <div>
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          blurDataURL={blurDataUrlShimmer(h, w)}
          placeholder="blur"
          className="rounded-sm"
        />
      </div>
      <p className="text-xs text-gray-500 mt-1 w-2/3 text-center italic">
        {subtitle}
      </p>
    </div>
  );
};
