import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BaseHeader from './BaseHeaders';

const BaseLayout: React.FC<any> = ({ title, description, children }) => {
  return (
    <>
      <BaseHeader title={title} description={description} />
      <div className="w-full min-h-screen flex flex-col">
        <Header />

        <main className="w-full flex justify-center align-middle text-zinc-700">
          {children}
        </main>

        {/* Spacer to ensure footer at bottom of the page */}
        <div className="flex-grow" />

        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
