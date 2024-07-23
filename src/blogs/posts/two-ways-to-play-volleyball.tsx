import React from 'react';
import { IBlogPost } from '../all';
import { Li, Ol, OLi, P, Ul } from '../common';

export const SLUG = 'two-ways-to-play-volleyball';
export const TITLE = 'Two Ways to Play Volleyball';
export const DATE = '2024-07-21';
export const EXCERPT = `You're either just keeping the ball in the air, or you're playing competitive volleyball.`;

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>There are two ways to play volleyball.</P>

      <Ul>
        <Li>You’re either trying to keep the ball in the air</Li>
        <Li>Or you’re playing competitive volleyball</Li>
      </Ul>

      <P>
        I think this distinction exists in many sports (lacrosse, baseball
        etc.), but it’s painfully obvious in volleyball. Are points scored on
        great plays or mistakes? Is your team getting a hard spike after a clean
        set on most returns? Is your entire team playing{' '}
        <span className="italic">hard</span> to win? The vast majority of times
        I play volleyball we’re just trying to keep the ball in the air (still a
        great time), and a hand full of times I’ve been a part of truly
        competitive games.
      </P>
      <P>
        I think about this distinction in other team contexts all the time. Are
        we playing competitively, or are we just trying to keep the ball in the
        air?
      </P>
      <P>
        One example is when I worked on an “unnamed” software engineering team.
        Individually we were all talented software engineers, but we were
        undoubtably just keeping the ball in the air. We constantly battled
        bugs, we couldn’t properly track metrics due to logging inconsistencies,
        and it was hard to make forward progress without taking a few steps
        back. Overal, our effort was defined by our mistakes over our
        successes–our fumbled balls over our collaborative spikes.
      </P>
      <P>
        A combination of strict eningeering guidelines, thorough testing
        procedures, and firings made us a competitive team, but it took time.
        Time that we didn’t necessarily have as as a company.
      </P>
      <P>
        To be a competitive software company, your engineering team must be
        playing competitive volleyball. This might seem obvious, but the
        metaphor crystalized it for me. The team should be defined by building
        extrodinary experiences and launching new functionality at high
        velocity. Mistakes will happen, but that must be outside the norm.
      </P>
      <P>
        So how do you build a competitive volleyball/software team? Skill,
        coordination, and clear direction.
      </P>
      <Ol>
        <OLi>
          Every member needs to be extremely techincally proficient. You must be
          able to return a serve–or have real experience in your teams tech
          stack.
        </OLi>

        <OLi>
          Your skilled team must work together. Individual skill isn’t enough.
          They need to communicate often, trust eachother, and execute together.
        </OLi>

        <OLi>
          Your skilled, coordinated team needs to commit to the same game plan.
          You can only win the qames (or launch the right product) if you’re
          headed in the right direction.
        </OLi>
      </Ol>
      <P>
        Boiled down even further, you need great players and great leadership.
        Without both, you’ll probably find yourself keeping the ball in the air
        until you mistake yourself into oblivion. If you’re doing anything with
        a team where the stakes are higher than a lighthearted volleyball game
        on pier 17, play to win. Otherwise improve the team fast or accept
        mediocrity.
      </P>
      <div className="mt-12">
        <P>
          <span className="italic">
            (Disclaimer, I’m not particularly skilled at volleyball. S/o Jay
            Goettman as a collegiate vollyballer in my midst. I love playing it
            in all forms.)
          </span>
        </P>
      </div>
    </>
  );
};

export const TwoWaysToPlayVolleyball: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};

export default BlogPost;
