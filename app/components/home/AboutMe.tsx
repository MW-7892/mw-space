"use client";

import { Button } from "@headlessui/react";
import { DM_Mono } from "next/font/google";
import { useRouter } from "next/navigation";

const titleFont = DM_Mono({
  weight: ["500"],
  subsets: ["latin"],
});

export default function AboutMe() {
  const router = useRouter();
  return (
    <div className="grid-cols-1 bg-slate-500/20 pb-8 space-y-8">
      <div className="row border border-transparent border-t-white my-8 border-dashed"></div>
      <div className="row flex justify-center">
        <h2 className={`${titleFont}`}>About Me</h2>
      </div>
      <div className="grid grid-cols-3 px-10 space-x-10">
        <div className="col">
          <div className="w-full h-full bg-white"></div>
        </div>
        <div className="col col-span-2 space-y-6">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-content
											 w-fit rounded-md"
          >
            <Button
              className="p-3 tracking-wider uppercase rounded-md group cursor-pointer
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
