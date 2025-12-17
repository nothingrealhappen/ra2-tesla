import { useState, type ReactNode } from 'react';
import { LanguageContext, getTranslation } from '~/hooks/useLanguage';
import type { Language } from '~/data/i18n';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
