"use client";

import { ReadingEntry, ReadingRank } from "@/reading-list/page";
import { Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ReadingListEntryStats from "./ReadingListEntryStats";
import { Tooltip } from "@nextui-org/tooltip";
import { FaCircleQuestion } from "react-icons/fa6";

const titleFont = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

// TODO: Check regex url in case I don't have one

export const getRankBackgroundColor = (rank: ReadingRank) => {
  switch (rank) {
    case ReadingRank.Outstanding:
      return "bg-linear-to-r from-amber-300 to-orange-400";
    case ReadingRank.VeryGood:
      return "bg-linear-to-r from-purple-300 to-pink-400";
    case ReadingRank.Good:
      return "bg-linear-to-r from-blue-300 to-cyan-400";
    case ReadingRank.Okay:
      return "bg-linear-to-r from-green-300 to-lime-400";
  }
};

export default function ReadingListTable({
  readingList,
}: {
  readingList: ReadingEntry[];
}) {
  const [includedRanks, setIncludedRanks] = useState<Set<ReadingRank>>(
    new Set(Object.values(ReadingRank)),
  );

  const filteredReadingList = useMemo(() => {
    return readingList.filter((entry) => includedRanks.has(entry.rank));
  }, [readingList, includedRanks]);

  const getRankBorderColor = (rank: ReadingRank) => {
    switch (rank) {
      case ReadingRank.Outstanding:
        return "border-amber-300";
      case ReadingRank.VeryGood:
        return "border-purple-300";
      case ReadingRank.Good:
        return "border-blue-300";
      case ReadingRank.Okay:
        return "border-green-300";
    }
  };

  const handleClickRankFilter = (rank: ReadingRank) => {
    if (!includedRanks.has(rank)) {
      setIncludedRanks((prev) => {
        prev.add(rank);
        return new Set(prev);
      });
      return;
    }
    setIncludedRanks((prev) => {
      prev.delete(rank);
      return new Set(prev);
    });
    return;
  };

  const rankExplanationText = (
    <p>
      <b>{"Outstanding (S)"}</b>
      {": One of the best things I have read"} <br />
      <b>{"Very Good (A+)"}</b>
      {": Highly recommended"} <br />
      <b>{"Good (A)"}</b>
      {": Nice one, would also recommend"} <br />
      <b>{"Okay (B)"}</b>
      {": Pretty good, but low priority read"}
    </p>
  );

  return (
    <div>
      <div className="flex justify-end mb-4 px-4">
        <div className="flex gap-x-2 items-center">
          <Tooltip
            content={rankExplanationText}
            placement="top"
            className="bg-foreground text-background rounded-lg px-4 py-2"
          >
            <span>
              <FaCircleQuestion />
            </span>
          </Tooltip>
          <span className="mr-4">Filter: </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
          {Object.values(ReadingRank).map((rank) => (
            <div
              key={rank}
              className={`rounded-full ${getRankBorderColor(rank)} border px-2 text-black
								${includedRanks.has(rank) ? getRankBackgroundColor(rank) + " border-0" : "bg-transparent text-white"}
								cursor-pointer hover:opacity-90 text-center`}
              onClick={() => handleClickRankFilter(rank)}
            >
              {rank}
            </div>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
        {filteredReadingList.map((entry) => (
          <Link
            key={entry.name}
            target="_blank"
            href={entry.url}
            className="rounded-xl overflow-hidden border-w-2 border-white hover:bg-background-3/30
							duration-100 cursor-pointer p-4"
          >
            <div className="w-full mb-4">
              <Image
                src={entry.coverImageUrl ?? "/image-placeholder.png"}
                className={`rounded-lg w-full ${!entry.coverImageUrl && "border border-white"}`}
                width={100}
                height={200}
                alt={entry.name}
              />
            </div>
            <div>
              <div className={`${titleFont.className} font-black text-md`}>
                {entry.name}
              </div>
              <div className={`${titleFont.className} font-light text-sm`}>
                {entry.author}
              </div>
              <ReadingListEntryStats
                rank={entry.rank}
                storyRank={entry.storyRank}
                artRank={entry.artRank}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
