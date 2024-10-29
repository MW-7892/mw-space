import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})

export default function SectionContainer({
  children,
  borderColor
}: {
  children: React.JSX.Element | string
  borderColor: string
}) {
  return (
    <div
      className={`border-l-[8px] ${borderColor} pl-3 max-w-[1000px]
        ${poppins.className}
        hover:bg-gradient-to-r from-black/60 to-transparent`}
    >
      { children }
    </div>
  )
}
