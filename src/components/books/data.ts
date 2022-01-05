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
}

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
export const EMPTY_PLANET = {
  slug: 'empty-planet',
  title: 'Empty Planet: The Shock of Global Population Decline',
  author: 'Darrell Bricker & John Ibbitson',
  category: Category.MUST_READ,
};

export const HOW_TO_AVOID_A_CLIMATE_DISASTER = {
  slug: 'how-to-avoid-a-climate-disaster',
  title: `How to Avoid a Climate Disaster: Solutions We Have and the Breakthroughs We’ll Need`,
  author: 'Bill Gates',
  category: Category.MUST_READ,
};

export const ALL_BOOKS: IBook[] = [
  LIFESPAN,
  WIRES_OF_WAR,
  CODE_BREAKER,
  CHASING_THE_SCREAM,
  HOW_TO_AVOID_A_CLIMATE_DISASTER,
  EMPTY_PLANET,
];

export const ALL_BOOKS_MAP = new Map<string, IBook>(
  ALL_BOOKS.reduce((booksMap, book) => {
    booksMap.set(book.slug, book);
    return booksMap;
  }, new Map<string, IBook>()),
);

export const BOOK_SLUGS = ALL_BOOKS.map((book: IBook) => book.slug);
