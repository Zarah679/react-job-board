
const Remote = ({ value, onChange }) => {
  return (
    <div>
      <label
        className="flex items-center gap-2"
        >
        <input 
        type="checkbox"
        value={value}
        onChange={onChange}
        className="bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1 text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
      />Remote
      </label>

    </div>
  )
}

export default Remote
