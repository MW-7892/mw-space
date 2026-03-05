"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Subtitle {
  name: string;
  link?: string;
}

export interface AboutData {
  suptitle?: string;
  title: string;
  subtitle?: Subtitle;
  preview?: string;
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

const ExpandableContent = ({
  title,
  suptitle,
  subtitle,
  preview,
  children,
}: {
  title: string;
  suptitle?: string;
  subtitle?: Subtitle;
  preview: string;
  children: ReactNode;
}) => (
  <Disclosure key={title}>
    {({ open }) => (
      <div
        className={`group border-4 border-transparent pl-4
${open ? "border-l-foreground" : "border-l-foreground/30 hover:border-l-foreground/60"}`}
      >
        <DisclosureButton
          className={`text-left group-hover:cursor-pointer ${open && "opacity-100"}
w-full flex justify-between opacity-85 group-hover:opacity-100`}
        >
          <div className="w-4/5">
            <p className="font-bold text-secondary mb-1">{suptitle}</p>
            <h6 className="line-height-xl">{title}</h6>
            <p
              className="font-title w-fit font-normal opacity-65
							mix-blend-screen hover:underline underline-offset-4"
            >
              {subtitle?.link !== undefined ? (
                <Link href={subtitle.link}>{subtitle.name}</Link>
              ) : (
                subtitle?.name
              )}
            </p>
            <p
              className="opacity-90 mt-4 group-data-open:opacity-0
									duration-200 group-data-open:absolute"
            >
              {preview}
            </p>
          </div>
          <IoIosArrowDown
            className="group-data-open:rotate-180 ml-2"
            size="24"
          />
        </DisclosureButton>
        <DisclosurePanel
          transition
          className="opacity-80 mt-4
						data-closed:opacity-0"
        >
          {children}
        </DisclosurePanel>
      </div>
    )}
  </Disclosure>
);

export default function SectionTemplate({
  title,
  data,
}: {
  title: string;
  data: AboutData[];
}) {
  return (
    <>
      <div className="w-fit mb-5">
        <h4 className="text-primary">{title}</h4>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        {data.map((item) => {
          return item.preview ? (
            <ExpandableContent
              title={item.title}
              suptitle={item.suptitle}
              subtitle={item.subtitle}
              preview={item.preview}
            >
              {Array.isArray(item.description) ? (
                <ListItems data={item.description} />
              ) : (
                <p>{item.description}</p>
              )}
            </ExpandableContent>
          ) : (
            <div className="group border-4 border-transparent pl-4 border-l-foreground/30 hover:border-l-foreground/60">
              <div
                className="text-left group-hover:cursor-default w-full flex justify-between
									opacity-85 group-hover:opacity-100"
              >
                <div className="w-4/5">
                  <p className="font-bold text-secondary mb-1">
                    {item.suptitle}
                  </p>
                  <h6 className="line-height-xl">{item.title}</h6>
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
              </div>
              <div className="opacity-80 mt-4">{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
