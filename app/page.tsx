import AboutMe from "./components/home/AboutMe";
import Hobbies from "./components/home/Hobbies";
import ProfileTop from "./components/home/ProfileTop";

export default function Home() {
  return (
    <div className="space-y-10">
      <ProfileTop />
      <AboutMe />
      <Hobbies />
    </div>
  );
}
