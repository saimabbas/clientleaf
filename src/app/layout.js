import { Manrope } from "next/font/google";
import "./styles/globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "ClientLeaf — Proposal Operations for Upwork Agencies",
  description: "ClientLeaf helps Upwork agencies find the right jobs, draft consistent high-quality proposals, and submit through a controlled, human-reviewed process.",
  manifest: '/site.webmanifest',
  keywords: "Upwork agencies, proposal operations, job proposals, freelance agencies, Upwork proposals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#030712",
  colorScheme: "dark",
  metadataBase: new URL('https://clientleaf.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    siteName: "ClientLeaf",
    title: "ClientLeaf — Proposal Operations for Upwork Agencies",
    description: "Stop missing good Upwork projects. ClientLeaf filters the right jobs, drafts consistent proposals, and manages submissions with human oversight.",
    url: "https://clientleaf.com/",
    images: [{
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "ClientLeaf - Proposal Operations for Upwork Agencies",
      type: "image/png",
    }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClientLeaf — Proposal Operations for Upwork Agencies",
    description: "Find the right Upwork jobs, draft strong proposals, and submit with a controlled, human-reviewed process.",
    images: ["/twitter.png"], 
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://clientleaf.com/" />
      </head>
      <body className={`${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}