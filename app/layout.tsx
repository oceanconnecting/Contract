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
  params: { locale: string };
}) {
  const { locale } = params;

  // Charger les messages de traduction
  const messages = await getMessages({ locale });

  const validLocales = ["fr", "en"]; // Langues prises en charge

  // Vérifier si la locale est valide
  if (!validLocales.includes(locale)) {
    redirect("/fr"); // Rediriger vers 'fr' si la langue n'est pas supportée
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
            <Navbar />
          </div>
          <div className="z-40">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
