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
        Exploring AI and Climate tech. I'm extremely optimistic about recent AI
        advancements and their practical applications. There's massive potential
        to harness this technology to combat the climate crisis.
      </p>

      <h2 className="mt-8 italic text-lg">Previously</h2>

      <p className="mt-8 text-lg">
        CTO at{' '}
        <a className="underline" href="https://stonks.com">
          Stonks
        </a>
        . We raised $19M from a16z and top VCs (Matrix, Floodgate, Pioneer), top
        syndicates (Ex-Google, Ex-Uber, Ex-Palantir, ...), and top angels (Naval
        Ravikant, Sam Parr, Tim Draper, ...) to build "shark tank on the
        internet". I led our engineering team, built our core product, and
        facilitated $120M+ into hundreds of early stage companies through our
        platform.
      </p>

      <p className="mt-8 text-lg">
        Co-Founder and CTO of{' '}
        <a className="underline" href="https://onepager.vc">
          OnePager
        </a>{' '}
        and{' '}
        <a className="underline" href="https://os.onepager.vc">
          Open Scout
        </a>
        . Over 5,000 companies trusted us with their fundraising process. We
        were aquired by Stonks in January 2022.
      </p>

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
        impacting millions of students around the world,{' '}
        <a
          className="underline"
          href="https://www.google.com/search?q=2x%5E2+%2B+3x+-+1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=2x%5E2+%2B+3x+-+1+%3D+0&aqs=chrome..69i57.8930j0j9&sourceid=chrome&ie=UTF-8"
        >
          like this one
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Software Engineer and Consultant at{' '}
        <a className="underline" href="https://www.ibm.com/blockchain">
          IBM Blockchain
        </a>
        . Led a remote developement team to build blockchain applications for
        big companies. (This was 2017, and I'm now more skeptical about the
        future of{' '}
        <a className="underline" href="https://www.hyperledger.org/">
          Hyperledger
        </a>{' '}
        and enterprise blockchain).
      </p>

      <p className="mt-8 text-lg">
        Co-Founder of Tiger Bed Rentals, a bed rental company I started with a
        friend (and future co-founder of OnePager!) in college. Grew to $60k+ in
        revenue year one, profitable by year two. Evenutally sold to{' '}
        <a className="underline" href="https://roomie.co/">
          Roomie Rentals
        </a>
        .
      </p>

      <p className="mt-8 text-lg">
        Undergraduate engineering degree in Computer Science from Princeton,
        where I was recruited to play for the NCAA Division 1 men's lacrosse
        team. Let's go Tigers!
      </p>

      <h2 className="mt-8 italic text-lg">Misc Side Projects</h2>

      <div className="mt-8 text-lg">
        I usually get in all the coding/work I need from my main job, but I do
        love to tinker on side projects (OnePager is the only graduate from this
        list). A few fun ones both technical and non-technical:
        <ul className="list-disc ml-6 mt-4 gap-4">
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
            , Dead simple AI tools for non tech savy users (2023)
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
            , the wordle of Generative AI + Christmas (2022)
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
            , calculate and compete improve your true impact on the environment
            with others in your area (2016)
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
);

export default About;
