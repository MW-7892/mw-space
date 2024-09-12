import AboutBackground from "@/components/about/sections/AboutBackground"
import { Lexend_Deca } from "next/font/google"
import { FaInfo } from "react-icons/fa"

const lexendDeca = Lexend_Deca({
  weight: "400",
  subsets: ['latin']
})

export default function About () {
  return (
    <div className="m-10 mt-24 lg:mt-10">
      <div className="flex flex-wrap">
        <div
          className="grid rounded-full text-slate-900 text-2xl
            bg-gradient-to-r from-cyan-200 to-blue-400 w-[40px] h-[40px]
            place-content-center self-center mr-5 mb-4 sm:mb-0"
        >
          <FaInfo />
        </div>
        <div> <h1 className={`${lexendDeca.className}`}>About Me</h1> </div>
      </div>
      <div className="grid grid-cols-1 mt-8">
        <div>
          <AboutBackground />
        </div>
      </div>
    </div>
  )
}
