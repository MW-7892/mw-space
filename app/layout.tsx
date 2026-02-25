import type { Metadata } from "next";
import "./globals.css";
import ParticlesComponent from "./components/common/ParticlesComponent";
import Terminal from "./components/common/Terminal";
import { Space_Grotesk } from "next/font/google";
import PageLoading from "./components/common/PageLoading";

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
        <PageLoading />
        <div className="-z-10 fixed inset-0">
          <ParticlesComponent />
        </div>
        <div className="animate-terminal-popup animation-delay-1200 ease-out opacity-0">
          <Terminal>{children}</Terminal>
        </div>
      </body>
    </html>
  );
}
