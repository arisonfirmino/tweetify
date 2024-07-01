import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tweetify",
  description:
    "Conecte-se na aplicação e compartilhe suas ideias com a comunidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-white text-black`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
