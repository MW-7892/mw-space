"use client";

import { useRouter } from "next/navigation";
import { RiHome2Fill } from "react-icons/ri";
import { FaCircleInfo, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type Route = {
  icon: string | JSX.Element;
  text: string;
  link: string;
};

type Contact = {
  icon: string | JSX.Element;
  link: string;
};

export default function NavBar() {
  const router = useRouter();

  const routes: Route[] = [
    {
      icon: <RiHome2Fill />,
      text: "home",
      link: "/",
    },
    {
      icon: <FaCircleInfo />,
      text: "about",
      link: "/about",
    },
    {
      icon: <FaPhoneAlt />,
      text: "contact",
      link: "/contact",
    },
  ];

  const contacts: Contact[] = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/mok-wattanasopon/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/MW-7892",
    },
  ];

  return (
    <div className="flex flex-col w-full py-4">
      {routes.map((route) => (
        <button
          key={route.link}
          className="nav-button cursor-pointer grid grid-cols-3 items-center px-8
						group hover:text-primary active:text-primary/50"
          onClick={() => router.push(route.link)}
        >
          <div className="nav-button-icon flex justify-end group-hover:hidden">
            {route.icon}
          </div>
          <div className="nav-button-icon hidden justify-end group-hover:flex">
            <IoIosArrowForward />
          </div>
          <div className="col-span-2 nav-button-text flex justify-start">
            {route.text}
          </div>
        </button>
      ))}
    </div>
  );
}
