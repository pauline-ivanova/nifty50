import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ScrollToTopButton from "@/app/components/common/ScrollToTopButton";
import DotNav from "@/app/components/common/DotNav";
import ScrollProgressBar from "@/app/components/common/ScrollProgressBar";
import { Metadata } from "next";
import JsonLd, { generateOrganizationSchema, generateWebSiteSchema } from "@/app/components/common/JsonLd";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';

import { generateStandardMetadata } from '@/lib/metadata-utils';

const standardMetadata = generateStandardMetadata({
  title: "How to Invest in NIFTY 50",
  description: "Your comprehensive guide to investing in India's benchmark index.",
  url: baseUrl,
  pagePath: '/',
});

export const metadata: Metadata = {
  title: "How to Invest in NIFTY 50",
  description: "Your comprehensive guide to investing in India's benchmark index.",
  ...standardMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';

  // Generate Organization schema
  const organizationSchema = generateOrganizationSchema({
    name: 'How to Invest in NIFTY 50',
    url: baseUrl,
    description: "Your comprehensive guide to investing in India's benchmark index.",
    contactPoint: {
      contactType: 'Customer Service',
      email: 'info@howtoinvestinnifty50.com',
    },
  });

  // Generate WebSite schema
  const webSiteSchema = generateWebSiteSchema({
    name: 'How to Invest in NIFTY 50',
    url: baseUrl,
    description: "Your comprehensive guide to investing in India's benchmark index.",
  });

  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
        <ScrollProgressBar />
        <Header />
        <DotNav />
        <main className="bg-white">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

