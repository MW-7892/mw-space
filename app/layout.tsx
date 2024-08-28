import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/common/NavBar";
import ParticlesComponent from "./components/common/ParticlesComponent";
import MobileNav from "./components/common/MobileNav";

export const metadata: Metadata = {
  title: "M-W Space",
  description: "A space for M-W",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="z-[-1] fixed inset-0">
          <ParticlesComponent />
        </div>
        <div className="grid grid-cols-12">
          <div className="hidden lg:flex lg:col-span-2">
            <NavBar />
          </div>
          <MobileNav />
          <div className="col-span-12 lg:col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
