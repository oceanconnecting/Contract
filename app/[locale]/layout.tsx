import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params:Promise< { locale: string }>;
}>) {
  const { locale } = await params;

  console.log("Locale detected:", locale);
  console.log("Available locales:", routing.locales);

  if (!locale || !routing.locales.includes(locale as "fr" | "en" | "de" | "es")) {
    console.warn(`Invalid locale: ${locale}, redirecting to notFound()`);
    notFound();
  }

  let messages;
  try {
    messages = await getMessages({locale});
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    messages = {}; // Fallback pour éviter une erreur
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
