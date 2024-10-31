import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

const summary: AboutData[] = [
  {
    description: `
      A Passionate engineering student with a strong background on programming
      and graphic design. Currently interested in trying out new things in information
      engineering field in order to to broaden my knowledge and improve people's quality of life.
    `,
  },
];

export default function AboutSummary() {
  return (
    <SectionTemplate
      id="summary"
      title="Summary"
      borderColor="border-blue-300"
      textColor="text-blue-300"
      data={summary}
    />
  );
}
