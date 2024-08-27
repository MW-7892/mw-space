import { SummaryListItemData } from "@/components/home/ProfileSummary";
import { FaLaravel } from "react-icons/fa";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";

export const educations: SummaryListItemData[] = [
  { 
    icon: '🖥️',
    title: 'Visual Alpha',
    shortDesc: 'Sep 2023 - Present',
  },
  {
    icon: '🎓',
    title: 'Tokyo Institute of Technology',
    shortDesc: 'Apr 2022 - Mar 2026 (GPA 3.95/4.50)',
  },
  {
    icon: '🏫',
    title: 'Mahidol Wittayanusorn',
    shortDesc: 'May 2019 - Mar 2022 (GPA 3.98/4.00)'
  },
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
