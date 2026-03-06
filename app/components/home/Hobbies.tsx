import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";
import { IoIosUmbrella } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { PiBowlFoodFill } from "react-icons/pi";

const notoSansThai = Noto_Sans_Thai({
  weight: ["400"],
  subsets: ["thai"],
});

const hobbyData = [
  {
    icon: <IoIosUmbrella />,
    name: "vtuber",
    description: "A fan of certain illustrator-vtuber",
  },
  {
    icon: <IoGameController />,
    name: "maimai",
    description: "Around 15500 rating",
  },
  {
    icon: <PiBowlFoodFill />,
    name: "cooking",
    description: (
      <>
        Only{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Phat_kaphrao"
          className={`${notoSansThai.className} underline`}
        >
          กะเพราหมูกรอบ
        </Link>
        though
      </>
    ),
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-center">
        <h2 className="text-primary">Hobbies</h2>
      </div>
      <div className="grid lg:grid-cols-3 px-8 gap-x-4 gap-y-10 justify-items-center text-center">
        {hobbyData.map((data) => (
          <div key={data.name} className="px-4">
            <div className="text-[48pt] flex justify-center mb-4 opacity-80 mix-blend-overlay">
              {data.icon}
            </div>
            <h5 className="font-medium text-secondary">{data.name}</h5>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
