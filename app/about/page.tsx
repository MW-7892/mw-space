import AboutSummary from "@/components/about/sections/AboutSummary"
import AboutEducation from "@/components/about/sections/AboutEducation"
import { Lexend_Deca } from "next/font/google"
import { FaInfo } from "react-icons/fa"
import AboutWork from "@/components/about/sections/AboutWork"
import AboutNavigation from "@/components/about/AboutNavigation"

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
      <div className="grid grid-cols-6 mt-8">
        <div className="col-span-5 space-y-6">
          <AboutSummary />
          <AboutWork />
          <AboutEducation />
        </div>
        <div className="col-span-1">
          <AboutNavigation />
        </div>
      </div>
    </div>
  )
}
