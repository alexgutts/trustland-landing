import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "TrustLand - Invest in Mérida Real Estate with Complete Trust",
  description: "The safest way to invest in Mérida, Yucatán real estate. Certified agents, verified ratings, and expert oversight for international investors.",
  keywords: "Mérida real estate, Yucatán investment, certified real estate agents, international property investment, Mexico real estate",
  openGraph: {
    title: "TrustLand - Certified Real Estate Platform",
    description: "Invest in Mérida with complete trust and transparency",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
