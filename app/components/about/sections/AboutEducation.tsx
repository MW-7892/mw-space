import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const education: AboutData[] = [
  {
    title: "B.Eng. in Transdisciplinary Science and Engineering",
    subtitle: "@ Tokyo Institute of Technology",
    description: "GPA 3.95/4.50"
  }
]

export default function AboutEducation() {
  return <SectionTemplate
    id="education"
    title="Education"
    borderColor="border-amber-200"
    textColor="text-amber-200"
    data={education}
  />
}
