import { LEARNING_PAGE_SLUGS, type LearningPageSlug } from './learningPages';

export type LearningVisibility = {
  listed: boolean;
  accessible: boolean;
};

const defaultVisibility: LearningVisibility = {
  listed: true,
  accessible: true,
};

const visibilityBySlug: Partial<Record<LearningPageSlug, LearningVisibility>> = {
  [LEARNING_PAGE_SLUGS.iranConflict]: {
    listed: false,
    accessible: false,
  },
};

export function getLearningVisibility(slug: string): LearningVisibility {
  return visibilityBySlug[slug as LearningPageSlug] ?? defaultVisibility;
}

export function isLearningPageListed(slug: string): boolean {
  return getLearningVisibility(slug).listed;
}

export function isLearningPageAccessible(slug: string): boolean {
  return getLearningVisibility(slug).accessible;
}
