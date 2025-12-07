import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dressingschool — Men’s Fashion App",
  description: "Daily outfit ideas, hairstyles, shoes, poses, must-haves & formal fits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* This suppressHydrationWarning prop is added to the <body> tag. 
        It tells React to ignore minor mismatches between the server-rendered HTML 
        and the client-side HTML, which are often caused by browser extensions 
        injecting scripts or attributes.
      */}
      <body suppressHydrationWarning={true}>
        {children}
        <Footer />
      </body>
    </html>
  );
}