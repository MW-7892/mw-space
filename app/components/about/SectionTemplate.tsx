import SectionContainer from "./SectionContainer";

export interface AboutData {
  title: string
  description: string
}

export default function SectionTemplate({
  borderColor,
  textColor,
  title,
  data
}: {
  borderColor: string
  textColor: string
  title: string
  data: AboutData[]
}) {
  return (
    <SectionContainer borderColor={borderColor}>
      <>
        <div className={`w-fit mb-6 ${textColor}`}>
          <h2 className="text-2xl mb-2">{ title }</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          { data.map(item => (
            <div key={ item.title }>
              <h3 className="text-lg font-bold text-slate-200 mb-1">
                { item.title }
              </h3>
              <p className="text-slate-400">{ item.description }</p>
            </div>
          ))}
        </div>
      </>
    </SectionContainer>
  )
}
