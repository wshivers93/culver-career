import React from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsFont = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Culver Career Day",
  description: "Example site for career day demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsFont.className}>{children}</body>
    </html>
  );
}
