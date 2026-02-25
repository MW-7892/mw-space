import AboutMe from "./components/home/AboutMe";
import ProfileTop from "./components/home/ProfileTop";

export default function Home() {
  return (
    <div className="space-y-10">
      <ProfileTop />
      <AboutMe />
    </div>
  );
}
