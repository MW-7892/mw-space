import Image from "next/image";

export default function ProfileTop() {
  return (
    <div className="grid grid-cols-1 px-2 mt-6 mb-20 justify-center">
      <div className="flex-none">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          className="rounded-full m-auto"
          alt="M-W's Profile Image"
        />
      </div>
      <div className="grow grid content-start pt-4 text-center">
        <div className="row h-fit flex justify-center">
          <h1
            className={`text-[4.3rem] lg:text-[5.15rem] font-title align-baseline
												bg-clip-text text-transparent primary-gradient`}
          >
            MW-7892
          </h1>
        </div>
        <div className="grid-cols-1 row pl-2 space-y-6">
          <p className="row flex justify-center">
            I write code, play rhythm games, and try to learn Japanese.
          </p>
        </div>
      </div>
    </div>
  );
}
