import { useParams, Link } from "react-router-dom";
import jobs from "../../data/data.json";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => String(j.id) === id);

  if (!job) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-slate-700 dark:text-slate-200">Job not found.</p>
        <Link to="/" className="underline text-indigo-500">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
        <div className="mx-auto max-w-4xl bg-slate-100 dark:bg-slate-900 px-6 pb-16 pt-10 space-y-6">
            {/* Company header card */}
            <section className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-sm">
                {/* left: logo block + text */}
                <div className="flex justify-between items-center pr-10">
                    <div className="flex gap-8 items-center">
                        <div 
                            className="h-32 w-32 grid place-items-center"
                            style={{ backgroundColor: job.logoBackground}}
                        >
                            <img 
                                src={job.logo} 
                                alt={job.company}
                                className="h-5 w-16"
                            />
                        </div>
                        <div className="py-8 text-left">
                            <h2 className="text-xl font-bold">{job.company}</h2>
                            <p className="text-sm text-slate-500">{job.company}.com</p>
                        </div>
                    </div>
                    {/* Company site button */}
                    <a 
                        href={job.website}
                        className="inline-flex justify-center items-center bg-indigo-200 font-semibold text-sm py-3 px-4 rounded-md text-indigo-500 hover:bg-indigo-300"
                        >
                            Company Site
                    </a>
                </div>
                
            </section>
            {/* Job Details Card */}
            <section className="rounded-lg bg-white dark:bg-slate-800 shadow-sm p-10">
                {/* top row: meta + apply button */}
                <div className="flex flex-col items-start gap-6 sm:items-center sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-start">
                        <p className="text-sm text-slate-500">{job.postedAt} • {job.contract}</p>
                        <h1 className="text-2xl mt-2 font-semibold text-slate-900 dark:text-slate-100">{job.position}</h1>
                        <p className="text-sm font-semibold text-indigo-500 mt-1">{job.location}</p>
                    </div>
                    {/* apply now */}
                    <div>
                        <a 
                            href={job.apply}
                            className="bg-indigo-400 text-sm text-slate-100 font-semibold py-3 px-7 rounded-md hover:bg-indigo-300"
                            >
                            Apply Now
                        </a>
                    </div>
                </div>
                {/* discription */}
                <div className="mt-10 space-y-5 leading-7 text-slate-500 text-left">
                    <p className="mb-10">{job.description}</p>
                    <h2 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Requirements</h2>
                    <p>{job.requirements.content}</p>
                    <ul className="list-disc pl-4 space-y-2">
                        {job.requirements.items.map((item, idx) => (
                        <li key={idx} className="pl-3">{item}</li>
                        ))}
                    </ul>
                    {/* Role */}
                    <h2 className="font-semibold text-xl text-slate-900 dark:text-slate-100">What you will do</h2>
                    <p>{job.role.content}</p>
                    <ol className="list-decimal marker:font-bold pl-4 space-y-2">
                        {job.role.items.map((item, idx) => (
                        <li key={idx} className="pl-3">{item}</li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
        <div className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/" className="underline text-slate-600 dark:text-slate-300">
            ← Back to search
        </Link>

        

        </div>
    </>
    
  );
}