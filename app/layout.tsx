import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anamika Singh | MERN Stack Developer",
  description: "Full-stack portfolio of Anamika Singh, a MERN Stack Developer based in Bengaluru.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
