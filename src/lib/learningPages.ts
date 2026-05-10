export type LearningCategory =
  | 'design-patterns'
  | 'devops'
  | 'security'
  | 'world-events'
  | 'science';

export type LearningPageConfig = {
  slug: string;
  path: string;
  title: string;
  category: LearningCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  listed: boolean;
  accessible: boolean;
  description?: string;
  listDescription?: string;
  latestDescription?: string;
  latestMeta?: string;
};

export const LEARNING_PAGES = {
  iranConflict: {
    slug: 'world-events/us-iran-israel-conflict',
    path: '/learning/world-events/us-iran-israel-conflict',
    title: 'The US, Iran & Israel Conflict Explained',
    category: 'world-events',
    difficulty: 'Intermediate',
    readTime: '15 min read',
    listed: false,
    accessible: false,
    description:
      'From the 1953 CIA coup to the 8 May 2026 exchange of fire in the Strait of Hormuz, disabled Iranian tankers, and the still-fragile draft end-war talks, the full timeline of how the US, Iran, and Israel ended up at war.',
    listDescription:
      "From the 1953 CIA coup to today's Operation Epic Fury — the full timeline of how the US, Iran, and Israel ended up at war",
    latestDescription:
      "From the 1953 CIA coup to today's Operation Epic Fury — the full timeline",
    latestMeta: 'World Events',
  },
} as const satisfies Record<string, LearningPageConfig>;

export type LearningPageKey = keyof typeof LEARNING_PAGES;
export type LearningPageSlug = (typeof LEARNING_PAGES)[LearningPageKey]['slug'];

export function getLearningPage(key: LearningPageKey): LearningPageConfig {
  return LEARNING_PAGES[key];
}

export function isLearningPageListed(key: LearningPageKey): boolean {
  return getLearningPage(key).listed;
}

export function isLearningPageAccessible(key: LearningPageKey): boolean {
  return getLearningPage(key).accessible;
}

export function getLearningPagesByCategory(category: LearningCategory): LearningPageConfig[] {
  return Object.values(LEARNING_PAGES).filter((page) => page.category === category);
}

export function getListedLearningPagesByCategory(category: LearningCategory): LearningPageConfig[] {
  return getLearningPagesByCategory(category).filter((page) => page.listed);
}
