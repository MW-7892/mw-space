import { LiaBrushSolid } from "react-icons/lia";
import { PiGraphFill } from "react-icons/pi";
import {
  SiArchlinux,
  SiCplusplus,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNeovim,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiPython,
  SiReact,
  SiReactivex,
  SiSpringboot,
  SiTypescript,
  SiUbuntu,
  SiVuedotjs,
} from "react-icons/si";
import SkillGrid from "../SkillGrid";
import { FaJava } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.JSX.Element;
}

export interface AboutDataSkill {
  title: string;
  skills: Skill[];
}

export const skills: AboutDataSkill[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "RxJava", icon: <SiReactivex /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Ubuntu", icon: <SiUbuntu /> },
      { name: "Neovim", icon: <SiNeovim /> },
      { name: "Git", icon: <SiGithub /> },
      { name: "nginx", icon: <SiNginx /> },
    ],
  },
  {
    title: "Language Proficiency",
    skills: [
      { name: "English (IELTS 7.5)", icon: <span>🇺🇲 🇬🇧</span> },
      { name: "Japanese (JLPT N1)", icon: <span>🇯🇵</span> },
      { name: "Thai (Native)", icon: <span>🇹🇭</span> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Data Structure & Algorithms", icon: <PiGraphFill /> },
      { name: "UX/UI Design", icon: <LiaBrushSolid /> },
    ],
  },
];

export default function AboutSkills() {
  return (
    <>
      <div className="w-fit mb-5">
        <h4 className="text-primary">Skills</h4>
      </div>
      <div className="grid gap-y-6">
        {skills.map((skill) => (
          <SkillGrid skill={skill} key={skill.title} />
        ))}
      </div>
    </>
  );
}
