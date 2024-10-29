import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

const summary: AboutData[] = [
  {
    description: "A computer scientist, maybe"
  }
]

export default function AboutSummary() {
  return <SectionTemplate
    title="Background"
    borderColor="border-blue-300"
    textColor="text-blue-300"
    data={summary}
  />
}
