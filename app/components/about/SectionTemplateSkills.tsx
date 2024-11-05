import SectionContainer from "./SectionContainer";

interface Skill {
  name: string;
  icon: React.JSX.Element;
  isInterest?: boolean;
}

export interface AboutDataSkill {
  title: string;
  skills: Skill[];
}

const ChipItems = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="flex flex-wrap gap-x-2 space-y-2 items-end">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={
            (!skill.isInterest
              ? `bg-gradient-to-r from-amber-400 to-orange-400 text-black 
                  hover:from-amber-500 hover:to-orange-600 `
              : `bg-transparent text-slate-200 border border-amber-400 
                  hover:bg-orange-400/30 `) +
            `w-fit h-fit flex space-x-2 items-center rounded-full select-none
              px-2 text-sm py-1 `
          }
        >
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default function SectionTemplateSkills({
  data,
}: {
  data: AboutDataSkill[];
}) {
  return (
    <SectionContainer borderColor="border-orange-300">
      <>
        <div id="skill" className="w-fit mb-5 text-orange-300">
          <h2 className="text-2xl mb-2">{"Skills & Interests"}</h2>
          <span className="flex space-x-3">
            <div className="flex items-center space-x-2 text-white">
              <div
                className="rounded-full bg-gradient-to-r from-amber-400
                           to-orange-400 w-5 h-5"
              />
              <span>Skills</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="rounded-full bg-transparent border border-amber-400 w-5 h-5" />
              <span>Interests</span>
            </div>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {data.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-bold text-slate-200 mb-1">
                {item.title}
              </h3>
              <ChipItems skills={item.skills} />
            </div>
          ))}
        </div>
      </>
    </SectionContainer>
  );
}
