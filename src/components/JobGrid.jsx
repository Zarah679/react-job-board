/* eslint-disable react/prop-types */
import EmptyState from "./EmptyState"
import JobCard from "./JobCard"

const JobGrid = ({ jobs }) => {

    if(jobs.length === 0) {
      return (
        <EmptyState />
      )
    } else {
        return (
          <section className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
    )
  }
}

export default JobGrid
