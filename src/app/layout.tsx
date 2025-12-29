import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Suspense } from "react";
import NavigationLoader from "./components/ui/navigation-loader";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasbi - Junior Software Developer",
  description: "Portfolio of Muhammad Hasbi Ash Shiddiqi - Junior Software Developer specializing in Java Spring Boot and PHP Laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={bricolageGrotesque.className}>
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
