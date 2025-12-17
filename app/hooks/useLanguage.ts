import { createContext, useContext } from 'react';
import type { Language, Translation } from '~/data/i18n';
import { translations } from '~/data/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function getTranslation(lang: Language): Translation {
  return translations[lang];
}
