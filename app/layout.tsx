import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import ModalProvider from "@/components/modal-provider";
import ToasterProvider from "@/components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "Fancy AI Wrapper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" />
        </head>
        <body className={`h-full ${inter.className}`}>
          <ModalProvider />
          <ToasterProvider />
          <main className="h-full">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
