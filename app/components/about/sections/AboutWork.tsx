import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const work: AboutData[] = [
  {
    suptitle: "Sep 2022 - Present",
    title: "Full-stack Developer Internship",
    subtitle: "@ Visual Alpha",
    description: [
      "Develop a full-stack financial monitoring platform using React.js, GraphQL, and Laravel",
      "Learned version control system and CI/CD process in web development",
      "Gained experience in communication skills within the dev team and with client support",
    ],
  },
];

export default function AboutWork() {
  return (
    <SectionTemplate
      id="work"
      title="Work"
      borderColor="border-purple-300"
      textColor="text-purple-300"
      data={work}
    />
  );
}
