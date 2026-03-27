

const EmptyState = () => {
  return (
    <div className="text-center mx-auto my-16 p-6 min-h-[300px] w-[450px] flex flex-col justify-center items-center ">
        <img 
            src="/emptyState.svg" 
            alt="empty state"
            className="" 
        />
        <h2 className="text-2xl font-semibold mb-4">No jobs found</h2>
        <p>Try adjusting your filters or search terms.</p>
    </div>
  )
}

export default EmptyState
