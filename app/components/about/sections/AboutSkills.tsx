import SectionTemplateSkills, {
  AboutDataSkill,
} from "@/components/about/SectionTemplateSkills";
import { FaRegLightbulb, FaWindowMaximize } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GiJapan } from "react-icons/gi";
import { GrCode } from "react-icons/gr";
import { HiPresentationChartBar } from "react-icons/hi2";
import { LiaBrushSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import {
  SiAmazonwebservices,
  SiArchlinux,
  SiCplusplus,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiLua,
  SiMysql,
  SiNeovim,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

export const skills: AboutDataSkill[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Lua", icon: <SiLua /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Go", icon: <FaGolang /> },
      { name: "Rust", icon: <SiRust />, isInterest: true },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Arch Linux", icon: <SiArchlinux /> },
      { name: "Ubuntu", icon: <SiUbuntu /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Neovim", icon: <SiNeovim /> },
      { name: "Git", icon: <SiGithub /> },
      { name: "nginx", icon: <SiNginx /> },
      { name: "firebase", icon: <SiFirebase /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS EC2", icon: <SiAmazonwebservices /> },
      { name: "AWS RDS", icon: <SiAmazonwebservices /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Prisma", icon: <SiPrisma />, isInterest: true },
    ],
  },
  {
    title: "Language Proficiency",
    skills: [
      { name: "English (C2)", icon: <span>🇺🇲 🇬🇧</span> },
      { name: "Japanese (B2)", icon: <span>🇯🇵</span> },
      { name: "Thai (Native)", icon: <span>🇹🇭</span> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Data Structure & Algorithms", icon: <PiGraphFill /> },
      { name: "Competitive Programming", icon: <GrCode /> },
      { name: "Graphic Design", icon: <LiaBrushSolid /> },
      {
        name: "Presentation and Communication",
        icon: <HiPresentationChartBar />,
      },
      { name: "Interdisciplinary Knowledge", icon: <FaRegLightbulb /> },
      {
        name: "Window Manager & Desktop Environment",
        icon: <FaWindowMaximize />,
        isInterest: true,
      },
      { name: "Cybersecurity", icon: <MdSecurity />, isInterest: true },
      {
        name: "Japanese Language & Culture",
        icon: <GiJapan />,
        isInterest: true,
      },
    ],
  },
];

export default function AboutSkills() {
  return <SectionTemplateSkills data={skills} />;
}
