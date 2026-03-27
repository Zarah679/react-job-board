/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6"

const LocationInput = ( {value, onChange} ) => {
  return (
    <div className="flex items-center gap-3 dark:text-slate-700">
      <FaLocationDot className="text-indigo-500" />
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder="Filter by location"
        className="bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1 text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
      />
    </div>
  )
}

export default LocationInput
