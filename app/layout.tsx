import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components";

export const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Mirrro AI",
  description:
    "Unifying Sales, Marketing, and Support teams in the modern Era under one AI and one memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifBengali.variable} antialiased`}>
        <>
          <NavBar />
        </>
        {children}
      </body>
    </html>
  );
}
