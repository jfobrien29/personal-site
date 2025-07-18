import React from 'react';
import { IBlogPost } from '../all';
import {
  A,
  Divider,
  Heading2,
  Heading3,
  Heading4,
  P,
  Quote,
  SubTitle,
} from '../common';

export const SLUG = 'ten-shots-at-building-ai';
export const TITLE = 'Ten Shots at Building AI';
export const DATE = '2025-07-18';
export const EXCERPT = `Over the past 2+ years, I've built and launched 10 AI projects with vastly different goals, technologies, and levels of success. Here's what happened.`;

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        One weekend in the fall of 2022, I built my first AI powered side
        project, a game I wanted to be known as the "Wordle of Generative AI".
        It used an early version of Stability AI's Dreambooth API, and was a hit
        among the friends and anonymous internet people who tried it out. One
        friend even begged me to keep making more puzzles after the 12 original
        days were up. I happily extended it, integrated it with DALLE, and
        relaunched it in 2023 and 2024. That project kicked me into the AI
        rabbit hole.
      </P>
      <P>
        Over the past 2+ years, I've built and publicly launched 10 individual
        AI powered apps (many more if you count single day hackathons) with
        vastly different goals, technologies, and levels of success. Some were
        for fun or experimentation, and 5 were serious attempts at launching a
        real business. As I was gradutating MIT Sloan a few months ago, I went
        through the repos, the dbs, the emails, and my own notes to make sense
        of it all. Among those 10 apps are tens of thousands of users, thousands
        in revenue, many painful decisions to move on, and a ton of fun along
        the way.
      </P>
      <P>
        These years have been exciting but chaotic for me: I quit my job, I got
        engaged, we moved to Boston, I went to business school, we had our
        wedding, and all around us AI was taking over the world. I wanted to
        take a moment to reflect on each project, how it came to be, and what it
        led to next. It's always easier to connect the dots looking backwards.
      </P>
      <P>
        Read along to understand what I've been up to, what I'm most excited
        about, and probably learn a thing or two.
      </P>

      <Heading2>The Projects</Heading2>
      <P>
        The 12 Days of AI: <A href="https://12daysofai.com">12daysofai.com</A>
        <br />
        LowTech AI: <A href="https://lowtech.ai">lowtech.ai</A>
        <br />
        Modelle: <A href="https://modelle.ai">modelle.ai</A>
        <br />
        Max Compute Co: <A href="https://maxcompute.co">maxcompute.co</A>
        <br />
        Promptly:{' '}
        <A href="https://chromewebstore.google.com/detail/promptly/ajgjlgooiinfdmongiadfhfflgihmbeg?hl=en">
          (chrome webstore)
        </A>
        <br />
        Build AI: <A href="https://trybuild.ai">trybuild.ai</A>
        <br />
        Mail Kiwi: <A href="https://mailkiwi.com">mailkiwi.com</A>
        <br />
        The Turing Fest:{' '}
        <A href="https://theturingfest.com">theturingfest.com</A>
        <br />
        Front Row Fantasy:{' '}
        <A href="https://frontrowvibes.com">frontrowvibes.com</A>
        <br />
        "Async Inference Co": domain taken over by current project
      </P>

      <Heading2>Project 1: The 12 Days of AI</Heading2>
      <P>
        <strong>One liner:</strong> The Wordle of Generative AI
        <br />
        <strong>Inspiration:</strong> In 2022 I was experimenting with the
        stable diffusion API with my friend Charlie Durbin in NYC. It was clumsy
        and expensive to use through Dream Booth, but in a single sitting we
        managed to get a webapp with text-image working, these were the days
        before Cursor. The next weekend, inspired by hearing the Wordle creator
        sold his project to the New York Times after making a fun game for his
        girlfriend, I decided to turn our starter project into a game too. The
        point was to create a newly possible game format by using text to image
        and share the magic of Gen AI. The game still proudly proclaims "You're
        about to use generative AI"! Crazy way to phrase things these days.
      </P>
      <P>
        <strong>The launch:</strong> I built an initial version in late November
        2022, but decided to theme it around Christmas and launch with the theme
        of "The 12 Days of AI". I shared around with friends and on product
        hunt, and got hundreds of users!
      </P>
      <P>
        The game was free to use, but I eventually added in the ability to
        purchase stickers of the images you generated during gameplay. Not one
        person bought a sticker, and I eventually removed the buy sticker
        functionality.
      </P>
      <P>
        <strong>Status:</strong> This game lives on and you can still play
        today! I haven't touched the core gameplay, ux, or styling of the app,
        but I have slightly updated it for 2023 and 2024. You can still give it
        a try today.
      </P>

      <P>
        <A href="https://12daysofai.com">Play 12 Days of AI</A>
      </P>

      <Heading2>Project 2: LowTech AI</Heading2>
      <P>
        <strong>One liner:</strong> Dead simple AI tools for non-tech savvy
        people
        <br />
        <strong>Inspiration:</strong> The day open AI released the gpt-3.5 API,
        I wanted to make something with it. A few weeks earlier, a former
        coworker of mine had started an AI newsletter during the initial ChatGPT
        craze and ran a "prompt of the day" every edition. I thought that
        including the text prompt alone was too many steps: copy the prompt,
        open up ChatGPT, paste it in, delete the templated portions of the
        prompt, write in your information, and then get a result. To make it
        simpler, I built a simple way to use templated prompts immediately from
        the newsletter: click the prompt, land on a webpage with text boxes for
        the areas to enter, enter in your info, and get a result!
      </P>
      <P>
        After running it for a few newsletter in March and getting positive
        feedback, I put that project on the backburner as things accelerated in
        my life. I got accepted into MIT business school, I turned 28, I got an
        offer to join a startup as a technical cofounder, I decided to go to
        business school, and I resigned as the CTO at Sandhill Markets. With a
        few months free before school, I picked LowTech AI back up to pursue a
        bigger opportunity than newsletter tech: helping more people in my life
        take advantage of LLMs. By June of 2023 I was using ChatGPT all the
        time, but no one around me was! With easy-to-use templated prompts I
        wanted to allow more people to experience the magic.
      </P>
      <P>
        <strong>The launch:</strong> After the initial newsletter launch in
        march, I re-launched the project in June of 2023. I put us on product
        hunt (but botched it due to incorrectly planning the date), announced it
        on Twitter, shared it with friends, and wrote blog posts about the
        product. I even brought on 10 interns to write content and boost SEO for
        the site. At MIT in the fall, I hosted a prompt-a-thon with the help of
        some classmates Clyde, Priya, and Will.
      </P>
      <P>
        <strong>Status:</strong> By the end of 2023, I stepped away from the
        project as my main focus. I struggled to imagine how this could grow to
        anything more than a wrapper, and I knew I had limited time to focus on
        building and launching a company during this grad school window. Two
        years later LowTech AI still runs and has great SEO leading to roughly
        100 new signups daily. Even better, some pay a monthly subscription to
        get better models and unlimited generations! Overall, this has been an
        incredible project to learn deeply about the UX patterns around building
        AI products, building growth via SEO, and supporting a passively revenue
        generating product. Try out LowTech AI today.
      </P>

      <P>
        <A href="https://lowtech.ai">Try LowTech AI</A>
      </P>

      <Heading2>Project 3: Modelle</Heading2>
      <P>
        <strong>One liner:</strong> The best model for you is you.
        <br />
        <strong>Inspiration:</strong> After LowTech AI, I partnered with Tim
        Valecenti at MIT to build something. We weren't sure exactly, but we had
        become friends and white boarded a few ideas to try. We decided we
        wanted to work on something that was newly possible with AI, leading AI
        companies like OpenAI wouldn't build themselves, was B2B in nature, we
        could prototype quickly, and would only improve as AI got better. We
        were industry agnostic and talked about ideas from construction, to
        children's toys, to healthcare.
      </P>
      <P>
        We eventually landed on building Modelle, a virtual try on experience
        powered by stable diffusion. I imagined a world where you load up a
        clothing website and all of the models are you! That's the vision we
        were going after, and we set off to build our prototype and find our
        market. We talked with retailers from Lululemon to Congo Clothing
        Company, and hacked together the first version of our prototype on a
        Friday in December 2023.
      </P>
      <P>
        <strong>The launch:</strong> We shared among our friends, potential
        customers, and even walked around the Prudential Center demoing with
        shoppers. Thanks to everyone who tried us out!
      </P>
      <P>
        <strong>Status:</strong> After about 2 months, we decided not to pursue
        Modelle for a few reasons, most of all for me being that I didn't want
        to dive deep into the fashion e-commerce space. We were also fighting an
        uphill battle: days after we demoed our prototype with shoppers at the
        Prue, Alibaba and Amazon independently open sourced their own AI models
        for virtual try on. Competitors were popping up, including at least two
        companies in the YC winter 2024 batch. And in the short term, it was far
        too expensive to generate images at scale for cheap enough. On top of
        our motivation, our competition, and our poor unit economics, retailers
        didn't want to pay us for the service unless we proved it increased
        their sales, and shoppers cared much more about the "fit" of the
        clothing than the style of the clothing with their skin tone and face.
      </P>
      <P>
        When inference costs really fall and these models improve, I'm sure
        there will be several companies in this space that transform fashion and
        e-commerce, but it won't be me!
      </P>

      <P>
        <A href="https://modelle.ai">
          Check out Modelle (site live, but inactive)
        </A>
      </P>

      <Heading2>Project 4: Max Compute Co.</Heading2>
      <P>
        <strong>One liner:</strong> LLM optimization for enterprises
        <br />
        <strong>Inspiration:</strong> I made the difficult decision to go to
        business school for a few reasons. First, I wanted to move away from
        building fintech webapps and become the CEO of a startup. Second, I saw
        the efficacy of GitHub copilot and wanted to move away from building
        software as my core competency. Finally, I wanted to shift my career
        focus towards the only industries I thought mattered on any meaningful
        timescale, AI and energy. MIT seemed to be the only university for an
        engineer at heart with a top business school program, and I'm glad I
        made the leap.
      </P>
      <P>
        In January of 2024, MIT's Schwarzman College of Computing released a
        writing competition on the future of computing, and I took that as an
        opportunity to dive deep on the intersection of AI and energy. My essay,
        "Compute Will Flood the World", didn't win a cash prize, but it did
        spark what would become Max Compute Co. At this point I'd built a few AI
        projects and had done research on AI's energy consumption so I knew two
        things to be true: using AI models was extremely expensive, but also
        extremely resource intensive. But not all models are created equally,
        and the rise of small models led to my building MCC.
      </P>
      <P>
        Our product was a middleware proxy for developers to route LLM requests
        to the smallest, cheapest, and most environmentally friendly but best
        model to solve a user's query. It was great for companies to save money,
        reduce latency, and improve reliability, and as a side benefit was great
        for the planet to save energy.
      </P>
      <P>
        After planning out heuristics for building this sort of router and
        starting to talk with new companies, we built the prototype at an AGI
        House hackathon on MIT campus and came in 2nd. We won 5k in free Lambda
        credits!
      </P>
      <P>
        <strong>The launch:</strong> The biggest moment for Max Compute Co. was
        the MIT 100k pitch competition. We'd been waitlisted from MIT Delta V,
        rejected by YC after 2 interviews, and denied from a number of other
        programs and pitch competitions as we tried to get our company off the
        ground. But from hundreds of applicants, we were lucky to pitch among 20
        semifinalist companies for a chance to win 100k. We were more lucky to
        win and advance to the finals. Then in front of a huge crowd at MIT, Tim
        and I pitched MCC together and won the 100k prize. It was a hugely
        validating win, and an incredible intro to the Boston VC community.
      </P>
      <P>
        <strong>Status:</strong> Unfortunately for Max Compute Co., the AI
        landscape had shifted below us. By the time we won the 100k prize, 5+
        competitors had launched. Potential enterprise customers either wanted
        to partner with a single AI company directly, not route between several.
        An open source solution looked like the winner. And most importantly,
        Tim and I had different priorities. Despite some positive, external
        validation from the MIT 100k, we didn't see a way to make this business
        work and decided to part ways.
      </P>

      <P>
        <A href="https://maxcompute.co">
          Check out Max Compute Co. (site live, but inactive)
        </A>
      </P>

      <Heading2>Project 5: Promptly</Heading2>
      <P>
        <strong>One liner:</strong> Grammarly for AI Prompts
        <br />
        <strong>Inspiration:</strong> In March of 2024, I'd helped run the MIT
        Sloan AI conference, the second of its kind and the first held at the
        MIT Media lab. As part of that conference, I helped run a session with
        Sabrina, an applied AI team lead at OpenAI. A few weeks after the
        conference, I met up with Sabrina in San Francisco and she shared her
        idea for a "grammarly for prompting". After building LowTech AI, I loved
        the idea immediately, and during a cab ride to Palo Alto I coded up a
        chrome plugin prototype (no code complete, all natural). We passively
        worked on the idea for several weeks, culminating in a weekend when
        Sabrina came up to Boston from NYC for a full day hackathon.
      </P>
      <P>
        <strong>The launch:</strong> We tested with ourselves and a few friends
        but never published it more widely. Overall, Sabrina got busy with work
        at OpenAI, and I moved on to my next project. It's still an idea for the
        future.
      </P>
      <P>
        <strong>Status:</strong> Hibernation, potentially very possible now with
        WebGPU and tiny models!
      </P>

      <P>
        <A href="https://chromewebstore.google.com/detail/promptly/ajgjlgooiinfdmongiadfhfflgihmbeg?hl=en">
          Check out Promptly (chrome webstore)
        </A>
      </P>

      <Heading2>Project 6: Build AI</Heading2>
      <P>
        <strong>One liner:</strong> An inexpensive public GPU cloud for AI
        training powered by renewables.
        <br />
        <strong>Inspiration:</strong> Atomic VC is a VC fund and startup
        accelerator behind breakout companies like hims & hers, Exowatt, and
        <A href="https://www.elly.ai/">Elly</A>. The firm experiments with
        ideas, tries hard to kill them, and takes on the most promising
        opportunities to found, fund, and find a team to run. Around the time we
        were debating next steps for Max Compute Co., Atomic reached out to me
        about becoming a founder of a new company they were exploring called
        Build AI.
      </P>
      <P>
        Taking advantage of low energy prices in remote areas and the massive
        demand for GPUs for training, Build AI aimed to build modular data
        centers were energy was cheap but intermittent. Success would mean
        cheaper training for companies, AI infrastructure powered by renewables,
        and a perfect merging of my interests and strengths on a world scale
        problem. In May I moved to NYC to work on Build AI with the intention of
        dropping out of MIT if the business was taking off. I was ready to be
        all in.
      </P>
      <P>
        <strong>The launch:</strong> At Build AI, I took on the role of a
        non-technical founder and focused on A) hiring and managing the build of
        our cloud offering and B) pushing for sales by talking with customers,
        anyone who would get on the phone with us and talk about AI training.
        Without actually having built out AI modular data centers, we launched a
        cloud platform in August and onboarded customers using rented GPUs.
      </P>
      <P>
        <strong>Status:</strong> It became clear over the months I was working
        on Build AI that the core assumptions of this company were wrong. A win
        for entrepreneurial experimentation, but another failure for me. In part
        with my recommendation, Atomic decided to shut down the company. A few
        key reasons we decided to shut down:
      </P>
      <P>
        For a training cluster with top of the line interconnected hardware, the
        price of energy didn't meaningfully lower the cost of GPU/hr pricing.
        Training requires the best hardware (H100s at the time) intfinibanded
        together, and the hardware alone for building a cluster is the only cost
        that matters over the lifetime of the asset. Earlier financial models
        for the company had discounted how expensive the GPU hardware and
        networking would be. From a user perspective, you get a cloud that is
        slightly cheaper, but has sizeable tradeoffs (intermittency, higher
        latency).
      </P>
      <P>
        We realized that only about 40-50 teams in the world are consistently
        training on more than 40 GPUs at a time. If you're working close to the
        AI space, you can probably name everyone of them, and at reasonable
        scale they all want to build and own their own hardware. Companies like
        SF compute Co have stepped in to cater to startups for bursty training,
        and companies of larger scale are building their own clusters. The vast
        majority of training is smaller finetuning jobs.
      </P>
      <P>
        Small companies train on free credits. Larger company train on hardware
        they own. The largest companies build data centers.
      </P>
      <P>
        Atomic would need to invest 30M+ for a single POC modular data center to
        prove the model before we scaled. They were doubtful it was worth the
        shot.
      </P>
      <P>
        We were seeing enormous outlays of capital from existing hyperscalers
        and GPU clouds like CoreWeave, Lambda, RunPod, and Crusoe.
      </P>
      <P>
        After all my customer calls, building the platform, researching
        opportunities, and evaluating what we'd learned, I recommended Build AI
        shut down. It crushed me, and I dealt with that in the weeks that
        followed, but it was the right decision.
      </P>

      <P>
        <A href="https://trybuild.ai">Check out Build AI</A>
      </P>

      <Heading2>The Sundai Club</Heading2>
      <P>
        At this point, I returned to Cambridge to finish my MBA at MIT. I
        learned a ton working on Build AI, but I didn't know exactly what to do
        or what to build next. Through the chaos of wedding weekends and school,
        I was lucky to come across the{' '}
        <A href="https://www.sundai.club/">Sundai Club</A>. Sundai is a group of
        hackers from MIT, Harvard, Northeastern, and the Boston area that get
        together on Sundays to launch AI powered apps in a single day. Get there
        at 10am, demo at 9pm.
      </P>
      <P>
        It's important to note that at this point I, a business school student,
        was still writing code daily, and around this time switched from working
        in VS code with Copilot to using Cursor. I didn't expect the change to
        be so drastic, but wow was I wrong. Cursor is an incredible tool that's
        made getting into a flow state building software that much easier and
        more fun.
      </P>
      <P>
        Through my experience with Github Copilot, switching to Cursor, and
        these hacks with the Sundai club, I wrote an article about the future of
        software engineering and the only two skills that matter:{' '}
        <A href="https://thejackobrien.com/blog/taste-and-tradeoffs">
          taste and tradeoffs
        </A>
        .
      </P>
      <P>
        During Sundai hacks, I've built seven or eight products, but I want to
        focus on two that I worked on beyond the single day hackathons: Mail
        Kiwi & The Turing Fest
      </P>

      <Heading2>Project 9: Mail Kiwi (Sundai)</Heading2>
      <P>
        <strong>One liner:</strong> Submit a prompt, get a custom postcard in
        the mail.
        <br />
        <strong>Inspiration:</strong>{' '}
        <A href="https://x.com/imkevinxu/status/1740178787063706071">
          This tweet that Kevin tagged me in!
        </A>{' '}
        I loved it, thought about it for months, and eventually built it. A
        really fun project.
        <br />
        <strong>The launch:</strong> I launched on Twitter to lots of positive
        reactions. Still need to build out what one friend called "Mom mode",
        send a postcard with a custom message. AKA, the normal way to send a
        postcard.
        <br />
        <strong>Status:</strong> Still alive and well. Send yourself a postcard
        today! My grandma does it every few months. Lob is the best postcard API
        I could find.
      </P>
      <P>
        <A href="https://mailkiwi.com">
          Send yourself a postcard with Mail Kiwi
        </A>
      </P>

      <Heading2>Project 9: The Turing Fest (Sundai)</Heading2>
      <P>
        <strong>One liner:</strong> Quiplash for LLMs
        <br />
        <strong>Inspiration:</strong> Honestly, I'm just a big fan of quiplash,
        and after using convex.dev I figured I had the ability to make this in a
        single weekend.
        <br />
        <strong>The launch:</strong> I've played 30+ games with friends all over
        MIT, starting at a night hosted by Blake Blaze.
        <br />
        <strong>Status:</strong> Still alive and well. Someday, I hope to host
        an event at The Turing Tavern in Cambridge MA for groups to play.
      </P>
      <P>
        <A href="https://theturingfest.com">Play The Turing Fest</A>
      </P>

      <Heading2>Project 9: Front Row Fantasy</Heading2>
      <P>
        <strong>One liner:</strong> Fantasy football for music
        <br />
        <strong>Inspiration:</strong> Working with Blake on a fun new concept.
        <br />
        <strong>The launch:</strong> Shared with a group of friends at MIT,
        great feeback so far!
        <br />
        <strong>Status:</strong> Blake is continuing the work, I think it's a
        killer project!
      </P>
      <P>
        <A href="https://frontrowvibes.com">
          Join a league on Front Row Fantasy
        </A>
      </P>

      <Heading2>Project 10: "Async Inference Co."</Heading2>
      <P>
        <strong>One liner:</strong> An API for cheap asynchronous inference
        <br />
        <strong>Inspiration:</strong> My experience at Build AI led to building
        a plaform that focused on inference not training. When you stop worrying
        about hyperfast inference, there's a ton of room to optimize. We wanted
        to enable more economically viable AI use cases with higher latency AI,
        and make better usage of the GPUs already plugged into our energy
        infrastructure.
        <br />
        <strong>The launch:</strong> Built a prototype and launched to a small
        subset of companies.
        <br />
        <strong>Status:</strong> It didn't work for a number of reasons, but led
        to me meeting Hongyin.
      </P>

      <Heading2>(Bonus) Project 11: Stealth Materials Science Company</Heading2>
      <P>
        <strong>One liner:</strong> A single editor to manage your atoms
        (materials science processes) and your bytes (data to inform those
        processes)
        <br />
        <strong>Inspiration:</strong> I met, the founder a brilliant engineer,
        who came to this concept after exploring the materials space to fix what
        he called a "top three problem in the world".
        <br />
        <strong>The launch:</strong> This work is in progress, but hasn't
        publicly launched just yet!
      </P>

      <Heading2>So what's it all mean?</Heading2>
      <P>
        It's been hard at times, especially letting go or parting ways with a
        collaborator, but it's been extremely rewarding and fun. Business school
        can be a lot of talk, and while I learned an unbelievable amount and met
        incredible life long friends and mentors, I couldn't imagine not
        participating in the AI wave that's happening all around us.
      </P>
      <P>
        My advice if you're starting out working on something now: you have to
        go for it. Anytime spent wavering is wasted time. Once you're in the
        middle of it (can take 2 weeks or 6 months), it becomes very obvious
        very quickly wether that project is worth your time. You'll see the
        technical shortcomings, the ways OpenAI could crush you, the impossible
        sales process in front of you, or the feel the lack of traction. It only
        works if you do it, and it's usually pretty fun too. If you're lucky,
        you might just find something that works.
      </P>
      <P>
        Thanks to everyone who's supported me on this journey. Excited to share
        more on what's next for me with Subconscious v2 in the near future!
      </P>
    </>
  );
};

export const TwoYearsOfBuildingAI: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};

export default BlogPost;
