import "../App.css";
import { useMemo, useState, useEffect } from "react";

// Filter Components
import SearchBar from "../components/SearchBar";
import LocationInput from "../components/LocationInput";
import FilterChips from "../components/FilterChips";
import Remote from "../components/Remote";
import JobGrid from "../components/JobGrid";
import SkeletonGrid from "../components/SkeletonGrid";
import LoadMoreButton from "../components/LoadMoreButton";

// Jobs Data
import jobs from "../../data/data.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState(""); // ✅ string, not boolean
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(9)


  //after 1 second, set isLoading(our loading state) to false and display job cards
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false)
    }, 1000) // 1 second

    return () => clearTimeout(timer)
  }, []) 

  //when filter changes, reset the visible job count
  useEffect(() => {
    setVisibleCount(9)
  }, [search, location, jobType, remoteOnly])
  

  const filteredJobs = useMemo(() => {
    const s = search.trim().toLowerCase();
    const l = location.trim().toLowerCase();

    return jobs
      .filter((job) =>
        `${job.position ?? ""} ${job.company ?? ""}`.toLowerCase().includes(s)
      )
      .filter((job) => (l ? (job.location ?? "").toLowerCase().includes(l) : true))
      .filter((job) => (jobType ? job.contract === jobType : true))
      .filter((job) => (remoteOnly ? job.remote === true : true));
  }, [search, location, jobType, remoteOnly]);


  //isLoading jsx
  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <SkeletonGrid />
      </div>
    );
  }

  return (
    <>
      <div className="relative -mt-7">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl p-4 sm:p-6 md:p-7">
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
            <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />

            {/* assuming FilterChips is a select/radio group */}
            <FilterChips value={jobType} onChange={(e) => setJobType(e.target.value)} />

            {/* assuming Remote is a checkbox toggle */}
            <Remote value={remoteOnly} onChange={setRemoteOnly} />
          </div>
        </div>
      </div>

      <JobGrid jobs={filteredJobs.slice(0, visibleCount)} />

      <LoadMoreButton 
        visibleCount={visibleCount}
        totalJobs={filteredJobs.length}
        onLoadMore={() => setVisibleCount((c) => c + 6)}
      />
    </>
  );
}