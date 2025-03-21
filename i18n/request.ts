import { routing } from './routing';

export default async function handleLocale({ requestLocale }: { requestLocale: string }) {
  let locale: string | undefined = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "fr" | "en" | "de" | "es")) {
    console.warn(`Invalid or undefined locale: ${locale}. Falling back to default.`);
    locale = routing.defaultLocale;
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../messages/${routing.defaultLocale}.json`)).default,
    };
  }
}
