import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/home/NavBar";
import ParticlesComponent from "./components/home/ParticlesComponent";

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
        <div className="h-100 z-[-1] fixed top-0 left-0">
          <ParticlesComponent />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 md:col-span-2">
            <NavBar />
          </div>
          <div className="col-span-9 md:col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
