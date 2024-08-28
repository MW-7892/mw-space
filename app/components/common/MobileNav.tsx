'use client'

import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import NavBar from "./NavBar";
import { Transition, TransitionChild } from "@headlessui/react";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  })

  return (
    <>
      <button
        className="flex lg:hidden fixed top-0 left-0 m-6 border border-white rounded-md
          text-3xl p-2 bg-slate-900 hover:bg-slate-300/50 duration-300 active:bg-slate-300 z-10"
        onClick={() => setIsNavOpen(true)}
      >
        <MdOutlineMenu />
      </button>
      <Transition show={isNavOpen}>
        <div
          className="bg-black/80 fixed top-0 left-0 inset-0 data-[closed]:bg-black/0 duration-300 z-20"
          onClick={() => setIsNavOpen(false)}
        >
          <TransitionChild>
            <div className="transition fixed h-screen w-2/5 bg-slate-900/50 
                data-[closed]:-translate-x-80
                duration-300 ease-in-out"
            >
              <NavBar />
            </div>
          </TransitionChild>
        </div>
      </Transition>
    </>
  )
}
