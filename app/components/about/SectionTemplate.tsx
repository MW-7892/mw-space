"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export interface AboutData {
  suptitle?: string;
  title?: string;
  subtitle?: { name: string; link?: string };
  description: string | string[];
}

const ListItems = ({ data }: { data: string[] }) => {
  return (
    <ul className="list-disc ml-4 space-y-1 mt-2">
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default function SectionTemplate({
  id,
  title,
  data,
}: {
  id?: string;
  title: string;
  data: AboutData[];
}) {
  return (
    <>
      <div className="w-fit mb-5">
        <h4 className="text-primary">{title}</h4>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        {data.map((item) => (
          <Disclosure key={item.title}>
            {({ open }) => (
              <div
                className={`group border-4 border-transparent
									${open ? "border-l-foreground" : "border-l-foreground/30"} pl-4`}
              >
                {item.title && (
                  <DisclosureButton
                    className="text-left hover:cursor-pointer hover:opacity-80 
											w-full flex justify-between"
                  >
                    <div className="w-4/5">
                      <p className="font-bold text-secondary mb-1">
                        {item.suptitle}
                      </p>
                      <h6 id={id} className="line-height-xl">
                        {item.title}
                      </h6>
                      <p
                        className="font-title w-fit font-normal opacity-65
													mix-blend-screen hover:underline underline-offset-4"
                      >
                        {item.subtitle?.link !== undefined ? (
                          <Link href={item.subtitle.link}>
                            {item.subtitle.name}
                          </Link>
                        ) : (
                          item.subtitle?.name
                        )}
                      </p>
                    </div>
                    <IoIosArrowDown
                      className="group-data-open:rotate-180 ml-2"
                      size="24"
                    />
                  </DisclosureButton>
                )}
                <DisclosurePanel
                  transition
                  className="opacity-80 mt-4 duration-200 ease-out 
										data-closed:-translate-y-6 data-closed:opacity-0"
                >
                  {Array.isArray(item.description) ? (
                    <ListItems data={item.description} />
                  ) : (
                    <p>{item.description}</p>
                  )}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
}
