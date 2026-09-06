import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Blinker } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-blinker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIG.ETHER — Your Money Reimagined",
  description: "AI Digital Banking. Discover an innovative and more intelligent approach to effectively manage, invest, and significantly grow your financial resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${blinker.variable} dark`}>
      <body className="bg-[#060709] text-white min-h-screen antialiased selection:bg-[#D9FD18] selection:text-black">
        {children}
      </body>
    </html>
  );
}
