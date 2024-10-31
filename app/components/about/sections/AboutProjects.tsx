import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const projects: AboutData[] = [
  {
    title: "M-W space",
    subtitle: "mw7892.com",
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
