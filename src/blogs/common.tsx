import React from 'react';

export const P: React.FC<any> = ({ children }) => {
  return <p className="mt-6">{children}</p>;
};

export const Quote: React.FC<any> = ({ children }) => {
  return (
    <p className="mt-6 pl-3 italic border-l-2 border-gray-300">{children}</p>
  );
};

export const A: React.FC<any> = ({ children, href }) => {
  return (
    <a className="underline" href={href}>
      {children}
    </a>
  );
};

export const Heading2: React.FC<any> = ({ children }) => {
  return <h2 className="mt-8 text-3xl font-bold">{children}</h2>;
};

export const Heading3: React.FC<any> = ({ children }) => {
  return <h3 className="mt-6 text-2xl font-semibold">{children}</h3>;
};

export const SubTitle: React.FC<any> = ({ children }) => {
  return <p className="mt-2 text-slate-700 font-semibold">{children}</p>;
};

export const Heading4: React.FC<any> = ({ children }) => {
  return <h4 className="mt-6 text-xl font-semibold">{children}</h4>;
};

export const Divider: React.FC = () => {
  return <hr className="my-8 border-px border-gray-300" />;
};
