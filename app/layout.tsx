import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralaway = Raleway({ subsets: ["latin"] });

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
    <html lang="en " data-theme="cupcake">
      <body className={ralaway.className}>{children}</body>
    </html>
  );
}
