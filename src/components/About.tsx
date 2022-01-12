import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout
    title="About Jack O'Brien"
    description="Co-Founder and CTO of OnePager, interested in software, startups, education, biotech, and climate
change solutions. At my core, I like to build things. Previously Google, IBM, and Princeton University."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Co-Founder and CTO of{' '}
        <a className="underline" href="https://onepager.vc">
          OnePager
        </a>{' '}
        and{' '}
        <a className="underline" href="https://openscout.vc">
          Open Scout
        </a>
        . More people should be able to start companies. If more founders can
        access early stage venture funding, more great ideas will become real
        businesses.
      </p>

      <p className="mt-8 text-lg">
        Founding Fellow of{' '}
        <a
          className="underline"
          href="https://twitter.com/KERNEL0x/status/1466643159576842244?s=20"
        >
          Kernel's 5th cohort
        </a>
        , a community of 250 individuals learning web3. Proud to say I owned
        jackob.eth long before the ENS airdrop.
      </p>

      <h2 className="mt-8 italic text-lg">Previously</h2>

      <p className="mt-8 text-lg">
        Software Engineer at{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
        >
          Google
        </a>{' '}
        leading teams in finance and education projects. While working with the
        education team, designed and implemented features on Search and YouTube
        impacting millions of students around the world.
      </p>

      <p className="mt-8 text-lg">
        Software Engineer and Consultant at{' '}
        <a className="underline" href="https://www.ibm.com/blockchain">
          IBM Blockchain
        </a>
        . Led remote developement teams to build enterprise blockchain
        applications. (This was 2017, and I'm now more skeptical about the
        future of{' '}
        <a className="underline" href="https://www.hyperledger.org/">
          Hyperledger
        </a>{' '}
        and enterprise blockchain).
      </p>

      <p className="mt-8 text-lg">
        Co-Founder of Tiger Bed Rentals, a bed rental company I started with a
        friend in college. Grew to $130k+ in revenue year one, profitable by
        year two. Evenutally sold to{' '}
        <a className="underline" href="https://roomie.co/">
          Roomie
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Undergraduate engineering degree in Computer Science from Princeton,
        where I was recruited for the men's lacrosse team. I clearly like orange
        to a fault, let's go Tigers!
      </p>

      <h2 className="mt-8 italic text-lg">Misc Side Projects</h2>

      <div className="mt-8 text-lg">
        <span>Usually</span> I get in all the coding I need from my main job,
        but I do work on a few side projects occationally. A few fun ones both
        technical and non-technical:
        <ul className="list-disc ml-6 mt-4 gap-4">
          <li className="mt-4">
            <span className="font-semibold">Text Reflect</span>, daily self
            reflection via text (2022, in progress...,)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://groovingagainstleukemia.com/"
                target="_blank"
                rel="noreferrer"
              >
                Grooving Against Leukemia
              </a>
            </span>
            , NYC marathon fundraising team for the Leukemia & Lymphoma Society
            (2018-2021)
          </li>
          <li className="mt-4">
            <a
              className="underline font-semibold"
              href="https://build-space-nft-web-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Marathon NFT Minter
            </a>
            , mint simple randomized NFTs for the 2021 NYC marathon. Built
            thanks to a{' '}
            <a
              className="underline font-semibold"
              href="https://buildspace.so/"
              target="_blank"
              rel="noreferrer"
            >
              buildspace course
            </a>{' '}
            (2021)
          </li>
          <li className="mt-4">
            <a
              className="underline font-semibold"
              href="https://calendarchallenger.com/"
              target="_blank"
              rel="noreferrer"
            >
              Calendar Challenger
            </a>
            , complete a single challenge every day to build consistency, submit
            via text, show results in public (2021){' '}
          </li>
          <li className="mt-4">
            <span className="font-semibold">Fun Zoom Link</span>, dress up zoom
            links and add context to meetings. Great pandemic project, shut down
            for using the word "Zoom" (2020){' '}
          </li>
          <li className="mt-4">
            <a
              className="underline font-semibold"
              href="https://skystheminute.com/"
              target="_blank"
              rel="noreferrer"
            >
              Skys the Minute
            </a>
            , use your free minutes to learn something (2018)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://www.instagram.com/oldrelly"
                target="_blank"
                rel="noreferrer"
              >
                Old Relly
              </a>
            </span>
            , renovated a school bus and drove it to 37 states (2017)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              Impact Environmental Calculator
            </span>
            , calculate and improve your true impact on the environment (2016)
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
);

export default About;
