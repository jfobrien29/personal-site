import React from 'react';
import { IBlogPost } from '../all';
import { A, Heading2, P, PostImage } from '../common';

export const SLUG = '2021-year-in-review';
export const TITLE = 'Big Decisions, Big Races, and a Big Year All Around!';
export const DATE = '2022-01-10';
export const EXCERPT =
  'I met great new friends and spent quality time with old ones. I ran and trained for my first half iron man and my third marathon. I skied a ton.';

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        2021 was an incredible year for me. It’s hard to admit that publicly
        during the pandemic, but reflecting on my experiences it’s hard to argue
        otherwise. I had my own ups, downs, and stressful times, but I recognize
        how truly lucky I am to be able to work and live in relative normalcy.
      </P>
      <P>
        I met great new friends and spent quality time with old ones. I ran and
        trained for my first half iron man and my third marathon. I skied a ton.
        I launched features for Google and YouTube reaching millions of students
        around the world. And in my defining moment of the year (and possibly
        decade), I choose to quit my job at Google and work on OnePager full
        time.
      </P>
      <P>
        I’m writing this mostly in self reflection, but if you choose to go
        further I hope you enjoy! (Note, there is a heavy emphasis on OnePager
        as this post goes on.)
      </P>
      <Heading2>Great People</Heading2>
      <P>
        2021 was first and foremost a year about spending time with the people I
        love. I started the year living in Lake Tahoe for two months with my
        girlfriend Tori and a great group of 10 other friends. I lived at home
        for a month and spent time with with my parents and brother. In April, I
        moved back into NYC with my long time friend AJ. I trained and ran a
        triathlon with 3 of my closest friends AJ, Chris, and Johnny. I left
        Google to work full time on OnePager with Nic and Adam, more great
        friends. Through all of these experiences I’ve gotten to spend time with
        my favorite people and meet new ones along the way—notably all of the
        great new founders I’ve met while building OnePager.
      </P>
      <P>
        I also got to experience my first batch of friends' weddings, congrats
        again to the Griffens, the Hardejs, and the O’Connors! All incredible
        experiences, and I’m excited for more in 2022.
      </P>
      <P>
        Three stand out highlights for me: #1 spending a week with Tori living
        on Alistair and George’s houseboat in Sausalito. #2 a four day camping
        trip I took with 5 friends in Zion national park. #3 Memorial day
        weekend, where I brought together my family and friends together in
        Massachusetts for a great weekend in the pouring rain.
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/tori_jackson_hole.png"
        alt="Tori and I at the Griffens wedding in Jackson Hole, Wyoming"
        subtitle="Tori and I at the Griffens wedding in Jackson Hole, Wyoming"
      />
      <PostImage
        src="/blogs/2021-year-in-review/zion_mountains.jpg"
        alt="Zion Mountains"
        subtitle="Kolob Canyon in Zion from our 4 day camping trip across the park."
      />
      <PostImage
        src="/blogs/2021-year-in-review/tahoe_people.png"
        alt="Friends from Tahoe"
        subtitle="The main characters from our 2 months in Lake Tahoe."
      />
      <Heading2>Big Mountains and Big Races</Heading2>
      <P>
        I started the year in Lake Tahoe trying to ski as much as possible. Half
        of our group of 12 was operating on East Coast hours, so we’d start
        working before sunrise and rush off to sneak in runs at the end of the
        day. I’d never skied more than a few days a in year, but over the course
        of 2 months I got on the mountain 36 separate days. I loved it, but
        eventually I missed NYC and it was time to reenter the real world.
      </P>
      <P>
        After Tahoe, I spent a large chunk of my time during the spring training
        for my first half Iron Man triathlon - a 1.2 mile swim, 56 mile bike,
        and 13.1 mile run. Luckily I was a solid runner already, and I really
        enjoyed learning to swim long distance. Biking I’m still fairly
        indifferent about. Training for March, April, and May amounted to
        roughly 9 activities per week, usually swimming paired with running or
        biking. I was lucky to be training for the race with three good friends,
        one of which was my roommate AJ.
      </P>
      <P>
        The triathlon was on June 6th in Roanoke, Virginia, and happened to land
        on the 77th year anniversary of D-Day and the invasion of Normandy. At
        the start of the race, the congressman for the local district gave a
        speech about the significance of our event happening in Roanoke on this
        day. With the sun rising over a reservoir in the Blue Ridge Mountains
        behind him, he explained that the “Bedford Boys,” kids from Roanoke and
        the surrounding Bedford county, were the tip of the spear on D-Day and
        suffered more causalities per capita than any other unit from the US. We
        could enjoy this race because of their sacrifice. Needless to say I was
        fired up to jump in the water and get started, it was a great moment.
      </P>
      <P>
        The swim went as well as it could have, and the bike faster than I
        expected. Unfortunately, the run was a disaster. It was 90 degrees by
        the time I began the run, and I’d overexerted myself on the bike. By
        mile 3 I started cramping in my legs. By mile 7 I had to run-walk from
        crippling cramps. I finished strong, but ask me in person for the
        hilarious finish line details 🤖.
      </P>
      <P>
        After recovering from the triathlon and much deliberation, Aj and I
        decided to run our third (and possibly final) New York City Marathon
        together. We’d run in 2018 and 2019, but 2020 had been canceled due to
        COVID. The 2021 race was set to be the 50th NYC marathon, and it seemed
        like too good an opportunity to miss out on. So, we decided to once
        again train, run, and fundraise for the Leukemia & Lymphoma Society
        (LLS) under our team name{' '}
        <A href="https://groovingagainstleukemia.com">
          Grooving Against Leukemia
        </A>
        .
      </P>
      <P>
        Overall, we raised $26,000 for LLS and both smashed our personal time
        records (PRs). Compared to previous years, I think we’d started training
        earlier and been much more more deliberate about our nutrition. I’d
        finished both 2018 and 2019 in a cramping run walk (just like the Iron
        Man this year), but for this race I finally figured it out and crossed
        the finish line strong with a PR of 3:52, 15 minutes faster than my next
        best in 2019. I consumed a disgusting amount of salt during the run and
        my headphones died about 2 hours in, but it flew by and I honestly loved
        every minute!
      </P>
      <P>
        Running these races has been an incredible experience for me physically
        and mentally, but above all a great way for me to give back to LLS. With
        the three races under our belt, we’ve raised $96,458!
      </P>
      <P>For now we’ve decided this is the end of GAL… for now.</P>

      <PostImage
        src="/blogs/2021-year-in-review/post_ironman.png"
        alt="Johnny and I after the iron man."
        subtitle="Johnny and I after finishing the half Iron Man in Roanoke, VA."
      />
      <PostImage
        src="/blogs/2021-year-in-review/nyc_marathon.jpg"
        alt="Me running the NYC marathon."
        subtitle="A shot from the NYC marathon!"
      />

      <Heading2>Building At Google</Heading2>
      <P>
        Through living in Tahoe and eventually moving back to New York City, I
        was happily working for Google. In mid 2020, I’d joined a new team that
        formed during the pandemic to help with the surge of remote-learning
        students relying on Google Search. There hadn’t been a big focus on
        academic learning queries in the past, so we built new search features
        to improve learner experience. In the fall, my team launched{' '}
        <A href="https://www.google.com/search?q=3x%5E2+-+2x+%2B1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=3x%5E2+-+2x+%2B1+%3D+0&aqs=chrome..69i57.12630j0j7&sourceid=chrome&ie=UTF-8">
          the math solver
        </A>
        , a set of search features to recognize, solve, and present math
        problems directly on the search results page. It was a big success! So
        in 2021, I was tasked with growing the scope of our team from Search
        into YouTube.
      </P>
      <P>
        My goal, as it was within Search, was to improve the experience of
        students using YouTube as a learning tool. So I built a set features to
        help students find relevant learning content and focus, aka remove
        distractions and non related content. Removing distractions proved to be
        a difficult task—YT is optimized to increase user watch time, which at
        times directly opposed recommending high quality educational content.
        Despite that difficulty, I designed, built, and launched a set of these
        features, the first from the Education Search Team within the YouTube
        product.
      </P>
      <P>
        As an aside, in one of my experiments I crashed the YouTube watch next
        recommendation service, so apologies to the 0.5% of US-based users that
        found their recommendations a bit odd for roughly 6 hours :).
      </P>
      <P>
        The positives: I got to run a new team within YouTube and launch
        features affecting millions of users, mostly students. According our
        launch metrics, features I had developed increased Academic Learning
        Watch Time by tens of thousands of hours weekly! A drop in the bucket
        for the billions of hours watched of all video types, but a step in the
        right direction.
      </P>
      <P>
        The cons: bureaucracy took its toll. Search and YouTube are massively
        scrutinized entities, and making any changes takes time. There’s
        planning, designs, design approvals, building, testing, code reviews,
        experiments, experimental review, experiment launch, experiment
        analysis, and a series of other legal, product, and engineering reviews
        before any new change can permanently join the product. It’s rightfully
        complex, but I found it difficult to be motivated after running into
        wall after wall. I couldn’t push new code after 5:00pm PST. My time was
        increasingly spent navigating organizational complexity. I wanted to
        build, and it was still so early in my career that I badly wanted to
        grow faster than I was.
      </P>
      <P>
        All of this was exasperated by the pandemic, where I found it difficult
        to form friendships remotely and get quick advice or feedback via chat
        and video. Had I been in the office with my teammates things may have
        turned out differently.
      </P>
      <Heading2>Committing to OnePager</Heading2>
      <P>
        At the start of 2021 OnePager was a very basic product that I was
        spending a few hours each night building and maintaining. We had no
        revenue streams but were beginning to experience solid user growth
        thanks to referrals from happy founders and partnerships with
        accelerators and incubators.
      </P>
      <P>
        We came into the year with a relatively simple plan: upgrade OnePager
        from a a prototype to a built out SaaS product. Allow for users to
        create multiple OnePagers. Allow for multiple users to join an
        organization and edit OnePagers. Allow for multiple users to
        concurrently edit a OnePager. Add premium analytics, investor tools,
        additional OnePager data visualizations, and exports to take data off
        our platform. Revamp our marketing. Integrate with Stripe and print
        money. Do all of this while consistently attracting new founders, new
        investors, and keeping our users happy.
      </P>
      <P>
        So our full time developer, Chris Yun, and I got to work. We ended up
        launching on April 1st, a deadline we eventually forced on ourselves for
        an optimal Product Hunt Launch. After a rocky 11:00pm-2:00am the rest of
        the launch went great, and we got our biggest user bump yet. OnePager
        was now a fully built out product, not a prototype.
      </P>
      <P>
        Throughout the rest of the spring/early summer we continued to refine
        the product and see steady user growth, roughly 100 companies weekly. We
        also became increasingly involved with AWS startups, who was happy to
        partner with us and get access to our breadth of early stage startups.
        Thus, the first promising model of OnePager presented itself.
      </P>
      <P>
        We would attract companies to OnePager as a fundraising presentation
        tool, and based on their data recommend them the perfect software for
        their business. OnePager was a LinkTree/DocSend for startups, but the
        value was in the data not SaaS. We’d monetize that data by helping
        founders build their companies better and collecting affiliate fee
        revenue. By early summer, we were sending so many companies to AWS, that
        we formed a formal partnership. A few more partnerships like that would
        make us a serious business, and we were in the midst of both a startup
        boom and SaaS spending arms race (software discovery is an +80B market).
      </P>
      <P>
        By early summer, I was completely torn. OnePager was growing with only
        my part time work and leadership, but I knew I had more to offer. The
        business had a fighting chance and it needed my full attention. I loved
        my work at Google, but I was bogged down in bureaucracy. Google was
        comfortable, and OnePager was the unknown.
      </P>
      <P>
        In the end, I spent weeks deliberating and decided that OnePager was the
        best path forward for me. I owe it mostly to my good friend and
        co-founder Adam for ruthlessly recruiting me, and I’m also thankful for
        all the advice I got from friends, family, and mentors.
      </P>
      <P>
        This feels like an insane decision from the outside, so I wrote our my
        reasoning to myself in an essay. I went through the pros and cons of
        both paths, my thoughts after various conversations, and my long term
        goals. The essay ended with this sentence:
      </P>
      <P>
        “Doing this will be difficult and possibly fail, but it will be exciting
        and will move me closer to my ideal future as a proven builder and
        decision maker.”
      </P>
      <P>And with that I was all in!</P>
      <PostImage
        src="/blogs/2021-year-in-review/first_day_office.png"
        alt="Adam and I in the office."
        subtitle="Adam and I in our WeWork the first day, we were able to get in a day early and Nic couldn't make it! So really day 0."
      />
      <Heading2>Being a Founder</Heading2>
      <P>
        By mid summer I was a full time co-founder and CTO of OnePager, and the
        first ~8 weeks were a heads down blur. We moved into a WeWork to spend
        time together and got to work. Nic and I had built out a long backlog of
        bugs, styling changes, and long awaited features, so the work was fairly
        straightforward. Long hours building, testing, and launching. We
        continued to get great feedback from founders and growth showed signs of
        acceleration. Things were generally looking up.
      </P>
      <P>
        At this time we also began exploring product recommendations further.
        Previously, we’d focused on building out OnePager’s core presentation
        and sharing features, with manual product recommendations sent to
        companies via email. Now I built out our V1 of automated product
        recommendations. It worked fairly well off the bat, but not what we’d
        hoped. We kept building and pushed forward.
      </P>
      <P>
        Then in late September we had our first major course correction. Nic,
        Adam, and I attended a Product Hunt Event in SoHo and listened to guest
        speakers Shahed Kahn (founder of Loom) and Josh Buckley (CEO Hyper).
        Afterwards, we managed to talk with Shahed and Josh for roughly an hour,
        and they gave us a rude awakening. We were a talented and promising team
        yes, but it meant nothing if we didn’t show strong growth. Josh said if
        we weren’t growing 10% week over week, or saw a path to that kind of
        growth, it wasn’t venture scalable. That was his benchmark. He liked us,
        but emphasized we needed to continue down the “idea maze”. He didn’t
        think OnePager in its current state would work.
      </P>
      <P>
        From this point on, life at OnePager has been much more startup-y. Happy
        users and a steady stream of companies is fine, but these aren’t metrics
        of success. We needed to optimize for users, revenue, or both and show
        real growth. The app was in great shape but it didn’t matter. We
        switched into full business experimentation mode. (In hindsight, we may
        have overcorrected after this encounter, but I think it was a positive
        overall for us to stop working "heads down")
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/product_hunt.png"
        alt="Nic, Adam, and I. The OnePager team."
        subtitle="Adam, Nic, and I at a Product Hunt event in New York City. After this photo, we talked with Josh and Shahed about OnePager."
      />
      <Heading2>Going Down the Idea Maze</Heading2>
      <P>
        First we explored product recommendations further. As a stand alone
        tool, as an emphasized tool within OnePager, in various delivery
        methods. With several weeks of testing, product recommendations wasn’t
        something users were particularly interested in. It had worked for AWS
        and was a great business model, but it didn’t seem like something that
        got founders excited to join or invite their friends to drive growth.
      </P>
      <P>
        Then we explored recruiting OnePagers after we found user retention to
        be alarmingly low. Users would sign up for OnePager, fundraise, and
        suddenly leave. This is the nature of fundraising (you don’t do it
        forever), but it was a major problem. So, we optimized for recruiting
        with OnePager. Fundraise with us, and then with your newly raised
        capital we can help you hire! I built recruiting OnePagers: new data,
        creation flow, and visualizations. I created an automated newsletter of
        OnePager open roles. I even created a referral bonus system baked into
        OnePagers. If you reviewed a role that seemed relevant to a friend,
        share it with them. If they get the job, you get the referral bonus!
        This feature set came built with tracking and a dashboard for users to
        track their active referrals.
      </P>
      <P>
        This model showed signs of life, but was difficult to grow. Our Open
        Scout network embraced this side of OnePager with open arms, creating
        hundreds of referrals and generated thousands of interactions with our
        initial job posts. Unfortunately though, we found this model difficult
        to execute. We needed to keep three groups of users happy: companies
        hiring, referrers, and job applicants. Recruiting is a deeply fragmented
        and difficult industry, and we decided this likely wasn’t going to be
        our breakthrough moment. So, we left the recruiting features in our
        application, took a noticeable bump to our user retention, and focused
        our efforts back into the core OnePager product.
      </P>
      <P>
        Fundraising is where we got the best feedback. Founders loved the tool,
        and investors loved our deal flow. We doubled down on our core product
        and newsletter we’d slowly built up throughout the year.
      </P>
      <P>
        This lead us to our model today—we get as many companies as we can to
        sign up for OnePager, we show them off to investors, we raise SPVs for
        the ones showing signs of success. On a more granular level, the
        business model works like this: - Businesses sign up for OnePager to
        fundraise - We pick the best of these companies, ones that appear ready
        to raise and have opted in - We show those companies to our growing
        newsletter list of 1000+ active VC and Angel investors - Using the
        tracking data from our platform examine which companies have the highest
        interest from notable investors - We raise SPVs for those companies,
        earning revenue from setting up the deal and carry when the deal goes
        through, all shouldered by investors for the opportunity to follow-on
        invest into hot deals
      </P>
      <P>
        It’s unclear if this is the answer to our problem, but we’re excited the
        way things have gone so far and where “the idea maze” is taking us! It’s
        been a stressful, but rewarding experience. I’ve owned our product end
        to end for nearly 2 years, 7 months full time, and led massive changes,
        real growth, and notable revenue. I do think we’ve made a dent in
        Venture capital.
      </P>
      <P>
        Overall, I firmly believe that there should be more startups with better
        chances at success. Helping more founders fundraise does just that, and
        I’m proud of what we’ve done so far.
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/onepager_boys.png"
        alt="Nic, Adam, and I. The OnePager team."
        subtitle="Nic, me, and Adam at a startup event in New York City hosted by Brex. The OnePager team never looked so good!"
      />
      <Heading2>Conclusion</Heading2>
      <P>
        And that brings us to 2022! I did get COVID during the final days of
        2021 (no fun), so I’m optimistic about my health and new found immunity
        in the new year. I’m hoping for a healthy, happy new year for all of you
        that have made it this far as well.
      </P>
      <P>- Jack</P>
      <P>Related: Best reads of 2021.</P>
    </>
  );
};

export const YearInReview2021: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};
