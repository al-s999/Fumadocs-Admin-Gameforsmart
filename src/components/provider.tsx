'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { locales, uiDictionary } from '@/lib/i18n';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'id',
  setLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>('id');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'id' || saved === 'en')) {
        setLocale(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    try {
      localStorage.setItem('language', newLocale);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLocale;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleLocaleChange }}>
      <RootProvider
        i18n={{
          locale,
          locales,
          translations: uiDictionary[locale] ?? uiDictionary.id,
          onLocaleChange: handleLocaleChange,
        }}
      >
        {children}
      </RootProvider>
    </LanguageContext.Provider>
  );
}
