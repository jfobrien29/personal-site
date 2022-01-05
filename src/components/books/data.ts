import { ReactNode } from 'react';

export enum Category {
  MUST_READ,
  ENTREPRENEUR_STORY,
  SOFTWARE,
  STARTUP,
  KNOWLEDGE_STORIES,
  FICTION,
  OTHER,
}

export interface IBook {
  slug: string;
  title: string;
  author: string;
  links?: {
    book?: string;
    author?: string;
  };
  imageUrl?: string;
  category: Category;
  review?: string | ReactNode;
}

// Must Reads

export const LIFESPAN = {
  slug: 'lifespan',
  title: 'Lifespan: Why We Age - and Why We Don’t Have To',
  author: 'Dr. David Sinclair',
  category: Category.MUST_READ,
};

export const WIRES_OF_WAR = {
  slug: 'wires-of-war',
  title: 'Wires of War: Technology and the Global Struggle for Power and Order',
  author: 'Jacob Helberg',
  category: Category.MUST_READ,
};

export const CODE_BREAKER = {
  slug: 'code-breaker',
  title:
    'Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race',
  author: 'Walter Isaacson',
  category: Category.MUST_READ,
};

export const CHASING_THE_SCREAM = {
  slug: 'chasing-the-scream',
  title: 'Chasing the Scream: The First and Last Days of the War on Drugs',
  author: 'Johann Hari',
  category: Category.MUST_READ,
};

export const HOW_TO_AVOID_A_CLIMATE_DISASTER = {
  slug: 'how-to-avoid-a-climate-disaster',
  title: `How to Avoid a Climate Disaster: Solutions We Have and the Breakthroughs We’ll Need`,
  author: 'Bill Gates',
  category: Category.MUST_READ,
};

// Entrepreneur stories

export const LIFT_OFF = {
  slug: 'lift-off',
  title: `Lift Off: Elon Musk and the Desperate Early Days That Launched SpaceX`,
  author: 'Eric Berger',
  category: Category.ENTREPRENEUR_STORY,
};

export const THE_NEW_NEW_THING = {
  slug: 'the-new-new-thing',
  title: `The New New Thing: A Silicon Valley Story`,
  author: 'Michael Lewis',
  category: Category.ENTREPRENEUR_STORY,
};

export const SHOE_DOG = {
  slug: 'shoe-dog',
  title: `Shoe Dog: A Memoir by the Creator of Nike`,
  author: 'Phil Knight',
  category: Category.ENTREPRENEUR_STORY,
};

export const BAD_BLOOD = {
  slug: 'bad-blood',
  title: `Bad Blood: Secrets and Lies in a Silicon Valley Startup`,
  author: 'John Carreyrou',
  category: Category.ENTREPRENEUR_STORY,
};

// Software and Product

export const UNICORN_PROJECT = {
  slug: 'unicorn-project',
  title: `The Unicorn Project: A Novel about Digital Disruption, Redshirts, and Overthrowing the Ancient Powerful Order`,
  author: 'Gene Kim',
  category: Category.SOFTWARE,
};
export const TECHINICALLY_WRONG = {
  slug: 'techinically-wrong',
  title: `Techinically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech`,
  author: 'Sara Wachter-Boettcher',
  category: Category.SOFTWARE,
};
export const CLEAN_CODE = {
  slug: 'clean-code',
  title: `Clean Code: A Handbook of Agile Software Craftsmanship`,
  author: 'Robert C. Martin',
  category: Category.SOFTWARE,
};
export const DESIGN_OF_EVERYDAY_THINGS = {
  slug: 'design-of-everyday-things',
  title: `Design of Everyday Things`,
  author: 'Donald A. Norman',
  category: Category.SOFTWARE,
};
export const HOOKED = {
  slug: 'hooked',
  title: `Hooked: How to Build Habit-Forming Products`,
  author: 'Nir Eyal',
  category: Category.SOFTWARE,
};

// Startup Books

export const ZERO_TO_ONE = {
  slug: 'zero-to-one',
  title: `Zero to One: Notes on Startups, or How to Build the Future`,
  author: 'Peter Thiel',
  category: Category.STARTUP,
};
export const LEAN_STARTUP = {
  slug: 'the-lean-startup',
  title: `The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses`,
  author: 'Eric Ries',
  category: Category.STARTUP,
};
export const ART_OF_THE_START = {
  slug: 'art-of-the-start',
  title: `The Art of the Start 2.0: The Time-Tested, Battle Hardened Guide for Anyone Starting Anything`,
  author: 'Guy Kawasaki',
  category: Category.STARTUP,
};
export const HARD_THING_ABOUT_HARD_THINGS = {
  slug: 'the-hard-thing-about-hard-things',
  title: `The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers`,
  author: 'Ben Horowitz',
  category: Category.STARTUP,
};

// Other

export const EMPTY_PLANET = {
  slug: 'empty-planet',
  title: 'Empty Planet: The Shock of Global Population Decline',
  author: 'Darrell Bricker & John Ibbitson',
  category: Category.OTHER,
};

export const DEFINING_DECADE = {
  slug: 'defining-decade',
  title:
    'The Defining Decade: Why Your Twenties Matter—And How to Make the Most of Them Now',
  author: 'Meg Jay',
  category: Category.OTHER,
};

export const ALL_BOOKS: IBook[] = [
  LIFESPAN,
  WIRES_OF_WAR,
  CODE_BREAKER,
  CHASING_THE_SCREAM,
  HOW_TO_AVOID_A_CLIMATE_DISASTER,
  LIFT_OFF,
  THE_NEW_NEW_THING,
  SHOE_DOG,
  BAD_BLOOD,
  UNICORN_PROJECT,
  TECHINICALLY_WRONG,
  CLEAN_CODE,
  DESIGN_OF_EVERYDAY_THINGS,
  HOOKED,
  ZERO_TO_ONE,
  LEAN_STARTUP,
  ART_OF_THE_START,
  HARD_THING_ABOUT_HARD_THINGS,
  EMPTY_PLANET,
  DEFINING_DECADE,
];

export const ALL_BOOKS_MAP = new Map<string, IBook>(
  ALL_BOOKS.reduce((booksMap, book) => {
    booksMap.set(book.slug, book);
    return booksMap;
  }, new Map<string, IBook>()),
);

export const BOOK_SLUGS = ALL_BOOKS.map((book: IBook) => book.slug);
