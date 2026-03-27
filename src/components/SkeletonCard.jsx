
const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-xl bg-white dark:bg-slate-800 p-6 space-y-4 shadow-sm">
      <div className="h-4 w-1/3 bg-slate-300 dark:bg-slate-700 rounded"></div>
      <div className="h-6 w-2/3 bg-slate-300 dark:bg-slate-700 rounded"></div>
      <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded"></div>
    </div>
  )
}

export default SkeletonCard
