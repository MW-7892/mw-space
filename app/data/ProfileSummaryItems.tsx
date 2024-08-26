import { SummaryListItemData } from "@/components/home/ProfileSummary";
import { FaLaravel } from "react-icons/fa";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";

export const educations: SummaryListItemData[] = [
  { icon: '🖥️', title: 'Visual Alpha', shortDesc: 'Sep 2023 - Present' },
  { icon: '🎓', title: 'Tokyo Institute of Technology' },
  { icon: '🏫', title: 'Mahidol Wittayanusorn' },
]

export const skills: SummaryListItemData[] = [
  { icon: <FaReact className="text-cyan-500" />, title: 'React.js' },
  { icon: <FaPython className="text-yellow-500" />, title: 'Python' },
  { icon: <SiCplusplus className="text-blue-500" />, title: 'C++' },
  { icon: <FaLaravel className="text-red-500" />, title: 'Laravel' },
]

export const hobbies: SummaryListItemData[] = [
  { icon: '🕹️', title: 'maimai' },
  { icon: '⌨️', title: 'Typing' },
]
