import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export default function AboutBackground() {
  const data: AboutData[] = [
    {
      title: 'test title',
      description: `test description test description
      test description description description description description`
    },
    {
      title: 'test title',
      description: 'test description'
    },
  ]

  return <SectionTemplate
    title="Background"
    borderColor="border-blue-300"
    textColor="text-blue-300"
    data={data}
  />
}
