export type SupportedLanguage = 'en' | 'tr';

export function getGreeting(args?: {lang?: SupportedLanguage, date?: Date}): string {
    const {
    lang = 'en',
    date = new Date(),
  } = args || {};
    if (!['en', 'tr'].includes(lang)) {
        throw new Error(`Unsupported language: ${lang}`);
    }
  const hour = date.getHours();

  let greetingKey: 'morning' | 'afternoon' | 'evening' | 'night';

  if (hour >= 5 && hour < 12) greetingKey = 'morning';
  else if (hour >= 12 && hour < 17) greetingKey = 'afternoon';
  else if (hour >= 17 && hour < 22) greetingKey = 'evening';
  else greetingKey = 'night';

  const greetings: Record<SupportedLanguage, Record<typeof greetingKey, string>> = {
    en: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening',
      night: 'Good night',
    },
    tr: {
      morning: 'Günaydın',
      afternoon: 'Tünaydın',
      evening: 'İyi akşamlar',
      night: 'İyi geceler',
    },
  };

  return greetings[lang][greetingKey];
}
