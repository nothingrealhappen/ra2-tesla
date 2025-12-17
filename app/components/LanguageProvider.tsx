import { useState, useEffect, type ReactNode } from 'react';
import { LanguageContext, getTranslation } from '~/hooks/useLanguage';
import type { Language } from '~/data/i18n';

function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('zh')) {
    return 'cn';
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectBrowserLanguage);
  const t = getTranslation(language);

  useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh' : language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
