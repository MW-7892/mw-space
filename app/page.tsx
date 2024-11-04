import { Poppins } from "next/font/google";
import MainProfile from "./components/home/MainProfile";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`grid gap-y-16 ${poppins.className} lg:items-center lg:h-screen scale-90 lg:scale-100 my-14 lg:my-0 lg:mx-16`}
    >
      <MainProfile />
    </div>
  );
}
