export type CategoryId =
  // Unit Types
  | 'infantry' | 'vehicle' | 'aircraft' | 'naval' | 'structure' | 'hero'
  // Factions
  | 'allied' | 'soviet' | 'yuri'
  // Actions
  | 'acknowledgment' | 'movement' | 'combat' | 'readiness' | 'alert' | 'humor'
  // Moods
  | 'confident' | 'panicked' | 'professional' | 'quirky'
  // Special Collections
  | 'tesla' | 'iconic' | 'meme-worthy' | 'multiplayer';

export type CategoryGroup = 'unit' | 'faction' | 'action' | 'mood' | 'special';

export interface CategoryDefinition {
  id: CategoryId;
  name: { en: string; cn: string };
  description: { en: string; cn: string };
  icon?: string;
  color: string;
  group: CategoryGroup;
}
