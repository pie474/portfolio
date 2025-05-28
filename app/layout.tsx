import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: "Chinmay's Portfolio",
  description: "Built in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 p-4">{children}</div>
          <Footer />

          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
