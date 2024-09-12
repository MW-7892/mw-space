import { Poppins } from "next/font/google"
import MainProfile from "./components/home/MainProfile";
import ProfileSummary from "./components/home/ProfileSummary";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})


export default function Home() {
  return (
    <div className={`grid gap-y-16 ${poppins.className} scale-90 lg:scale-100 my-14 lg:mx-16`}>
      <MainProfile />
      <ProfileSummary />
    </div>
  );
}
