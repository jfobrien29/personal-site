import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const About: React.FC<any> = () => (
  <BaseLayout
    title="About Jack O'Brien"
    description="Proven engineer and founder. At my core, I like to build things. Prev. MIT, Sandhill Markets, Google, IBM, and Princeton University."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="mt-8 text-lg">
        Co-founder and CEO of{' '}
        <a
          className="underline"
          href="https://subconscious.dev"
          target="_blank"
          rel="noreferrer"
        >
          Subconscious
        </a>
        . Backed by MIT research, we're building a platform for running
        production agents with tool use and long horizon reasoning from a single
        API call. Where others innovated at the software layer, we innovated at
        the model and runtime layer to maximize efficiency, capability, and
        flexibility. If you're interested in building with us, please reach out!
      </p>

      <h2 className="mt-8 italic text-lg">Previously</h2>

      <p className="mt-8 text-lg">
        MBA at MIT. Came with the aim of building a company at the intersection
        of AI and sustainability. Those two years let to a lot of learning and
        failure, but eventually led me to Hongyin and Subconscious.
      </p>

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
          href="https://openscout.vc"
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
        where I build education-focused projects on Google Search and Youtube.
        Designed and implemented features impacting millions of students around
        the world{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noreferrer"
        >
          like this one
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
        large organization like FedEx, Iron Mountain, and the State of Delaware.
        (This was 2017, and I'm now much more skeptical about of{' '}
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
        Co-Founder of Tiger Bed Rentals, a bed rental company I started with
        Adam Hardej (who was later my co-founder for OnePager) in college. Grew
        to $60k+ in revenue year one, 200k+ and profitable by year two.
        Evenutally sold to{' '}
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

      <h2 className="mt-8 italic text-lg">I love side projects</h2>

      <div className="mt-8 text-lg">
        I usually get in all the coding/work I need from my core work, but I
        just love to tinker on side projects (OnePager and Subconscious are
        graduates from this list). A few notable technical and non-technical
        projects:
        <ul className="list-disc ml-6 mt-4 gap-4">
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://frontrowvibes.com"
                target="_blank"
                rel="noreferrer"
              >
                Front Row Fantasy
              </a>
            </span>
            , fantasy sports for indie music artists in Boston (2024-2025).
            Alive and well led by Blake Blaze!
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://theturingfest.com/"
                target="_blank"
                rel="noreferrer"
              >
                The Turing Fest
              </a>
            </span>{' '}
            and{' '}
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://killtherobot.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Kill the Robot
              </a>
            </span>
            , Classic party games to play with friends, each with an AI twist
            (2024).
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://mailkiwi.com/"
                target="_blank"
                rel="noreferrer"
              >
                Mail Kiwi
              </a>
            </span>
            , AI generated images sent to you via postcard, and it's a surprise
            til you get it! (2024).
          </li>
          <li>
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://promptbetter.today/"
                target="_blank"
                rel="noreferrer"
              >
                Promptly
              </a>
            </span>
            , a chrome extension that makes LLM prompts better, quickly. Think
            grammarly for prompts (2024).
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              <a
                className="underline font-semibold"
                href="https://maxcompute.co/"
                target="_blank"
                rel="noreferrer"
              >
                Max Compute Co.
              </a>
            </span>
            , routing middleware between entprises and 3rd party LLM APIs. We
            make LLM inference cheaper, faster, and more accurate. Winner of the
            MIT 100k grand prize (2024).
          </li>
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
            for e-commerce brands (2023-2024).
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
            , Dead simple AI tools for non tech savy people (2023-2025).{' '}
            <span className="italic">
              This project has killer SEO these days thanks to the domain and a
              lot of well used prompts.
            </span>
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
            , the wordle of Generative AI + Christmas (2022, resurrected 2023,
            2024).
          </li>
          <li className="mt-4">
            <span className="font-semibold">Text Reflect</span>, daily self
            reflection via text (2022).
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
            (2018-2021).
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
              className="underline"
              href="https://buildspace.so/"
              target="_blank"
              rel="noreferrer"
            >
              buildspace course
            </a>{' '}
            (2021).
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
            can wrap your head around! (2021).
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
            via text, show results in public (2021).
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
            , use your free minutes to learn something (2018).
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
            , renovated a school bus and drove it to 37 states (2017).
          </li>
          <li className="mt-4">
            <span className="font-semibold">
              Impact Environmental Calculator
            </span>
            , calculate and compete to improve your true impact on the
            environment with others in your area (2016).
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
);

export default About;
