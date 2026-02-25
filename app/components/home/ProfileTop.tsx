"use client";

import { Button } from "@headlessui/react";
import { DM_Mono } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const nameFont = DM_Mono({
  weight: ["500"],
  subsets: ["latin"],
});

export default function ProfileTop() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 px-2 mt-6 justify-center">
      <div className="flex-none">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          className="rounded-full m-auto"
          alt="M-W's Profile Image"
        />
      </div>
      <div className="grow grid content-start pt-4 text-center">
        <div className="row h-fit flex justify-center">
          <div
            className={`text-[84px] ${nameFont.className} align-baseline
												bg-clip-text text-transparent blue-purple-gradient`}
          >
            MW-7892
          </div>
        </div>
        <div className="grid-cols-1 row pl-2 space-y-6">
          <div className="row flex justify-center">
            I write code, play rhythm games, and try to learn Japanese.
          </div>
          <div className="row flex justify-center">
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
    </div>
  );
}
