// src/App.jsx

import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const [progressData, setProgressData] = useState({
    trilhaNome: 'Data Science',
    progress: 65,
    completedModules: 7,
    totalModules: 12,
    pontuacao: 84,
    tempoEstudo: 36,
    totalDuration: 45, 
    completedDuration: 19
  });

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet context={{ progressData }} />
      </main>
    </div>
  )
}