import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata Configuration
 * Defines the global SEO and branding identity for the application.
 */
export const metadata: Metadata = {
  title: "RhemaPulse | Ministry Intelligence",
  description: "Executive Data Analytics and Reporting Hub for RCCG Rhema Assembly Parish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        {/* Main Application Container */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}