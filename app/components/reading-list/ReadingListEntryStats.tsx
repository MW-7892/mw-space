import { ReadingRank } from "@/reading-list/page";
import { getRankBackgroundColor } from "./ReadingListTable";

export default function ReadingListEntryStats({
  rank,
  storyRank,
  artRank,
}: {
  rank: ReadingRank;
  storyRank: ReadingRank;
  artRank: ReadingRank;
}) {
  const getRankBarLength = (rank: ReadingRank): number => {
    switch (rank) {
      case ReadingRank.Outstanding:
        return 3;
      case ReadingRank.VeryGood:
        return 3;
      case ReadingRank.Good:
        return 2;
      case ReadingRank.Okay:
        return 1;
      default:
        return 0;
    }
  };

  const getRankChar = (rank: ReadingRank): string => {
    switch (rank) {
      case ReadingRank.Outstanding:
        return "S";
      case ReadingRank.VeryGood:
        return "A+";
      case ReadingRank.Good:
        return "A";
      case ReadingRank.Okay:
        return "B";
      default:
        return "NA";
    }
  };

  const getRankTextColor = (rank: ReadingRank) => {
    switch (rank) {
      case ReadingRank.Outstanding:
        return "text-yellow-300";
      case ReadingRank.VeryGood:
        return "text-purple-300";
      case ReadingRank.Good:
        return "text-blue-300";
      case ReadingRank.Okay:
        return "text-green-300";
    }
  };

  return (
    <div className="mt-2 flex gap-x-4">
      <div className="my-auto flex items-center">
        <div className="relative size-14 mt-4">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              className="stroke-current text-foreground/10"
              strokeWidth="3"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              className={`stroke-current text-primary ${getRankTextColor(rank)}`}
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset={100 - (getRankBarLength(rank) * 100) / 3 + 13}
              strokeLinecap="round"
            ></circle>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-xl font-bold text-white">
              {getRankChar(rank)}
            </span>
          </div>
        </div>
      </div>
      <div className="text-xs grid gap-y-2 grow">
        <div className="grid gap-y-1">
          Story
          <div className="flex w-full h-2 gap-x-2">
            <div
              className={`h-full w-1/4 rounded-full ${getRankBackgroundColor(storyRank)}`}
              style={{ width: (getRankBarLength(storyRank) * 100) / 3 + "%" }}
            />
          </div>
        </div>
        <div className="grid gap-y-1">
          Art
          <div className="flex w-full h-2 gap-x-2">
            <div
              className={`h-full w-1/4 rounded-full ${getRankBackgroundColor(artRank)}`}
              style={{ width: (getRankBarLength(artRank) * 100) / 3 + "%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
