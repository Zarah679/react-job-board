/* eslint-disable react/prop-types */

const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="relative bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-600 text-white rounded-bl-3xl">
        {/* curved bottom layer */}
      <div
        className="
          absolute left-0 top-0
          h-full w-[55%]
          bg-white/10
          rounded-br-[120px]
          pointer-events-none
        "
      />
      <div className="absolute inset-0 bg-black/0 dark:bg-black/10" />
      <div className="relative max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">devjobs</h1>
        {/* toggle button */}
         <button
          type="button"
          onClick={onToggleTheme}
          role="switch"
          aria-checked={isDark}
          className="
            relative inline-flex items-center
            h-8 w-14 rounded-full
            bg-white/20 dark:bg-white/10
            backdrop-blur
            border border-white/30 dark:border-white/10
            transition-colors duration-300
          "
        >
          {/* knob */}
          <span
            className={`
              absolute top-1 left-1
              h-6 w-6 rounded-full
              bg-white dark:bg-slate-800
              transition-transform duration-300
              ${isDark ? "translate-x-6" : "translate-x-0"}
            `}
          />

          <span className="absolute left-2 text-xs opacity-60">☀️</span>
          <span className="absolute right-2 text-xs opacity-60">🌙</span>
        </button>

      </div>
    </header>


  
  );
};

export default Header;
