import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the resolution of the params promise
  const { locale } = await params;

  console.log("Locale detected:", locale);
  console.log("Available locales:", routing.locales);

  // Validate the locale
  if (!locale || !routing.locales.includes(locale as "fr" | "en")) {
    console.log(`Invalid locale: ${locale}, redirecting to notFound()`);
    return notFound();
  }

  // Load messages for the locale
  let messages = {};
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
