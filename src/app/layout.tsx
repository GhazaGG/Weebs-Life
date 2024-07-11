import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weebs Life",
  description: "An Anime fandom for weebs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <div className="font-Montserrat w-full flex justify-center pt-14">
          <div className="w-3/4">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
