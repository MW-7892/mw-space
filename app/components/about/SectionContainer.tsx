import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function SectionContainer({
  children,
}: {
  children: React.JSX.Element | string;
}) {
  return (
    <div className="border border-transparent border-l-foreground">
      {children}
    </div>
  );
}
