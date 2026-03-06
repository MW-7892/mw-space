"use client";

import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Contact = {
  icon: string | JSX.Element;
  name: string;
  username: string;
  link: string;
};

const contacts: Contact[] = [
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    username: "mok-wattanasopon",
    link: "https://www.linkedin.com/in/mok-wattanasopon/",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    username: "MW-7892",
    link: "https://github.com/MW-7892",
  },
];

export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="mb-8">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        {contacts.map((contact) => (
          <Tooltip
            key={contact.name}
            content={contact.username}
            placement="bottom"
            className="bg-foreground text-background rounded-lg px-4 py-2"
          >
            <Link
              href={contact.link}
              className="hover:bg-foreground/30 flex flex-col
								gap-y-4 rounded-lg p-4 duration-100 text-center"
            >
              <div className="text-5xl w-full flex justify-center">
                {contact.icon}
              </div>
              <p>{contact.name}</p>
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
