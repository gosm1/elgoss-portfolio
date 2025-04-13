import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const manrope = Manrope({ 
  subsets: ["latin"],
  display: 'swap', // Improves performance and prevents font flickering
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "ELGOSS Mouhcine | Professional Web Developer",
    template: "%s | ELGOSS mouhcine Portfolio"
  },
  description: "Professional portfolio showcasing web development projects, skills, and experiences. Expert in React, Next.js, and modern web technologies.",
  keywords: ["Elgoss Mouhcine", "Full Stack Developer", "Next.js Portfolio", "Web Developer Morocco", "Software Engineer", "React Developer", "portfolio", "web developer", "frontend developer", "next.js developer", "react developer", "ELGOSS"],
  creator: "ELGOSS mouhcine",
  publisher: "ELGOSS mouhcine",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "https://mouhcineelgoss.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ELGOSS Mouhcine | Professional Web Developer",
    description: "Professional portfolio showcasing web development projects, skills, and experiences. Expert in React, Next.js, and modern web technologies.",
    url: "https://mouhcineelgoss.vercel.app",
    siteName: "ELGOSS Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mouhcineelgoss.vercel.app/og.png", // Create and add your own OG image
        width: 1200,
        height: 630,
        alt: "ELGOSS Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELGOSS Portfolio | Professional Web Developer",
    description: "Professional portfolio showcasing web development projects, skills, and experiences. Expert in React, Next.js, and modern web technologies.",
    creator: "@yourtwitterhandle", // Add your Twitter handle if you have one
    images: ["https://www.yourdomain.com/twitter-image.jpg"], // Create and add your own Twitter card image
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}