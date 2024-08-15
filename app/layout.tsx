import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/profile">
            <li>Profile</li>
          </Link>
          <Link href="/image">
            <li>Image</li>
          </Link>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading ...</p>}>
      {children}
      </Suspense>
        </body>
    </html>
  );
}
