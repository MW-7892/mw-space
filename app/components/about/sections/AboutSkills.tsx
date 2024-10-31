import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const skills: AboutData[] = [
  {
    title: "Technical & Personal Skills",
    description: ["Linux", "Web Development", "TBA"],
  },
  {
    title: "Language Proficiency",
    description: [
      "English - Full professional proficiency",
      "Japanese - Limited working proficiency",
      "Thai - Native speaker",
    ],
  },
];

export default function AboutSkills() {
  return (
    <SectionTemplate
      id="skills"
      title="Skills"
      borderColor="border-orange-300"
      textColor="text-orange-300"
      data={skills}
    />
  );
}
