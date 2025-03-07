import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Contract OceanConnecting',
  description: "Ocean Connecting vous donne la possibilité d'obtenir un contrat de travail en Europe",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body >
        <div className="z-50">
        <GoogleAnalytics gaId="G-YZWBR602ET" />
        <Navbar/>
        </div>
        <div className="z-40">
        {children}
        </div>
        
        <Footer />
      </body>
    </html>
  )
}
