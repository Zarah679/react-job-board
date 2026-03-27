/* eslint-disable react/prop-types */

import Header from './Header'

export default function AppShell({ children, theme, onToggleTheme }) {
  return (
    <div className="mx-auto min-h-screen flex flex-col bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <Header theme={theme} onToggleTheme={onToggleTheme}/>

      {/* Everything below header */}
      <div className="flex-1 relative">
        <main className="flex-1 px-6 sm:px-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
