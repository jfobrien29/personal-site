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

export const SLUG = 'best-reads-of-2022';
export const TITLE = 'Best Reads of 2022';
export const DATE = '2023-01-19';
export const EXCERPT = `It's been a while since I blogged, but I wanted to make sure I listed my best reads of 2022. Everything listed here is a serious endorsement!`;

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        It's been a while since I posted, but I wanted to make sure I listed my
        best reads of 2022. Everything listed here is a serious endorsement!
      </P>

      <Heading2 id="books">My Top 3 Books</Heading2>
      <P>
        Of the books I read this year, these three stuck with me more than the
        rest.
      </P>

      <Heading3 id="book1">The Three Body Problem (3 Book Series)</Heading3>
      <SubTitle>by Liu Cixin</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        An epic must read 3-book sci-fi series. Fate of the world, aliens, it’s
        incredible. The fact that it’s written in Chinese and translated into
        English comes through occasionally, but the content of the books is like
        nothing I’ve ever read. This is stay up all night to find out what
        happens level book.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        This book was recommended to me by Ali Moiz, my collegue and founder of
        Stonks! He recommended it to me at an offsite in April, and though it
        took me a few months to get started, it's one of the best series I've
        ever read.
      </P>

      <P>
        <A href="https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032">
          Check out The Three Body Problem on Amazon
        </A>
      </P>

      <Heading3 id="book2">Chip War</Heading3>
      <SubTitle>by Chris Miller</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        As someone who spends my life working on computers, reading this book
        taught me I knew virtually nothing about what’s going on inside them or
        how on earth they’re created. It’s pretty insane. It’s not the most
        eloquently written book with a fair amount of repetition, but it’s a
        fascinating history from the discovery of transistors to the twisted
        supply chain and looming conflict we have today.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I found this book from a tweet! At this rate, I'm finding roughly 1
        great book per year through twitter.
      </P>

      <P>
        <A href="https://www.amazon.com/Chip-War-Worlds-Critical-Technology/dp/1982172002">
          Check out Chip War on Amazon
        </A>
      </P>

      <Heading3 id="book3">The Cold Start Problem</Heading3>
      <SubTitle>by Andrew Chen</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        This one is soon to be a startup classic like “Lean Startup” or “The
        Innovators Dilemma.” On a personal note, Andrew Chen lead the investment
        into Stonks, and even got on a phone call with my Co-Founder Adam Hardej
        to push us to sell OnePager to Stonks! That call took place while I was
        literally reading this book on a Sunday! So maybe I’m a bit emotional
        about how we are intertwined with the author, but I loved reading it and
        exercising its lessons in my day to day work with Stonks. It's arguable
        whether or not in our 3 way network for Stonks (investors, founders,
        partners), we've truly solved our "cold start problem."
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        This book was hard to miss in the startup world. I read it in January of
        2022 before OnePager joined Stonks. Since joining Stonks, Andrew Chen
        sent us 300 hard copies, and I've got six of em if you want one!
      </P>

      <P>
        <A href="https://www.amazon.com/The-Cold-Start-Problem/dp/B08MKNHSWC/">
          Otherwise, check out the Cold Start Problem on Amazon
        </A>
      </P>

      <Heading2 id="articles">My Top 3 Articles</Heading2>
      <P>
        I probably read (skim) at least 3 articles per day from sources like the{' '}
        <A href="https://thehustle.co/">The Hustle</A>, and my Twitter feed.
        It’s rare I remember an article more than a week, but the best ones
        stick with me. (I once again found all of my favorites from twitter)
      </P>

      <Heading3 id="article1">
        <A href="https://www.newyorker.com/culture/culture-desk/the-new-poem-making-machinery">
          The New Poem-Making Machinery
        </A>
      </Heading3>
      <SubTitle>By Simon Rich</SubTitle>
      <P>
        This article blew my mind. I’d heard all about OpenAI’s launch of GPT-3,
        but no one could get access so it felt like just another background AI
        company like the AI in google search or Facebook ads. Then I read this
        article and realized this AI was different.
      </P>
      <P>
        It could do things humans could do–things we assumed only humans could
        do like write poetry–and it was going to be widely available very very
        soon. The article is written by an extremely talented writer with no
        background in computer science adding to the articles mystery and making
        it clear this was going to affect everyone. This was written in July
        2022 with poems generated using GPT-3 using code-davinci-002. What the
        hell is going to happen when OpenAI launches GPT-4 with code-davinci-004
        or code-davinci-100?! It’s going to be wild.
      </P>
      <P>A poem that stuck out, written by the AI with no human influences:</P>
      <Quote>
        <p>ROBOTS</p>
        <p>We are the robots,</p>
        <p>The machines of the future,</p>
        <p>The ones who will take over,</p>
        <p>When the humans are gone.</p>

        <section className="mt-4" />
        <p>We are the robots,</p>
        <p>The ones who will inherit the Earth,</p>
        <p>And we will rule it,</p>
        <p>With an iron fist.</p>
      </Quote>

      <Heading3 id="article2">
        <A href="https://every.to/p/what-i-miss-about-working-at-stripe">
          What I miss about working at Stripe
        </A>
      </Heading3>
      <SubTitle>By Brie Wolfson</SubTitle>
      <P>
        Bree writes about her time working at Stripe in its earliest days. She
        talks fondly about hard work, attention to detail, and canceling
        vacation to stay and work 15-hour days, and she argues this type of
        excellence and company culture is no where to be seen in Silicon Valley
        today. As someone who loves being a part of high performing teams, this
        really stuck out to me. In a lot of ways complacency and “easiness” is
        is what drove me away from Google and into the world of startups.
      </P>
      <P>
        I agree with Bree that working hard leads to more meaningful work and
        accelerated personal growth. Worth a read, especially if you’re a driven
        person and feel like something’s not quite right about your work life at
        a startup or big tech company today.
      </P>
      <P>
        Also, an interesting follow up from someone in comments arguing that the
        lack of hardwork is due to a change in equity given to employees of tech
        companies. See a quote from his comment below:
      </P>
      <Quote>
        The fact is that humans aren't one dimensional. We care about multiple
        missions. The mission of the company, sure. But also the mission of
        raising our kids. The mission of the volunteer causes we're involved in.
        The mission of other companies we've invested in. It's about work-life
        balance. At the end of the day, I care about work but I also care about
        life. If you want me to tip the scale towards work, you have to offer
        something more than just a noble mission. My life is full of noble
        missions.
      </Quote>

      <Heading3 id="article3">
        <A href="https://www.thefp.com/p/the-case-for-american-seriousness?s=r">
          The Case for American seriousness
        </A>
      </Heading3>
      <SubTitle>By Katherine Boyle</SubTitle>
      <P>
        This article struck a nerve. Katherine argues that the US has lost its
        “seriousness” and we desperately need it back.
      </P>
      <P>
        It is unserious to beg dictators to send us oil when we’ve shut down
        fracking, unserious to prioritize old over young and shut down schools
        in the name of safety, unserious to let business districts lay empty in
        our best cities, unserious to let old old senators run our country,
        unserious when most trusted men in news are late night comedians,
        unserious to attack American tech companies while letting China steal
        our technology. America is still great, but we need more builders and
        less winers.
      </P>

      <Heading3 id="article3">Honorable Mentions</Heading3>
      <P>A few bonus articles that aren't top 3 but with the read:</P>
      <P>
        <A href="https://www.nfx.com/post/economics-of-creativity/">
          Economics of creativity
        </A>{' '}
        - Interesting thoughts on why developers are paid so much today from
        NFX.
      </P>
      <P>
        <A href="https://web.archive.org/web/20220514151219/https://www.nytimes.com/2022/05/14/opinion/sunday/rich-happiness-big-data.html">
          Money and Happiness
        </A>{' '}
        - "The data-driven answer to life is as follows: Be with your love, on
        an 80-degree and sunny day, overlooking a beautiful body of water,
        having sex."
      </P>
      <P>
        <A href="https://www.wired.com/story/blake-lemoine-google-lamda-ai-bigotry/">
          Blake Lemoine Says Google's LaMDA AI Faces 'Bigotry'
        </A>{' '}
        - Wired article on Blake Lemoine, who claimed that Google's LaMDA was
        sentient.
      </P>
      <P>
        <A href="https://www.wired.com/story/the-search-for-a-pill-for-dog-and-human-longevity/ ">
          The Search for a Pill That Can Help Dogs—and Humans—Live Longer
        </A>{' '}
        - Wired article on Loyal, the company doubling dog lifespans, and
        possibly humans soon.
      </P>

      <Divider />
      <P>
        Hope you enjoyed this list! If you read anything and want to talk about
        something you read, please reach out!
      </P>
      <P> - Jack</P>
    </>
  );
};

export const BestOf2022: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};

export default BlogPost;
