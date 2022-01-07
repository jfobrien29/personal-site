// eslint-disable-next-line no-shadow
export enum CATEGORY {
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
  category: CATEGORY;
  review?: string;
  quickDescription: string;
}

// Must Reads

export const LIFESPAN = {
  slug: 'lifespan',
  title: 'Lifespan: Why We Age - and Why We Don’t Have To',
  author: 'Dr. David Sinclair',
  category: CATEGORY.MUST_READ,
  quickDescription:
    "Longevity and healthspan will meaningfully increase in our lifetimes. We've figured out the mechanism of aging, and every technical problem has a technical solution.",
};

export const WIRES_OF_WAR = {
  slug: 'wires-of-war',
  title: 'Wires of War: Technology and the Global Struggle for Power and Order',
  author: 'Jacob Helberg',
  category: CATEGORY.MUST_READ,
  quickDescription:
    'China is openly attempting to take over global internet content, infrasturcture, and content. An authoritarian government in charge of the internet threatens democracy everywhere.',
};

export const CODE_BREAKER = {
  slug: 'code-breaker',
  title:
    'Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race',
  author: 'Walter Isaacson',
  category: CATEGORY.MUST_READ,
  quickDescription:
    "CRISPR genome editing was discovered in 2012, and the first gene edited human was born in 2018. Story of CRISPR discovery, how it's going to be used, and the moral delimas of cheap, easy gene editing.",
};

export const CHASING_THE_SCREAM = {
  slug: 'chasing-the-scream',
  title: 'Chasing the Scream: The First and Last Days of the War on Drugs',
  author: 'Johann Hari',
  category: CATEGORY.MUST_READ,
  quickDescription:
    "Wild. Outdated global drug policy doesn't work, creates a dangerous world for everyone remotely involved, and the war on drugs is on it's way out.",
};

export const HOW_TO_AVOID_A_CLIMATE_DISASTER = {
  slug: 'how-to-avoid-a-climate-disaster',
  title: `How to Avoid a Climate Disaster: Solutions We Have and the Breakthroughs We’ll Need`,
  author: 'Bill Gates',
  category: CATEGORY.MUST_READ,
  quickDescription:
    "We've got until 2030 to get on a direct path forward, and 2050 to reach net 0 carbon emissions. It's possible with focus, collaboration, and innovation.",
};

// Entrepreneur stories

export const LIFT_OFF = {
  slug: 'lift-off',
  title: `Lift Off: Elon Musk and the Desperate Early Days That Launched SpaceX`,
  author: 'Eric Berger',
  category: CATEGORY.ENTREPRENEUR_STORY,
  quickDescription:
    'Early stage startup meets rocket science. A wild story of ambitious and talented people.',
};

export const THE_NEW_NEW_THING = {
  slug: 'the-new-new-thing',
  title: `The New New Thing: A Silicon Valley Story`,
  author: 'Michael Lewis',
  category: CATEGORY.ENTREPRENEUR_STORY,
  quickDescription:
    'The beginnings of Silicon Valley, the internet, Netscape, and the legendary Jim Clark.',
};

export const SHOE_DOG = {
  slug: 'shoe-dog',
  title: `Shoe Dog: A Memoir by the Creator of Nike`,
  author: 'Phil Knight',
  category: CATEGORY.ENTREPRENEUR_STORY,
  quickDescription:
    "Building Nike was a grind with no obvious path forward, lot's of luck, lot's of grit, and a ton of trips to Japan.",
};

export const BAD_BLOOD = {
  slug: 'bad-blood',
  title: `Bad Blood: Secrets and Lies in a Silicon Valley Startup`,
  author: 'John Carreyrou',
  category: CATEGORY.ENTREPRENEUR_STORY,
  quickDescription: 'Elizabeth Holmes is facinating. How NOT to run a startup.',
};

// Software and Product

export const UNICORN_PROJECT = {
  slug: 'unicorn-project',
  title: `The Unicorn Project: A Novel about Digital Disruption, Redshirts, and Overthrowing the Ancient Powerful Order`,
  author: 'Gene Kim',
  category: CATEGORY.SOFTWARE,
  quickDescription:
    'Put into the form of a novel, an informative story about dev ops, team structure, and agile developement practices for software companies.',
};
export const TECHINICALLY_WRONG = {
  slug: 'techinically-wrong',
  title: `Techinically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech`,
  author: 'Sara Wachter-Boettcher',
  category: CATEGORY.SOFTWARE,
  quickDescription:
    'We take tech generally as truth (ex. Google Search). Eye openeing overview of biases baked into tech products and why diversity is a necessity.',
};
export const CLEAN_CODE = {
  slug: 'clean-code',
  title: `Clean Code: A Handbook of Agile Software Craftsmanship`,
  author: 'Robert C. Martin',
  category: CATEGORY.SOFTWARE,
  quickDescription:
    'A book about software craftsmanship and best practices to write good, clean code.',
};
export const DESIGN_OF_EVERYDAY_THINGS = {
  slug: 'design-of-everyday-things',
  title: `Design of Everyday Things`,
  author: 'Donald A. Norman',
  category: CATEGORY.SOFTWARE,
  quickDescription: 'Product design from the lense of things you use everyday.',
};
export const HOOKED = {
  slug: 'hooked',
  title: `Hooked: How to Build Habit-Forming Products`,
  author: 'Nir Eyal',
  category: CATEGORY.SOFTWARE,
  quickDescription:
    'Create a trigger, enable some action with variable reward, and built user investment. Soon enough, users are hooked.',
};

// Startup Books

export const ZERO_TO_ONE = {
  slug: 'zero-to-one',
  title: `Zero to One: Notes on Startups, or How to Build the Future`,
  author: 'Peter Thiel',
  category: CATEGORY.STARTUP,
  quickDescription:
    'Must read startup book. Quick read, foundational, just read it.',
};
export const LEAN_STARTUP = {
  slug: 'the-lean-startup',
  title: `The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses`,
  author: 'Eric Ries',
  category: CATEGORY.STARTUP,
  quickDescription:
    'The mission of a startup is to develop hypotheses and test them quickly. A framework for setting clear goals, measuring them, and deciding what to do next.',
};
export const ART_OF_THE_START = {
  slug: 'art-of-the-start',
  title: `The Art of the Start 2.0: The Time-Tested, Battle Hardened Guide for Anyone Starting Anything`,
  author: 'Guy Kawasaki',
  category: CATEGORY.STARTUP,
  quickDescription:
    'How to start an internet business from an early Apple employee and multi-time startup founder.',
};
export const HARD_THING_ABOUT_HARD_THINGS = {
  slug: 'the-hard-thing-about-hard-things',
  title: `The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers`,
  author: 'Ben Horowitz',
  category: CATEGORY.STARTUP,
  quickDescription:
    'Difficult decisions and hard situations that WILL happen during company building. Told by Ben Horowitz, Opsware founder and a16z GP.',
};

// Other

export const EMPTY_PLANET = {
  slug: 'empty-planet',
  title: 'Empty Planet: The Shock of Global Population Decline',
  author: 'Darrell Bricker & John Ibbitson',
  category: CATEGORY.OTHER,
  quickDescription:
    'Human population will soon plummet. This is a big problem with no easy answers.',
};

export const DEFINING_DECADE = {
  slug: 'defining-decade',
  title:
    'The Defining Decade: Why Your Twenties Matter—And How to Make the Most of Them Now',
  author: 'Meg Jay',
  category: CATEGORY.OTHER,
  quickDescription:
    'High level advice and stories on work, relationships, and your physical health for people in their 20s.',
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
