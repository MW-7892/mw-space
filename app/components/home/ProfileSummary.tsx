'use client'

import { educations, hobbies, skills } from "@/data/ProfileSummaryItems"
import { Tooltip } from "@nextui-org/tooltip"
import { useState } from "react"
import TextDialog from "@/components/common/TextDialog"

const TitleCard = ({ text }: { text: string }) => {
  return (
    <div
      className="card rounded-md bg-amber-400/90 mix-blend-screen capitalize text-black
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
      { data.map(item => {
        const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
        return (
          <div key={item.title}>
            <Tooltip
              placement="right-start"
              content={item.shortDesc}
              classNames={{ content: item.shortDesc ? ['tooltip capitalize'] : [] }}
            >
              <button
                className={`card rounded-md bg-transparent hover:bg-slate-500/25 duration-200
                  text-slate-100 text-center py-2 active:bg-slate-500/50
                  ${isDialogOpen ? 'bg-slate-500/25' : ''}`}
                onClick={() => setIsDialogOpen(true)}
              >
                <div className="flex items-center justify-center gap-x-3">
                  <div>{ item.icon }</div>
                  <div>{ item.title }</div>
                </div>
              </button>
            </Tooltip>
            <TextDialog
                key={item.title}
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            >
                <div className="text-white w-[80vw] max-w-[500px] h-fit">
                  <h3 className="font-semibold">{ item.title }</h3>
                  <h4 className="text-slate-500 mb-4 capitalize">{ item.shortDesc }</h4>
                  <p className='text-slate-400 text-[18px]'>{ item.description }</p>
                </div>
            </TextDialog>
          </div>
        )})}
    </>
  )
}

export default function ProfileSummary() {
  return (
    <div>
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
