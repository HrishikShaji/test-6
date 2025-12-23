import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "test-6",
  description: "test-6",
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
