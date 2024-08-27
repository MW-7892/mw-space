import { Roboto_Mono } from "next/font/google"
import MainProfile from "./components/home/MainProfile";
import ProfileSummary from "./components/home/ProfileSummary";

const robotoMono = Roboto_Mono({
  subsets: ['latin']
})


export default function Home() {
  return (
    <div className={`grid gap-y-16 ${robotoMono.className} my-14 mx-16`}>
      <MainProfile />
      <ProfileSummary />
    </div>
  );
}