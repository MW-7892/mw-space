import { Barlow } from "next/font/google"
import { educations, hobbies, skills } from "@/data/ProfileSummaryItems"
import { Tooltip } from "@nextui-org/tooltip"

const barlowBold = Barlow({
  weight: "600",
  subsets: ['latin']
})

const TitleCard = ({ text }: { text: string }) => {
  return (
    <div
      className="card rounded-md bg-slate-600 capitalize text-slate-100
        text-center font-semibold text-xl py-2"
    >
      { text }
    </div>
  )
}

export type SummaryListItemData = {
  icon: string | React.ReactNode
  title: string
  shortDesc?: string
  description?: string
}

const SummaryListItems = ({
  data
}: {
  data: SummaryListItemData[]
}) => {
  return (
    <>
      { data.map(item => (
        <Tooltip content={item.shortDesc} classNames={{ content: item.shortDesc ? ['tooltip'] : [] }}>
          <button
            className="card rounded-md bg-transparent hover:bg-slate-500/25 duration-200
              text-slate-100 text-center py-2"
          >
            <div className="flex items-center justify-center gap-x-3">
              <div>{ item.icon }</div>
              <div>{ item.title }</div>
            </div>
          </button>
        </Tooltip>
      ))}
    </>
  )
}

export default function ProfileSummary() {
  return (
    <div>
      <div 
        className="card rounded-md bg-transparent border border-slate-300
          text-slate-100 mb-6 text-center py-2"
      >
        <h1 className={`${barlowBold.className}`}>
          A Brief Look
        </h1>
      </div>
      <div className="card rounded-md p-6 bg-slate-800/70 h-fit border border-slate-700">
        <div 
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-x-8 gap-y-6 lg:gap-y-0"
        >
          <div className="grid gap-y-2 content-start md:col-span-2 lg:col-span-1">
            <div className="row"><TitleCard text="Background" /></div>
            <SummaryListItems data={educations} />
          </div>
          <div className="grid gap-y-2 content-start">
            <div className="row"><TitleCard text="Skills" /></div>
            <SummaryListItems data={skills} />
          </div>
          <div className="grid gap-y-2 content-start">
            <div className="row"><TitleCard text="Hobbies" /></div>
            <SummaryListItems data={hobbies} />
          </div>
        </div>
      </div>
    </div>
  )
}
