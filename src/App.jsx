import { Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppShell
      theme={theme}
      onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      
    </AppShell>
  );
}