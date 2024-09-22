import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className={`${darkMode && "dark"}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((dark) => !dark)}
        toggleIsSidebarOpen={() => setIsSidebarOpen((open) => !open)}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </main>
  );
}

export default App;
