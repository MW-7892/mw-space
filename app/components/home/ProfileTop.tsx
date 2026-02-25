import { DM_Mono } from "next/font/google";
import Image from "next/image";

const nameFont = DM_Mono({
  weight: ["500"],
  subsets: ["latin"],
});

export default function ProfileTop() {
  return (
    <div className="grid grid-cols-1 px-2 mt-6 mb-20 justify-center">
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
            className={`text-[64px] sm:text-[84px] ${nameFont.className} align-baseline
												bg-clip-text text-transparent blue-purple-gradient`}
          >
            MW-7892
          </div>
        </div>
        <div className="grid-cols-1 row pl-2 space-y-6">
          <div className="row flex justify-center">
            I write code, play rhythm games, and try to learn Japanese.
          </div>
        </div>
      </div>
    </div>
  );
}
