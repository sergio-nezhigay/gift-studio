import React from "react";
import type { Metadata, Viewport } from "next";

import Header from "@/src/layout/Header";
import Footer from "@/src/layout/Footer";

import { montserrat, caveat } from "@/src/app/fonts";

import "@/src/app/globals.css";

import meta from "@/data/meta";

export const metadata: Metadata = meta;

const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
