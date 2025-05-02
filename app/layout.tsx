import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TinaWrapper } from "./tina-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryoji Portfolio",
  description: "Portfolio website built with Next.js and TinaCMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <TinaWrapper>{children}</TinaWrapper>
      </body>
    </html>
  );
} 