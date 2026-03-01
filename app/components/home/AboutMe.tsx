"use client";

import { Button } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const aboutData = [
  "Server-side engineer at ◻️◻️◻️◻️◻️◻️",
  "Institute of Science Tokyo (formerly Tokyo Tech) alumni",
  "International Olympiad in Informatics (IOI) contestant",
];

export default function AboutMe() {
  const router = useRouter();
  return (
    <div
      className="grid-cols-1 bg-background-3/20 pb-12 space-y-8 border
				border-transparent border-y-foreground border-dashed py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 px-10 space-x-10">
        <div className="col col-span-2">
          <div
            className="w-full h-full justify-center content-center p-4
						hidden lg:flex opacity-95 mix-blend-overlay"
          >
            <Image
              src="kaomoji.svg"
              width="256"
              height="256"
              alt="M-W Space logo"
            />
          </div>
        </div>
        <div className="col col-span-3">
          <h2 className="font-title mb-6 text-primary">About Me</h2>
          <div className="mb-10">
            <ul className="space-y-4">
              {aboutData.map((data) => (
                <li key={data} className="flex gap-x-2">
                  <span>
                    <MdKeyboardArrowRight
                      size="24"
                      className="text-secondary"
                    />
                  </span>
                  <span>{data}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="button-gradient bg-clip-content w-fit rounded-md">
            <Button
              className="py-2 px-4 tracking-wider uppercase rounded-md group cursor-pointer
								hover:bg-foreground duration-300 active:bg-white/60"
              as="button"
              onClick={() => router.push("/about")}
            >
              <div
                className="primary-gradient bg-clip-text tracking-wider
									text-white group-hover:text-transparent duration-300
									group-hover:shadow-frozen-lake-950 flex gap-x-2"
              >
                <span>More About Myself</span>
                <span>
                  <MdKeyboardDoubleArrowRight
                    size="16"
                    className="h-full group-hover:text-accent-1 duration-300"
                  />
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
