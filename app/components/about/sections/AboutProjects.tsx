import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const projects: AboutData[] = [
  {
    title: "Mini Grader",
    subtitle: {
      name: "GitHub (work in progress)",
      link: "https://github.com/MW-7892/mini-grader-deploy",
    },
    description:
      "A full-stack web app for creating quick programming problems. Mainly to practice Next.js, Golang, DevOps, and AWS deployment",
  },
  {
    title: "M-W space",
    subtitle: { name: "mw7892.com", link: "https://mw7892.com" },
    description:
      "A personal website developed using Next.js and TailwindCSS to practice my web development skill from scratch",
  },
];

export default function AboutProjects() {
  return (
    <SectionTemplate
      id="project"
      title="Projects"
      borderColor="border-teal-300"
      textColor="text-teal-300"
      data={projects}
    />
  );
}
