export default function PageLoading() {
  return (
    <div className="z-[900] bg-black w-screen h-screen absolute flex inset-0 animate-loading-page animation-delay-1000">
      <div className="m-auto w-[300px] h-8 z-[901] bg-transparent border-3 border-white rounded-lg p-1">
        <div className="z-[902] w-0 bg-white h-full rounded-xs animate-page-loading-bar animation-delay-100"></div>
      </div>
    </div>
  );
}
