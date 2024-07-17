import React from 'react';
import LogoLinks from './LogoLinks';

const Footer: React.FC = () => (
  <footer className="w-full flex flex-col justify-center items-center gap-3 mt-16 mb-4 text-zinc-700 text-xs">
    <LogoLinks />
    <p>
      <a
        href="https://www.groovingagainstleukemia.com/"
        target="_blank"
        rel="noreferrer"
      >
        Grooving Against Leukemia
      </a>
    </p>
    <h2>Jack O'Brien 2024</h2>
  </footer>
);

export default Footer;
