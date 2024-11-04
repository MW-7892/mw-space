import { Poppins } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";

interface NavigationLink {
  title: string;
  id: string;
}

const poppins = Poppins({
  weight: ["300", "500"],
  subsets: ["latin"],
});

const navigations: NavigationLink[] = [
  { title: "Summary", id: "summary" },
  { title: "Work", id: "work" },
  { title: "Projects", id: "projects" },
  { title: "Education", id: "education" },
  { title: "Skills", id: "skills" },
];

export default function AboutNavigation() {
  return (
    <div className="bg-black/80 p-5 rounded-lg sticky top-10">
      <h3 className={`${poppins.className} mb-6 font-bold text-slate-200`}>
        Contents
      </h3>
      <ul className={`${poppins.className} space-y-4 font-thin text-slate-300`}>
        {navigations.map((navigation) => (
          <li
            key={navigation.id}
            className="translate-x-2 hover:translate-x-0 
                       hover:text-blue-400 ease-in-out duration-300"
          >
            <a href={"/about#" + navigation.id} className="flex items-center">
              <IoIosArrowForward className="mr-3" /> {navigation.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
