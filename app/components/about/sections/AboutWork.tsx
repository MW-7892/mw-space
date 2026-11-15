import SectionTemplate, { AboutData } from "@/components/about/SectionTemplate";

export const work: AboutData[] = [
  {
    suptitle: "Apr 2026 - Present",
    title: "Server-side Engineer",
    subtitle: {
      name: "@ LY Corporation",
      link: "https://www.lycorp.co.jp/en/",
    },
    preview: "Maintain and develop server-side features of LINE Sticker",
    description: [
      "Develop and deploy new internal features for LINE Stickers, Themes, and Emojis such as recommendation endpoints",
      "Coordinate with planners to develop projects impacting over 30 million users",
      "Monitor and maintain servers handling Sticker sending and purchasing with 99.9% uptime on high traffic",
    ],
  },
  {
    suptitle: "Sep 2023 - Feb 2026",
    title: "Full-Stack Developer Internship",
    subtitle: {
      name: "@ Visual Alpha",
      link: "https://visual-alpha.com/en/index/",
    },
    preview: "Developed a FinTech SaaS platform using React.js and Laravel",
    description: [
      "Developed a full-stack financial monitoring platform using React.js, GraphQL, and Laravel",
      "Learned version control system and CI/CD process in web development",
      "Gained experience in communication skills within the dev team and with client support",
    ],
  },
];

export default function AboutWork() {
  return <SectionTemplate title="Work" data={work} />;
}
