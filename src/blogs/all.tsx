import { ReactNode } from 'react';
import {
  ElevateFounderDiversity,
  HideYourPrompt,
  HowToWriteSoftware,
  IntroducingLowTechAI,
  PromptAThonV0,
  WhatAreLLMs,
} from './external';
import { YearInReview2021 } from './posts/year-in-review-2021';
import { BestOf2021 } from './posts/best-reads-of-2021';
import { BestOf2022 } from './posts/best-reads-of-2022';
import { TwoWaysToPlayVolleyball } from './posts/two-ways-to-play-volleyball';
import { TradeoffsAndTaste } from './posts/tradeoffs-and-taste';
import { TenShotsAtBuildingAI } from './posts/ten-shots-at-building-ai';
// import { LeavingGoogleForOnePager } from './posts/leaving-google-for-onepager';

export interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  post?: ReactNode;
  isExternal?: boolean;
}

export const LANDING_BLOG_POSTS: IBlogPost[] = [
  TenShotsAtBuildingAI,
  TradeoffsAndTaste,
  TwoWaysToPlayVolleyball,
  IntroducingLowTechAI,
  HowToWriteSoftware,
];

export const ALL_BLOG_POSTS: IBlogPost[] = [
  TenShotsAtBuildingAI,
  TradeoffsAndTaste,
  TwoWaysToPlayVolleyball,
  PromptAThonV0,
  WhatAreLLMs,
  HideYourPrompt,
  IntroducingLowTechAI,
  BestOf2022,
  YearInReview2021,
  BestOf2021,
  HowToWriteSoftware,
  ElevateFounderDiversity,
];

export const HOSTED_BLOG_POSTS: IBlogPost[] = [
  TenShotsAtBuildingAI,
  TradeoffsAndTaste,
  TwoWaysToPlayVolleyball,
  BestOf2022,
  YearInReview2021,
  BestOf2021,
];

export const ALL_BLOGS_MAP = new Map<string, IBlogPost>(
  ALL_BLOG_POSTS.reduce((postsMap, post) => {
    postsMap.set(post.slug, post);
    return postsMap;
  }, new Map<string, IBlogPost>()),
);

export const BLOG_SLUGS = ALL_BLOG_POSTS.map((post) => post.slug);
export const HOSTED_BLOG_SLUGS = HOSTED_BLOG_POSTS.map((post) => post.slug);
