"use client";

import React from "react";
import { Inter, Lexend_Deca } from "next/font/google";
import { FaPaperPlane } from "react-icons/fa";
import { dummy } from "@/data/ProfileSummaryItems";

const lexendDeca = Lexend_Deca({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
});

export default function Contact() {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div className="m-10 mt-24 lg:mt-10">
      <div className="flex flex-wrap">
        <div
          className="grid rounded-full text-slate-900 text-2xl
            bg-gradient-to-r from-purple-400 to-red-400 w-[40px] h-[40px]
            place-content-center self-center pr-1 mr-5 mb-4 sm:mb-0"
        >
          <FaPaperPlane onClick={() => setCounter(counter + 1)} />
        </div>
        <div>
          <h1 className={`${lexendDeca.className}`}>Contact</h1>
        </div>
      </div>
      {counter >= 53 ? (
        <div className="mt-6 items-center space-y-6">
          <span className="flex justify-center">
            {eval(atob(dummy.slice(477, 549) + dummy.slice(0, 384)))}
          </span>
          <div className="flex justify-center">
            <img
              className="rounded-xl"
              src={eval(atob(dummy.slice(384, 477) + dummy.slice(549, 612)))}
            />
          </div>
        </div>
      ) : (
        <div className={`mt-8 ${inter.className} w-3/4 space-y-2`}>
          <p>
            {" "}
            Currently, I do not publicly provide my contact information 🙇{" "}
          </p>
          <p>
            If you managed to discover this website, you probably already have
            my contact.
          </p>
        </div>
      )}
    </div>
  );
}
