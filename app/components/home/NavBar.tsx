'use client'

import { useRouter } from 'next/navigation'
import { Montserrat } from "next/font/google";
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function NavBar() {
  const router = useRouter()

  return (
    <div className={`min-h-screen w-fit bg-slate-50 sticky top-0 ${montserrat.className}`}>
      <div
        className="flex flex-wrap xl:flex-nowrap justify-center bg-slate-800 px-6 py-4"
      >
        <Image
          src="/profile.png"
          width={64}
          height={64}
          alt="M-W's Profile Picture"
          className="rounded-full"
        />
        <div className="grow grid xl:pl-4 pt-3 xl:pt-1 text-center xl:text-left">
          <div className="row font-bold">MW-7892</div>
          <div className="row text-xs">Add some icons here</div>
        </div>
      </div>
      <button className="nav-button" onClick={() => router.push('/')}>
        Home
      </button>
      <button className="nav-button" onClick={() => router.push('/about')}>
        About
      </button>
      <button className="nav-button" onClick={() => router.push('/contact')}>
        Contact
      </button>
      <button className="nav-button" onClick={() => router.push('/idk')}>
        Idk
      </button>
    </div>
  )
}
