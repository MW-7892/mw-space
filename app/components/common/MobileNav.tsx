"use client";

import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import NavBar from "./NavBar";
import { Button, Transition } from "@headlessui/react";
import Terminal from "./Terminal";
import { IoClose } from "react-icons/io5";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="block lg:hidden py-4 space-y-4">
      <Button
        className="w-12 h-12 bg-gray-50 text-background flex justify-center
					items-center rounded-lg hover:cursor-pointer hover:opacity-70 duration-100 active:opacity-50"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <IoClose size="24" /> : <MdOutlineMenu size="24" />}
      </Button>
      <Transition show={isNavOpen}>
        <div className="transition data-[closed]:scale-0 duration-300 ease-in-out">
          <Terminal title="navbar">
            <NavBar />
          </Terminal>
        </div>
      </Transition>
    </div>
  );
}
