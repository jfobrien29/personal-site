import { APP_URL } from '@/utils/config';
import React from 'react';
import { IBlogPost } from '../all';
import { A, Heading2, P, PostImage } from '../common';
import { SLUG as BEST_READS_SLUG } from './best-reads-of-2021';

export const SLUG = 'big-decisions-big-races-and-a-big-year-all-around';
export const TITLE = 'Big Decisions, Big Races, and a Big Year All Around!';
export const DATE = '2022-01-12';
export const EXCERPT =
  '2021 year in review: great time with friends, running my first half Iron Man and third marathon, leaving Google for OnePager, and my first 6 months as a founder.';

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        2021 was an incredible year for me. It's odd to admit that publicly
        during the pandemic, but reflecting on my experiences it’s impossible to
        argue otherwise. I had my own ups, downs, and stressful times, but I
        recognize how truly lucky I am to be able to work and live in relative
        normalcy.
      </P>
      <P>
        I got closer with new friends and spent quality time with old ones. I
        trained and raced in my first half Iron Man and my third marathon. I was
        able to ski a ton. I launched features for Google and YouTube reaching
        millions of students around the world. And in the defining moment of my
        year (and possibly decade), I choose to quit my job at Google and work
        on OnePager full time.
      </P>
      <P>
        I’m writing this mostly in self reflection, but if you choose to go
        further I hope you enjoy! (Note, there is a heavy emphasis on OnePager
        as this post goes on.)
      </P>
      <Heading2>Great People</Heading2>
      <P>
        2021 was first and foremost a year about spending time with the people I
        love. I started the year living in Lake Tahoe with my girlfriend Tori
        and a great group of 10 other friends. Afterwards, I spent time living
        with my parents and brother in Virginia. In April, I moved back into NYC
        with my longtime friend AJ and got to spend more time with dozens of
        friends in the city. I trained and ran a triathlon with 3 of my closest
        friends AJ, Chris, and Johnny. Then I left Google to work full time on
        OnePager with Nic and Adam, more great friends. Through all of these
        experiences I’ve gotten to spend time with my favorite people and meet
        new ones along the way—notably all of the great new founders I’ve met
        while building OnePager.
      </P>
      <P>
        I also got to experience my first batch of friends' weddings: congrats
        to the year of the Griffins, the Hardejs, and the O’Connors! All
        incredible experiences, awesome groups of people, and I’m excited for
        more in 2022.
      </P>
      <P>
        Three more highlights (out of many more I won't list): #1 a week with
        Tori living on Alistair and George’s houseboat in Sausalito. #2 a four
        day camping trip I took with 5 friends in Zion national park. #3
        Memorial day weekend, where I brought together my family and friends in
        Massachusetts for a great weekend... in the pouring rain.
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/tori_jackson_hole.png"
        alt="Tori and I at the Griffins wedding in Jackson Hole, Wyoming"
        subtitle="Tori and I at the Griffins wedding in Jackson Hole, Wyoming."
        h={3024}
        w={4032}
      />
      <PostImage
        src="/blogs/2021-year-in-review/tahoe_people.png"
        alt="Friends from Tahoe"
        subtitle="The main characters from our 2 month stay in Lake Tahoe."
        h={768}
        w={768}
      />
      <PostImage
        src="/blogs/2021-year-in-review/zion_mountains.jpg"
        alt="Zion Mountains"
        subtitle="Kolob Canyon in Zion, shot during our 4 day camping trip across the park."
        h={3024}
        w={4032}
      />

      <Heading2>Big Mountains and Big Races</Heading2>
      <P>
        I started the year in Lake Tahoe trying to ski as much as possible. Half
        of our group of 12 was operating on East Coast hours, so we’d start
        working before sunrise and sneak in runs at the end of the day. I’d
        never skied more than a few days in a year before, but over the course
        of those 2 months I got on the mountain 36 separate days. I loved it,
        but eventually Tori and I missed NYC and it was time to reenter the real
        world.
      </P>
      <P>
        After Tahoe, I spent a large chunk of my time training for my first half
        Iron Man triathlon - a 1.2 mile swim, 56 mile bike, and 13.1 mile run.
        Luckily I was a solid runner already, and I really enjoyed learning to
        swim long distance. Biking I’m still fairly indifferent about. Training
        for March, April, and May amounted to roughly 9 activities per week,
        usually swimming paired with running or biking. I was also lucky to be
        training for the race with three good friends (as I mentioned above),
        one of which was my roommate AJ.
      </P>
      <P>
        The triathlon was on June 6th in Roanoke, Virginia, and happened to land
        on the 77th anniversary of D-Day and allied invasion of Normandy. Before
        the race, the congressman for the district gave a speech about the
        significance of our event happening in Roanoke on this day. With the sun
        rising over a reservoir in the Blue Ridge Mountains behind him, he
        explained that the “Bedford Boys,” kids from nearby Bedford county, were
        the tip of the spear on D-Day and suffered more causalities per capita
        than any other unit from the US. We could enjoy this race because of
        their sacrifice. Needless to say I was fired up to jump in the water and
        get started, it was a great moment that stuck with me.
      </P>
      <P>
        The swim went well, and I did the bike faster than I expected.
        Unfortunately, the run was a disaster. After a cool morning it was 90
        degrees by the time I started runing, and I’d overexerted myself on the
        bike. By mile 3 I started cramping in my legs. By mile 7 crippling
        cramps forced me to run-walk the last 6 miles. I ran through the finish
        strong, but ask me in person for the hilarious finish line details 🤖.
      </P>
      <P>
        A month after recovering from the triathlon, Aj and I decided to run our
        third (and possibly final) New York City Marathon together. We’d run in
        2018 and 2019, but 2020 had been canceled due to COVID. The 2021 race
        was set to be the 50th NYC marathon, and it seemed like too good an
        opportunity to miss out on. So, we trained, ran, and fundraised for the
        Leukemia & Lymphoma Society (LLS) under our team name{' '}
        <A href="https://groovingagainstleukemia.com">
          Grooving Against Leukemia
        </A>{' '}
        one more time.
      </P>
      <P>
        Over the course of the summer and fall we raised $26,011 for LLS, and on
        race day we both smashed our marathon personal records (PRs). Compared
        to previous years, I think we’d started training earlier and been much
        more more deliberate about our nutrition. I’d finished both 2018 and
        2019 races in a cramping run-walk (just like the 2021 Iron Man), but
        this this time I figured it out, crossed the finish line in a sprint,
        and ran a PR of 3:52, 15 minutes faster than my next best in 2019. I
        consumed a disgusting amount of salt during the run and my headphones
        died about 2 hours in, but it flew by and I honestly loved every minute!
      </P>
      <P>
        Running these races has been an incredible experience for me physically
        and mentally, but above all it's been a great way for me to give back to
        LLS. Over the course of three we’ve raised $96,458!
      </P>
      <P>
        For now we’ve decided this is the end of{' '}
        <A href="https://groovingagainstleukemia.com">GAL</A>... for now.
      </P>

      <PostImage
        src="/blogs/2021-year-in-review/post_iron_man.png"
        alt="Johnny and I after the iron man."
        subtitle="Johnny, Aj, Chris and I celebrating with Tori a few hours after the Iron Man near Roanoke, VA. The race took between 5 and 9 hours... depending on who you ask."
        h={3024}
        w={4032}
      />
      <PostImage
        src="/blogs/2021-year-in-review/nyc_marathon.jpg"
        alt="Me running the NYC marathon."
        subtitle="Running up 1st Ave roughly 16 miles into the NYC marathon!"
        h={4032}
        w={3024}
      />

      <Heading2>Building At Google</Heading2>
      <P>
        Through living in Tahoe and eventually moving back to New York City, I
        was happily working for Google. In mid 2020, I’d joined an exciting new
        team that formed during the pandemic to help the surge of
        remote-learning students relying on Google Search. There hadn’t been any
        product focus on academic learning queries in the past, so our team
        built new search features to improve that experience (in contrast, tons
        of unique search features have been built for movies, music, and TV
        queries). In the fall of 2020, my team launched{' '}
        <A href="https://www.google.com/search?q=3x%5E2+-+2x+%2B1+%3D+0&rlz=1C5CHFA_enUS707US716&oq=3x%5E2+-+2x+%2B1+%3D+0&aqs=chrome..69i57.12630j0j7&sourceid=chrome&ie=UTF-8">
          the math solver
        </A>
        , a set of search features to recognize, solve, and present math
        problems directly on the search results page. On top of being a fun
        project to point to, it was a big success with students! So in 2021, I
        was tasked with growing the scope of our team from Search into YouTube.
      </P>
      <P>
        My goal was to build features that improve the experience of students
        using YouTube as a learning tool. So I built a set features to help
        students find relevant learning content and focus while watching it.
        Removing distractions proved to be a difficult task—YT is optimized to
        increase user watch time, which at times directly opposed recommending
        high quality educational content. Despite that difficulty, I designed,
        built, and launched a set of these features, the first from our team
        within the YouTube product.
      </P>
      <P>
        As an aside, in one of my experiments I crashed the YouTube "what to
        watch next" recommendation system. Apologies to the 0.5% of US-based
        users that found their recommended videos a bit odd for roughly 6 hours
        :).
      </P>
      <P>
        The positives: I got to spearhead a new team within YouTube and launch
        features affecting millions of users, mostly students. According our
        launch metrics, features I had developed increased Academic Learning
        Watch Time by tens of thousands of hours weekly! A drop in the bucket
        for the billions of hours watched on YouTube, but a step in the right
        direction.
      </P>
      <P>
        The cons: bureaucracy took its toll. Search and YouTube are massively
        scrutinized entities, and making any changes takes time. There’s
        planning, designs, design approvals, building, testing, code reviews,
        experiments, experimental review, experiment launch, experiment
        analysis, and a series of other legal, product, and engineering reviews
        before any new change can permanently join the product in a certain
        language and geographic locale. It’s rightfully complex, but I found it
        difficult to be motivated after running into wall after wall. I couldn’t
        submit new code after 5:00pm PST. My time was increasingly spent
        navigating organizational complexity. I wanted to build, and it was
        still so early in my career that I knew I could grow faster than I was.
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
        We came into the year with a straightforward plan: upgrade OnePager from
        a prototype to a built out SaaS product. Allow for users to create
        multiple OnePagers. Allow for multiple users to join an organization and
        together manage those OnePagers. Allow for multiple users to
        concurrently edit a OnePager. Add premium analytics, investor tools,
        additional fundraising data visualizations, and exports to use useful
        data off our platform. Revamp our marketing. Integrate with Stripe to
        print money. Do all of this while consistently attracting new founders,
        new investors, and keeping our current users happy.
      </P>
      <P>
        So our developer at the time, Chris Yun, and I got to work. We ended up
        launching "OnePager 2.0" on April 1st, a deadline we forced on ourselves
        for an optimal{' '}
        <A href="https://www.producthunt.com/posts/onepager-2-0">
          Product Hunt launch
        </A>
        . After a rocky 9:00pm-2:00am due to issues pushing the large backlog of
        changes to prod, the rest of the launch went great, and we got our
        biggest user bump yet. OnePager was now a fully built out product, not a
        prototype.
      </P>
      <P>
        Throughout the rest of the spring/early summer we continued to refine
        the product and see steady user growth, roughly 100 companies weekly. We
        also became increasingly involved with the AWS Startups team, who were
        happy to partner with us and get access to our breadth of early stage
        startups. Thus, the first promising model of OnePager presented itself.
      </P>
      <P>
        We would attract companies to OnePager as a fundraising presentation
        tool, and based on their company data recommend them the perfect
        software for their business. OnePager was visibly a{' '}
        <A href="https://linktr.ee/">LinkTree</A>/
        <A href="https://www.docsend.com/">DocSend</A> for startups, but the
        value was in the data. We’d monetize that data by helping founders build
        their companies with better tools and collect affiliate fees for
        promoting partner products. By early summer, we were sending so many
        companies to AWS that we formed a formal partnership. A few more
        partnerships like that would make us a serious business, and we were in
        the midst of both a startup boom and SaaS spending arms race (software
        discovery was an +80B market, and I assume is larger now).
      </P>
      <P>
        With this model taking shape, I was completely torn. I was growing
        OnePager with my part time work and leadership, but I knew I had more to
        offer. The business had a fighting chance and it needed my full
        attention. I loved my work at Google, but I was bogged down in
        bureaucracy. Google was comfortable, and OnePager was the unknown.
      </P>
      <P>
        I spent weeks deliberating but finally decided OnePager was undoubtably
        the better path forward. I owe it mostly to my good friend and
        co-founder Adam for ruthlessly recruiting me, and I’m also thankful for
        all the advice I got from friends, family, and mentors: my parents,
        Tori, Nic, Rich Napolitano, Mac Cordrey, Dawit Heck, Luke Armour, Anna
        Doherty, Brandon Arvanaghi, Ed Parizeau, Michael Greenberg, Suhail
        Doshi, Tom Cecil, Safwan Chowdrey, and Jon Novatnack to name a few.
      </P>
      <P>
        This felt like an insane decision (people kill to work at Google!), so
        during the process I wrote our my reasoning in an essay to make sure I
        knew what I was getting into. I went through the pros and cons of both
        paths, my thoughts after various conversations, and my long term goals.
        The essay ended with this sentence:
      </P>
      <P>
        “Doing this will be difficult and possibly fail, but it will move me
        closer to my ideal future as a proven builder and decision maker.”
      </P>
      <P>And with that I was all in!</P>
      <PostImage
        src="/blogs/2021-year-in-review/first_day_office.png"
        alt="Adam and I in the office."
        subtitle="Adam and I in our OnePager WeWork office! (We were able to move in a day early and Nic couldn't make it, so this pic is really day -1)"
        h={3088}
        w={2316}
      />
      <Heading2>Being a Founder</Heading2>
      <P>
        By mid summer I was a full time co-founder and CTO of OnePager, and the
        first ~8 weeks were a heads down blur. We moved into a WeWork and got to
        work. Nic and I had built out a backlog of critical bugs, styling
        changes, and long awaited features, so the "what to do" felt
        straightforward. Long hours building, testing, and launching. We
        continued to get great feedback from founders and user growth showed
        signs of acceleration. Things were generally looking up.
      </P>
      <P>
        At this time we also began exploring product recommendations further. Up
        to this point, we’d focused on building out OnePager’s core presentation
        and sharing features, and we'd manually handled product recommendations
        via email. We were able to get the Amazon partnership by simply offering
        all users free AWS credits, but now we needed to recommend all sorts of
        software to various business types. So, I built out our V1 of automated
        product recommendations over the course of a week or so. From a
        technical perspective it worked well off the bat, but didn't garner the
        user engagement we’d hoped. We kept building and pushed forward.
      </P>
      <P>
        Around this point I went to my first meetup with the{' '}
        <A href="https://nycfounder.com/">NYC founders group</A> thanks to{' '}
        <A href="https://twitter.com/FarzaTV/status/1422726583794782211?s=20">
          a tweet
        </A>{' '}
        from <A href="https://twitter.com/FarzaTV">@FarzaTV</A>. Since DMing him
        for an invite, I've gone every other Wednesday. It's been the perfect
        opportunity to talk about the newest OnePager features, set goals (+
        keep them), and talk with other founders in the grind. Most importantly
        I've met some truly ambitious and talented people: David (
        <A href="https://covalent.live/">Covalent</A>), Farza (
        <A href="https://buildspace.so/">buildspace</A>), Lenny (
        <A href="https://milkvideo.com/">Milk Video</A>), Fed (
        <A href="https://gummysearch.com/">GummySearch</A>), Los (
        <A href="https://apps.apple.com/us/app/tunestalgia-music-memories/id1561719773">
          Tunestalgia
        </A>
        ) , and Houck (<A href="https://www.launchhouse.com/">Launch House</A>)
        to name a few. Right away the group was impressed OnePager's initial
        traction, and some had even used us for fundraising! But, others
        suggested OnePager needed to focus more on growth, and they turned out
        to be right.
      </P>
      <P>
        In late September we had our first major course correction. Nic, Adam,
        and I attended a Product Hunt Event in SoHo and listened to guest
        speakers Shahed Kahn (founder of{' '}
        <A href="https://www.loom.com/">Loom</A>) and Josh Buckley (CEO of{' '}
        <A href="https://hyper.com/">Hyper</A>). Afterwards, we managed to talk
        with Shahed and Josh for roughly an hour, and they gave us a rude
        awakening. We were a promising team with a solid product, but it meant
        nothing if we didn’t show strong growth. Josh said if we weren’t growing
        10% week over week or saw a path to that kind of growth, our business
        wasn’t venture scalable. That was his benchmark. He liked us, but
        emphasized we needed to continue down the “idea maze”. He didn’t think
        OnePager in its current state would work.
      </P>
      <P>
        From this point on, life at OnePager has felt much more startup-y. Happy
        users and a steady stream of companies is fine, but these aren’t
        necessarily metrics of success. We needed to optimize for users or
        revenue and show real growth. The app was in great shape, but it didn’t
        matter. We switched into full business experimentation mode. Build,
        launch, measure, decide next steps. (In hindsight, we may have
        overcorrected after this encounter, but I think it was a positive
        overall for us to stop working "heads down")
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/nyc_founders.jpeg"
        alt="NYC founders meetup."
        subtitle="After my first NYC founders meetup, Farza tweeted this pic of me presenting OnePager for the first time to the group."
        h={3024}
        w={4032}
      />
      <PostImage
        src="/blogs/2021-year-in-review/product_hunt.png"
        alt="Nic, Adam, and I. The OnePager team."
        subtitle="Adam, Nic, and I at a Product Hunt event in New York City. After this photo, we talked with Josh and Shahed about OnePager."
        h={1363}
        w={2048}
      />
      <Heading2>Going Down the Idea Maze</Heading2>
      <P>
        First we explored product recommendations further: as a stand alone
        tool, as an emphasized feature within OnePager, and in various delivery
        methods. With several weeks of experimenting and user interviews,
        product recommendations weren’t something users seemed particularly
        interested in. It had worked for AWS and was a great business model, but
        it didn’t get founders excited to join or invite their friends to drive
        growth. We left these features in the app as an added bonus and focused
        elsewhere.
      </P>
      <P>
        Then we explored OnePager as a recruiting tool, an idea that came to us
        after we found user retention alarmingly low. Users would sign up for
        OnePager, fundraise, and suddenly leave. This is the nature of
        fundraising (you don’t do it forever), but it was a major problem. So,
        we optimized for recruiting. Fundraise with us, and then with your newly
        raised capital we can help you hire! I built a ton of recruiting
        features: new creation flows, data models, and visualizations. I created
        an automated newsletter of OnePager companies with open roles. I even
        created a referral bonus system baked into recruiting OnePagers. If you
        reviewed a role that seemed relevant to a friend, share it with them. If
        they get the job, you get the referral bonus! This feature set came
        built with tracking and a dashboard for users to review their active
        referrals.
      </P>
      <P>
        This model showed signs of life, but was difficult to grow. Our{' '}
        <A href="https://openscout.vc">Open Scout</A> network embraced this side
        of OnePager with open arms and created hundreds of referrals generating
        thousands of job post interactions. Unfortunately though, we found this
        model extremely difficult to execute. We needed to keep three groups of
        users happy: companies hiring, people referring their friends, and job
        applicants. We also found recruiting to be a deeply fragmented and
        difficult industry to break into: you needed to show hundreds of people
        a job application to have only a few actually apply. Without real
        passion for this side of OnePager and having only committed a few weeks,
        we decided to move on. We left the recruiting features in OnePager, took
        a positive bump to our user retention, and focused our efforts back into
        the core fundraising product.
      </P>
      <P>
        Fundraising is where we always got the best feedback. Founders loved the
        simplicity, visualization of data, and analytics of the tool. Investors
        loved getting our deal flow. We focused our efforts here.
      </P>
      <P>
        This led us to our model today—we get as many companies as we can to
        sign up for OnePager, we show them off to investors, and we raise{' '}
        <A href="https://learn.angellist.com/deal-terms/spv">SPVs</A> for the
        ones showing signs of success. This model is a win for both founders
        (they get a great tool and exposure) and investors (they get free deal
        flow). The SPVs also add a lot of value for many non-apex investors:
        they get access to hot deals and a simple way to directly invest. On a
        more granular level, the business model works like this:
      </P>

      <ul className="mt-6 list-disc ml-6 orange-list">
        <li>
          Businesses sign up on OnePager for fundraising exposure. (We make some
          revenue charging for premium analytics)
        </li>
        <li className="mt-2">
          We pick the best of these companies, ones that appear ready to raise
          and have opted in.
        </li>
        <li className="mt-2">
          We show those companies to our 1,000+ VC and Angel investor
          subscribers via newsletter.
        </li>
        <li className="mt-2">
          We track investor engagment, and find which companies have the highest
          interest from notable investors.
        </li>
        <li className="mt-2">
          We raise SPVs for those companies, earning revenue from setting up the
          deal and carried interest when the investment closes.
        </li>
      </ul>
      <P>
        It’s unclear if this is the right path for our business, but we’re
        excited the way things have gone so far and where “the idea maze” is
        taking us. It’s been a stressful, but rewarding experience. I’ve owned
        our product end to end for nearly 2 years, spent 7 months as a full time
        founder, and led massive changes, real growth, and notable revenue.
        Overall, I do think we’ve made a small dent in venture capital, and more
        and more people are starting to recognize the OnePager brand.
      </P>
      <P>
        As we approach 2022, we're at a crossroads. We haven't put serious
        effort into raising money, mostly because we're not confident what
        business model we'd raise on. At the same time, we've built something
        that thousands have used and the majority have loved. We have a captive
        audience of investors, and a steady stream of founder signups. We know
        we've built something useful, and will decide in the coming weeks to
        stay the course or approach existing ecosystems that could benefit more
        from our product and our team. This will be a big year for us.
      </P>
      <P>
        I firmly believe that there should be more opportunities for people to
        start companies. Helping founders fundraise does just that, and I’m
        proud of what we’ve done so far!
      </P>
      <PostImage
        src="/blogs/2021-year-in-review/onepager_boys.png"
        alt="Nic, Adam, and I. The OnePager team."
        subtitle="Nic, Adam, and I at a startup event in New York City hosted by Brex. The OnePager team never looked so good!"
        h={3024}
        w={4032}
      />
      <Heading2>Conclusion</Heading2>
      <P>
        And that brings us to 2022! In the final days of 2021 I got COVID, so
        I’m optimistic about my health and new found immunity in the new year.
        If you've made it this far, I’m hoping for a healthy, happy new year for
        you as well!
      </P>
      <P>- Jack</P>
      <P>
        <A href={`${APP_URL}/blog/${BEST_READS_SLUG}`} noBlank>
          Related: Best reads of 2021.
        </A>
      </P>
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
