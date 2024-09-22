import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode && "dark"}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((dark) => !dark)}
      />
      <Sidebar />
    </main>
  );
}

export default App;
