import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const projects: AboutData[] = [
  {
    suptitle: "Jan 2025 - Jan 2026",
    title: "Small-Scale WRF for Educational Purposes",
    subtitle: {
      name: "GitHub",
      link: "https://github.com/TokyoTechGUC/miniguc",
    },
    preview: "A weather prediction model for sandbox environment",
    description: [
      "Developed an optimized weather prediction model for sandbox environment",
      "Optimized the simulation performance from taking days to just an hour",
      "Presented in The Meteorological Society of Japan 2025 Autumn Meeting",
    ],
  },
  {
    title: "M-W space",
    subtitle: { name: "mw7892.com", link: "https://mw7892.com" },
    preview: "A personal website developed using Next.js and TailwindCSS",
    description:
      "A personal website developed using Next.js and TailwindCSS to practice my web development skill from scratch",
  },
];

export default function AboutProjects() {
  return <SectionTemplate title="Projects" data={projects} />;
}
