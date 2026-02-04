import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/common/NavBar";
import ParticlesComponent from "./components/common/ParticlesComponent";
import MobileNav from "./components/common/MobileNav";
import Terminal from "./components/home/Terminal";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "M-W Space",
  description: "A personal website of M-W",
};

const bodyFont = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} overflow-hidden`}>
        <div className="-z-10 fixed inset-0">
          <ParticlesComponent />
        </div>
        <Terminal>{children}</Terminal>
      </body>
    </html>
  );
}
