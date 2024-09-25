import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Dashboard/Content";
import Main from "./components/Dashboard/Main";
import Profile from "./components/Dashboard/Profile/Profile";

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

      <Main>
        <Content>Main content</Content>
        <Profile />
      </Main>
    </main>
  );
}

export default App;
