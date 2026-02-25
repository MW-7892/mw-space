import type { Metadata } from "next";
import "./globals.css";
import ParticlesComponent from "./components/common/ParticlesComponent";
import Terminal from "./components/common/Terminal";
import { Space_Grotesk } from "next/font/google";
import PageLoading from "./components/common/PageLoading";
import NavBar from "./components/common/NavBar";

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
        <div className="flex justify-center gap-x-8">
          <div className="hidden xl:block w-[200px] h-fit">
            <Terminal title="navbar">
              <NavBar />
            </Terminal>
          </div>
          <div
            className="animate-terminal-popup w-[90%] h-full max-w-[720px] flex justify-center
							animation-delay-1200 ease-out opacity-0"
          >
            <Terminal isFillHeight title="mw-7892">
              {children}
            </Terminal>
          </div>
          <div className="hidden xl:flex w-[200px]"></div>
        </div>
      </body>
    </html>
  );
}
