import ReadingListTable from "@/components/reading-list/ReadingListTable";

export enum ReadingRank {
  Outstanding = "Outstanding",
  VeryGood = "Very Good",
  Good = "Good",
  Okay = "Okay",
}

export interface ReadingEntry {
  name: string;
  author: string;
  url: string;
  coverImageUrl: string | null;
  rank: ReadingRank;
  storyRank: ReadingRank;
  artRank: ReadingRank;
}

const readingListSheetUrl = `
	https://docs.google.com/spreadsheets/d/e/2PACX-1vSv-3PSIHo-d9bD4VFq_mg_B1JpIdZ_4P8bSBLR4x2fPfqTnpMyxJS95xJaNn-oms48TOR3DKct_ET_/pub?output=csv
`;

const fetchReadingList = async () => {
  try {
    const queryData = await fetch(readingListSheetUrl, {
      cache: "no-cache",
    });
    const rawReadingListData = await queryData.text();
    const readingListLines = rawReadingListData.split("\n");

    const readingListHeaders = readingListLines[0].replace("\r", "").split(",");
    const readingListData = readingListLines.slice(1).map((line) => {
      const values = line.replace("\r", "").split(",");
      return values.reduce((readingObject, value, idx) => {
        readingObject[readingListHeaders[idx]] =
          value.length === 0 ? null : value;
        return readingObject;
      }, Object());
    });

    return readingListData as ReadingEntry[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default async function ReadingListPage() {
  const readingList = await fetchReadingList();

  return (
    <div className="p-8">
      <div className="px-2 mb-8">
        <h1>Reading List</h1>
        <h6 className="opacity-80">
          Subjective opinion. Covers are only for reference purpose.
        </h6>
      </div>
      <ReadingListTable readingList={readingList} />
    </div>
  );
}
