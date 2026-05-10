export const LEARNING_PAGE_SLUGS = {
  iranConflict: 'world-events/us-iran-israel-conflict',
} as const;

export type LearningPageSlug = typeof LEARNING_PAGE_SLUGS[keyof typeof LEARNING_PAGE_SLUGS];

export const LEARNING_PAGE_PATHS = {
  iranConflict: `/learning/${LEARNING_PAGE_SLUGS.iranConflict}`,
} as const;
