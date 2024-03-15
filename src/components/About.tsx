import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout
    title="About Jack O'Brien"
    description="Proven engineer, CTO, and founder at MIT. At my core, I like to build things. Prev. Sandhill Markets, Google, IBM, and Princeton University."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Currently a grad student at MIT getting my MBA and building at the
        intersection of AI and sustainability. I'm extremely optimistic about
        recent AI advancements. There's massive potential everywhere.
      </p>
      <p className="mt-8">
        <a
          className="underline"
          href="https://twitter.com/thejackobrien/status/1678882968348024832"
          target="_blank"
          rel="noreferrer"
        >
          Semi-recent thoughts on fighting climate change with AI.
        </a>
      </p>

      <h2 className="mt-8 italic text-lg">Previously</h2>

      <p className="mt-8 text-lg">
        CTO at{' '}
        <a
          className="underline"
          href="https://stonks.com"
          target="_blank"
          rel="noreferrer"
        >
          Stonks
        </a>{' '}
        (now known as SandHill Markets). We raised $19M from a16z and top VCs
        (Matrix, Floodgate, Pioneer), top syndicates (including Ex-Google
        syndicate, Ex-Uber syndicate, Ex-Palantir syndicate), and top angels
        (including Naval Ravikant, Sam Parr, Tim Draper) to build "shark tank
        for the internet". I led our engineering team, built our core product,
        and facilitated $120M+ into hundreds of early stage companies through
        our platform.
      </p>

      <p className="mt-8 text-lg">
        Co-Founder and CTO of{' '}
        <a
          className="underline"
          href="https://onepager.vc"
          target="_blank"
          rel="noreferrer"
        >
          OnePager
        </a>{' '}
        and{' '}
        <a
          className="underline"
          href="https://os.onepager.vc"
          target="_blank"
          rel="noreferrer"
        >
          Open Scout
        </a>
        . Over 5,000 companies trusted us with their fundraising process. We
        were aquired by Stonks in January 2022.
      </p>

      <p className="mt-8 text-lg">
        Software Engineer and Tech Lead at{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noreferrer"
        >
          Google
        </a>{' '}
        leading teams in education projects on Google Search and Youtube.
        Designed and implemented features impacting millions of students around
        the world{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noreferrer"
        >
          like this one I contributed to
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Software Engineer and Consultant at{' '}
        <a
          className="underline"
          href="https://www.ibm.com/blockchain"
          target="_blank"
          rel="noreferrer"
        >
          IBM Blockchain
        </a>
        . Led a remote developement team to build blockchain applications for
        large organization like FedEx and the State of Delaware. (This was 2017,
        and I'm now more skeptical about the future of{' '}
        <a
          className="underline"
          href="https://www.hyperledger.org/"
          target="_blank"
          rel="noreferrer"
        >
          Hyperledger
        </a>{' '}
        and enterprise blockchains).
      </p>

      <p className="mt-8 text-lg">
        Co-Founder of Tiger Bed Rentals, a bed rental company I started with a
        friend (and my co-founder for OnePager) in college. Grew to $60k+ in
        revenue year one, $200k+ and profitable by year two. Evenutally sold to{' '}
        <a
          className="underline"
          href="https://roomie.co/"
          target="_blank"
          rel="noreferrer"
        >
          Roomie Rentals
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Undergraduate engineering degree in computer science from Princeton
        University, where I was recruited to play for the lacrosse team. That
        kickstarted everything, let's go Tigers!
      </p>

      <h2 className="mt-8 italic text-lg">Misc Side Projects</h2>

      <div className="mt-8 text-lg">
        I usually get in all the coding/work I need from my main job, but I do
        love to tinker on side projects (OnePager is the only major graduate
        from this list). A few fun ones both technical and non-technical:
        <ul className="list-disc ml-6 mt-4 gap-4">
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://modelle.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Modelle
              </a>
            </span>
            , Stable diffusion + SAM for a seemless virtual try on experience
            for e-commerce brands (2023-2024)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://lowtech.ai/"
                target="_blank"
                rel="noreferrer"
              >
                LowTech AI
              </a>
            </span>
            , Dead simple AI tools for non tech savy people (2023-2024)
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://12daysofai.com/"
                target="_blank"
                rel="noreferrer"
              >
                The 12 Days of AI
              </a>
            </span>
            , the wordle of Generative AI + Christmas (2022, resurrected 2023)
          </li>
          <li className="mt-4">
            <span className="font-semibold">Text Reflect</span>, daily self
            reflection via text (2022)
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
              href="https://alltoscale.com/"
              target="_blank"
              rel="noreferrer"
            >
              All to Scale
            </a>
            , Putting unthinkable size, numbers, and complexity into a form you
            can wrap your head around! (2021){' '}
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
            , calculate and compete to improve your true impact on the
            environment with others in your area (2016)
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
);

export default About;
