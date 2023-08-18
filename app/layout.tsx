import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peiyu Wu - Full Stack Web Developer",
  description: "Peiyu Wu's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>{children}</body>
    </html>
  );
}
