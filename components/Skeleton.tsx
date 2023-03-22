export function Skeleton() {
  return (
    <div className="animation-pulse my-8 flex min-w-full flex-col items-start gap-6 rounded p-6 md:flex-row md:gap-8 md:p-4">
      <div className="h-[240px] w-full rounded bg-brand-10 md:h-[164px] md:w-[420px]"></div>
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex h-full w-full flex-col gap-2">
          <div className="h-8 w-full rounded-md bg-brand-10"></div>
          <div className="h-8 w-2/3 rounded-md bg-brand-10"></div>
        </div>
        <div className="h-10 w-20 rounded bg-brand-10"></div>
      </div>
    </div>
  )
}
