import { Inter } from "next/font/google";
import SectionContainer from "./SectionContainer";
import Link from "next/link";

const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
});

export interface AboutData {
  suptitle?: string;
  title?: string;
  subtitle?: { name: string; link?: string };
  description: string | string[];
}

const ListItems = ({ data }: { data: string[] }) => {
  return (
    <ul
      className={`list-disc text-slate-300 ml-4 space-y-1 ${inter.className} mt-2`}
    >
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
        <div className={`w-fit mb-5 ${textColor}`}>
          <h2 className="text-2xl mb-2">{title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {data.map((item) => (
            <div key={item.title}>
              {item.title && (
                <>
                  <p className={`text-sm italic text-slate-300 mb-1`}>
                    {item.suptitle}
                  </p>
                  <h3 id={id} className="text-lg font-bold text-slate-200 mb-1">
                    {item.title}
                    <span
                      className={`ml-2 text-sm normal-case font-thin ${textColor} align-middle`}
                    >
                      {item.subtitle?.link !== undefined ? (
                        <Link href={item.subtitle.link}>
                          {item.subtitle.name}
                        </Link>
                      ) : (
                        item.subtitle?.name
                      )}
                    </span>
                  </h3>
                </>
              )}
              {Array.isArray(item.description) ? (
                <ListItems data={item.description} />
              ) : (
                <p
                  className={`${inter.className} ${item.title ? "text-slate-300 text-[16px] font-light" : "text-slate-200"}`}
                >
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
