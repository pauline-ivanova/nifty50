import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ScrollToTopButton from "@/app/components/common/ScrollToTopButton";
import DotNav from "@/app/components/common/DotNav";
import ScrollProgressBar from "@/app/components/common/ScrollProgressBar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nifty 50 Investing",
  description: "Your comprehensive guide to investing in India's benchmark index.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://placehold.co" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
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

