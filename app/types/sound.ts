import type { CategoryId } from './category';

export interface Sound {
  id: number;
  filename: string;
  displayName: string;
  categories: CategoryId[];
  tags?: string[];
  faction?: 'allied' | 'soviet' | 'yuri';
  unitType?: string;
  r2Url: string;
  duration?: number;
  popularity?: number;
}

export interface SoundMetadata {
  totalCount: number;
  lastUpdated: string;
}
