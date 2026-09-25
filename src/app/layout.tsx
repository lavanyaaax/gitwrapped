import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitWrapped 2026 — Your Coding Era",
  description:
    "Discover your GitHub coding era, top languages, commit rhythms, and personalized developer archetype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  );
}
