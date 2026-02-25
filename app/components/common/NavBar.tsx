"use client";

import { useRouter } from "next/navigation";
import { Karla } from "next/font/google";
import { RiHome2Fill } from "react-icons/ri";
import { FaCircleInfo, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

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
      text: "Home",
      link: "/",
    },
    {
      icon: <FaCircleInfo />,
      text: "About",
      link: "/about",
    },
    {
      icon: <FaPhoneAlt />,
      text: "Contact",
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
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <button
          key={route.link}
          className="nav-button group cursor-pointer"
          onClick={() => router.push(route.link)}
        >
          <div className="nav-button-icon group-hover:opacity-100 group-hover:-translate-x-9">
            {route.icon}
          </div>
          <div
            className={`nav-button-text group-hover:translate-x-[calc(50%-1.25rem)]`}
          >
            {route.text}
          </div>
        </button>
      ))}
    </div>
  );
}
