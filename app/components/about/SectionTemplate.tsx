import SectionContainer from "./SectionContainer";

export interface AboutData {
  title?: string;
  subtitle?: string;
  description: string | string[];
}

const ListItems = ({ data }: { data: string[] }) => {
  return (
    <ul className="list-disc text-slate-400 ml-4 space-y-1">
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default function SectionTemplate({
  id,
  borderColor,
  textColor,
  title,
  data,
}: {
  id?: string;
  borderColor: string;
  textColor: string;
  title: string;
  data: AboutData[];
}) {
  return (
    <SectionContainer borderColor={borderColor}>
      <>
        <div className={`w-fit mb-6 ${textColor}`}>
          <h2 className="text-2xl mb-2">{title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {data.map((item) => (
            <div key={item.title}>
              {item.title && (
                <h3 id={id} className="text-lg font-bold text-slate-200 mb-1">
                  {item.title}
                  <span
                    className={`ml-2 text-sm font-thin ${textColor} align-middle`}
                  >
                    {" "}
                    {item.subtitle}{" "}
                  </span>
                </h3>
              )}
              {Array.isArray(item.description) ? (
                <ListItems data={item.description} />
              ) : (
                <p className={`text-slate-${item.title ? 400 : 200}`}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </>
    </SectionContainer>
  );
}
