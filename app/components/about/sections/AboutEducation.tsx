import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const education: AboutData[] = [
  {
    suptitle: "Apr 2022 - Mar 2026",
    title: "B.Eng. in Transdisciplinary Science and Engineering",
    subtitle: {
      name: "@ Institute of Science Tokyo",
      link: "https://www.isct.ac.jp/en",
    },
    description: "GPA 3.97/4.50",
  },
  {
    suptitle: "May 2019 - Mar 2022",
    title: "High School Diploma",
    subtitle: {
      name: "@ Mahidol Wittayanusorn School",
      link: "https://www.mwit.ac.th",
    },
    description: "GPA 3.98/4.00",
  },
];

export default function AboutEducation() {
  return <SectionTemplate title="Education" data={education} />;
}
