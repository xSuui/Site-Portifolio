import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { heroMock } from "@/mocks/hero";
import { changeHead } from "@/utils/changeHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = changeHead({
  title: "Samuel - Portfólio",
  description: heroMock.subtitle,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
