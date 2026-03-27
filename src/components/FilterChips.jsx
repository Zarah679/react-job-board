/* eslint-disable react/prop-types */

const FilterChips = ({ value, onChange}) => {
  return (
    <div>
      <select 
        value={value}
        onChange={onChange}
        className="bg-transparent text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:border-blue-500 "
      >
        <option value="">All Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
    </div>
  )
}

export default FilterChips
