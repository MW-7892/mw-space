import AboutSummary from "@/components/about/sections/AboutSummary";
import AboutEducation from "@/components/about/sections/AboutEducation";
import AboutWork from "@/components/about/sections/AboutWork";
import AboutProjects from "@/components/about/sections/AboutProjects";
import AboutSkills from "@/components/about/sections/AboutSkills";

export default function About() {
  return (
    <div className="p-10">
      <div className="flex flex-wrap">
        <h1>My Profile</h1>
      </div>
      <div className="grid grid-cols-1 mt-8 gap-x-5 line-height-lg">
        <div className="space-y-10">
          <AboutSummary />
          <AboutWork />
          <AboutProjects />
          <AboutEducation />
          <AboutSkills />
        </div>
      </div>
    </div>
  );
}
