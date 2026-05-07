import Link from "next/link";
import { IoIosUmbrella } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdBook } from "react-icons/md";

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
    icon: <MdBook />,
    name: "Reading",
    description: (
      <>
        Yep, I have a{" "}
        <Link href="/reading-list" className={`underline`}>
          reading list
        </Link>
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
