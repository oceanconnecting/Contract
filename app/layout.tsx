import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';

export const metadata = {
  title: "Contract Ocean",
  description: "Ocean Connecting vous donne la possibilité d'obtenir un contrat de travail en Europe",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  let { locale } = await params;

  // Log the received locale for debugging
  console.log("Received locale:", locale);

  // Fallback to 'en' if locale is not defined or is invalid
  if (!locale) {
    locale = "fr";  // Fallback to default locale
    console.log(`Locale not found, defaulting to ${locale}...`);
  }

  // Ensure the locale is one of the supported locales
  const validLocales = ["fr", "en"];  // List of valid locales
  if (!validLocales.includes(locale)) {
    console.log(`Invalid locale: ${locale}. Redirecting to 'fr'...`);
    redirect("/fr");  // Redirect to 'fr' if the locale is not supported
  }

  // Load messages for the current locale
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    messages = await getMessages({ locale: "en" });  // Fallback to English messages
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="z-50">
           
          </div>
          <div className="z-40">{children}</div>
       
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

