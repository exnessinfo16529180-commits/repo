import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital TAU",
  description: "Educational project Digital TAU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
