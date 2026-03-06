import type { Metadata } from "next";
import "./globals.css";
import ParticlesComponent from "./components/common/ParticlesComponent";
import Terminal from "./components/common/Terminal";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import PageLoading from "./components/common/PageLoading";
import NavBar from "./components/common/NavBar";
import MobileNav from "./components/common/MobileNav";

export const metadata: Metadata = {
  title: "M-W Space",
  description: "A personal website of M-W",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-title",
  weight: ["400", "500", "300"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmMono.variable} font-body overflow-hidden`}
      >
        <PageLoading />
        <div className="-z-10 fixed inset-0">
          <ParticlesComponent />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-x-8 px-4">
          <MobileNav />
          <div className="hidden lg:block w-[200px] h-fit animate-navbar-popup animation-delay-1800 opacity-0">
            <Terminal title="navbar">
              <NavBar />
            </Terminal>
          </div>
          <div
            className="animate-terminal-popup h-fit w-full lg:max-w-[720px] flex justify-center
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
