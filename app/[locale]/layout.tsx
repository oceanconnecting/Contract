import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const validLocale = locale as 'en' | 'fr' | 'ar';

  if (!routing.locales.includes(validLocale)) {
    notFound()
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
