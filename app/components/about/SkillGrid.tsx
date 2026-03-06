"use client";

import { useState } from "react";
import { AboutDataSkill } from "./sections/AboutSkills";
import { MdAdd, MdRemove } from "react-icons/md";

export default function SkillGrid({ skill }: { skill: AboutDataSkill }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div key={skill.title} className="grid gap-y-4">
      <h6 className="text-secondary">{skill.title}</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
        {skill.skills.slice(0, isExpanded ? undefined : 4).map((item) => (
          <div
            key={item.name}
            className="flex rounded-lg bg-foreground/20 px-4 py-3 gap-y-4
						hover:bg-foreground/30 bg-blend-overlay cursor-default flex-col"
          >
            <div className="text-2xl pt-1 text-accent-2 mix-blend-overlay">
              {item.icon}
            </div>
            <div className="align-text-top wrap-break-word">{item.name}</div>
          </div>
        ))}
      </div>
      {skill.skills.length > 4 && (
        <div className="flex justify-end">
          <div
            className="hover:underline cursor-pointer opacity-80 w-fit flex gap-x-2 items-center"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <MdRemove /> Show less
              </>
            ) : (
              <>
                <MdAdd /> Show more
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
