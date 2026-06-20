export interface LanguageContextInterface {
  lang: 'en' | 'es';
  toggleLang: () => void;
  setLang: (lang: 'en' | 'es') => void;
}

