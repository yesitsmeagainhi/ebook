// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dressingschool — Men’s Fashion App",
  description: "Daily outfit ideas, hairstyles, shoes, poses, must-haves & formal fits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
