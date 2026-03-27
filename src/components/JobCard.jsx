/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
const JobCard = ({ job }) => {
  return (
    <Link to={`/job/${job.id}`}>
      <div className="relative h-full flex flex-col pt-10 bg-white dark:bg-slate-800 mt-6 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left">

        <div className="absolute -top-6 left-6 h-12 w-12 rounded-xl flex items-center justify-center
          shadow-md"
          style={{ backgroundColor: job.logoBackground}}>
          <img 
            src={job.logo} 
            alt={job.company}
            className="h-6 w-6" 
          />
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">{job.postedAt} • {job.contract}</p>

        <h2 className="mt-2 text-lg sm:text-xl leading-snug line-clamp-2 font-semibold text-slate-900 dark:text-slate-100">
            {job.position}
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">{job.company}</p>

        <p className="mt-4 text-sm text-indigo-500 font-medium">
            {job.location}
        </p>
      </div>
    </Link>
    

  )
}

export default JobCard
