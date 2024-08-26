import { Rubik } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const rubikBold = Rubik({
  weight: "400",
  subsets: ['latin']
})

export default function MainProfile() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="flex-none">
        <Image
          src="/profile.png"
          width={300}
          height={300}
          className="rounded-full m-auto"
          alt="M-W's Profile Image"
        />
      </div>
      <div className="grow grid content-start pt-4 lg:pt-0 lg:pl-16 text-center lg:text-left">
        <div className="row h-fit">
          <text
            className={`text-[84px] ${rubikBold.className} align-baseline
                        bg-clip-text text-transparent blue-purple-gradient`}
          >
            MW-7892
          </text>
        </div>
        <div className="row">
          <p>
            Hi! 👋 I enjoy working with computer, especially ones that requires coding. This site is created to 
            express myself and displays projects that I have decided to work on.
          </p>
        </div>
        <div className="row text-right place-self-stretch mt-5">
          <Link href="/about" className="text-link">
            💡 More about myself →
          </Link>
        </div>
      </div>
    </div>
  )
}
