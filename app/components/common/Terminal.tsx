"use client";

import { Space_Mono } from "next/font/google";
import { ReactNode } from "react";
import { CgMaximize } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import Image from "next/image";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Terminal({
  children,
  title,
  isFillHeight = false,
}: {
  children: ReactNode;
  title: string;
  isFillHeight?: boolean;
}) {
  return (
    <div
      className={`backdrop-blur-sm backdrop-brightness-[2.8] ${isFillHeight ? "h-[calc(100vh-theme(space.8))]" : "h-fit pb-10"}
        border rounded-lg mt-[5%] lg:mt-10 z-[-5] overflow-scroll w-full selection:text-black selection:bg-white`}
    >
      <div
        className={`h-8 w-full bg-white flex justify-between text-black px-2 items-center ${spaceMono.className}
          sticky inset-0 z-20`}
      >
        <div className="flex gap-x-2">
          <Image
            src="icon-black.svg"
            alt="Terminal Logo"
            width={24}
            height={24}
          />
          {title}
        </div>
        <div className="flex gap-x-1">
          <MdMinimize />
          <CgMaximize />
          <IoMdClose />
        </div>
      </div>
      <div className="pt-10">{children}</div>
    </div>
  );
}
