"use client";

import { Button } from "@headlessui/react";
import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const lexendDeca = Lexend_Deca({
  weight: ["400"],
  subsets: ["latin"],
});

export default function MainProfile() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="flex-none">
        <Image
          src="/profile.png"
          width={300}
          height={300}
          className="rounded-full m-auto"
          alt="M-W's Profile Image"
        />
      </div>
      <div className="grow grid content-start pt-4 lg:pt-2 lg:pl-16 text-center lg:text-left">
        <div className="row h-fit">
          <div
            className={`text-[84px] ${lexendDeca.className} align-baseline
                        bg-clip-text text-transparent blue-purple-gradient`}
          >
            MW-7892
          </div>
        </div>
        <div className="row pl-2 space-y-6">
          <p>
            Hi! 👋 I enjoy working with computer, especially ones that requires
            coding. This site is created to express myself and displays projects
            that I have decided to work on.
          </p>
          <div
            className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-content
                       w-fit rounded-md"
          >
            <Button
              className="p-3 tracking-wider uppercase rounded-md group
                         hover:bg-white hover:text-purple-500 duration-300 active:bg-white/60"
              as="button"
              onClick={() => router.push("/about")}
            >
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text
                           text-white group-hover:text-transparent duration-300"
              >
                More About Myself
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
