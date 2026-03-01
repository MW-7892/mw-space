"use client";

import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="mb-8">Contact</h1>
      <div className="flex flex-col content-center items-center">
        <div className="mb-16 opacity-90 mix-blend-overlay pt-24">
          <Image src="kaomoji.svg" width={512} height={512} alt="fumo-face" />
        </div>
        <h6 className="mb-4 text-center">no contact for you</h6>
        <p className="text-xs text-secondary">(sorry)</p>
      </div>
    </div>
  );
}
