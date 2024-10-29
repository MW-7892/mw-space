import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const work: AboutData[] = [
  {
    title: "Full-stack Developer Internship",
    subtitle: "@ Visual Alpha",
    description: [
      "Develop frontend using React.js",
      "test 2"
    ]
  }
]

export default function AboutWork() {
  return <SectionTemplate
    title="Work"
    borderColor="border-purple-300"
    textColor="text-purple-300"
    data={work}
  />
}
