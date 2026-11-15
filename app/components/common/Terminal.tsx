"use client";

import { ReactNode } from "react";
import { CgMaximize } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import Image from "next/image";

export default function Terminal({
  children,
  title,
  isFillHeight = false,
}: {
  children: ReactNode;
  title: string;
  isFillHeight?: boolean;
}) {
  const screenFillHeight =
    "h-[calc(100vh-theme(space.20))] lg:h-[calc(100vh-theme(space.10))]";
  return (
    <div
      className={`backdrop-blur-xs backdrop-brightness-110 border border-gray-50 lg:mt-10 z-10
				w-full flex flex-col ${isFillHeight ? screenFillHeight + " rounded-t-lg border-b-transparent" : "h-fit rounded-lg"}
				selection:text-background overflow-hidden selection:bg-foreground bg-background-2/30`}
    >
      <div className="h-8 w-full shrink-0 bg-gray-50 flex justify-between text-background px-2 items-center">
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
      <div className="min-h-0 flex-1 overflow-y-auto terminal-scrollbar">
        {children}
      </div>
    </div>
  );
}
