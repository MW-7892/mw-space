'use client'

import { useRouter } from 'next/navigation'
import { Karla } from "next/font/google";
import { RiHome2Fill } from 'react-icons/ri';
import { FaCircleInfo, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

const rubik = Karla({ subsets: ["latin"] });

type Route = {
  icon: string | JSX.Element
  text: string
  link: string
}

type Contact = {
  icon: string | JSX.Element
  link: string
}

export default function NavBar() {
  const router = useRouter()

  const routes: Route[] = [
    {
      icon: <RiHome2Fill />,
      text: 'Home',
      link: '/'
    },
    {
      icon: <FaCircleInfo />,
      text: 'About',
      link: '/about'
    },
    {
      icon: <FaPhoneAlt />,
      text: 'Contact',
      link: '/contact'
    },
  ]

  const contacts: Contact[] = [
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/mok-wattanasopon/'
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/MW-7892'
    },
  ]

  return (
    <div className={`flex flex-col h-screen w-full bg-slate-900/50 sticky top-0 pt-6 ${rubik.className}`}>
      { routes.map(route => (
        <button className="nav-button group" onClick={() => router.push(route.link)}>
          <div className="nav-button-icon group-hover:opacity-100 group-hover:-translate-x-9">
            { route.icon }
          </div>
          <div className={`nav-button-text group-hover:translate-x-[calc(50%-1.25rem)]`}>{ route.text }</div>
        </button>
      ))}
      <div className="grow content-end">
        <div 
          className="flex w-full pb-8 text-2xl text-slate-400
            justify-center gap-x-3" 
        >
          { contacts.map(contact => (
            <Link href={contact.link} className="hover:text-slate-200 duration-300">
              { contact.icon }
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}
