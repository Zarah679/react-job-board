/* eslint-disable react/prop-types */

const LoadMoreButton = ({ visibleCount, totalJobs, onLoadMore }) => {

  if (visibleCount >= totalJobs) return null;

  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={onLoadMore}
        className="px-6 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
      >
        Load More
      </button>
    </div>  
  )
}

export default LoadMoreButton
