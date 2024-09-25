import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Dashboard/Content";
import Main from "./components/Dashboard/Main";
import Profile from "./components/Dashboard/Profile/Profile";
import Stats from "./components/Dashboard/Stats/Stats";

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
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row"></div>
        </Content>
        <Profile darkMode={darkMode} />
      </Main>
    </main>
  );
}

export default App;
