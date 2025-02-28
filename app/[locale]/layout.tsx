import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // ✅ Correction ici
}) {
  const { locale } = params; // ✅ Plus besoin d'attendre une promesse

  const validLocale = locale as "en" | "fr" | "ar";

  if (!routing.locales.includes(validLocale)) {
    notFound();
  }

  const messages = await getMessages({ locale: validLocale });

  return (
    <html lang={validLocale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={validLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
