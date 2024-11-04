import { Lexend_Deca, Poppins } from "next/font/google";
import { FaPaperPlane } from "react-icons/fa";

const lexendDeca = Lexend_Deca({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="m-10 mt-24 lg:mt-10">
      <div className="flex flex-wrap">
        <div
          className="grid rounded-full text-slate-900 text-2xl
            bg-gradient-to-r from-cyan-200 to-blue-400 w-[40px] h-[40px]
            place-content-center self-center pr-1 mr-5 mb-4 sm:mb-0"
        >
          <FaPaperPlane />
        </div>
        <div>
          <h1 className={`${lexendDeca.className}`}>Contact</h1>
        </div>
      </div>
      <div className={`mt-8 ${poppins.className} w-3/4 space-y-3`}>
        <p> Currently, I do not publicly provide my contact information 🙇 </p>
        <p>
          {" "}
          If you managed to discover this website, you probably already have my
          contact.{" "}
        </p>
      </div>
    </div>
  );
}
