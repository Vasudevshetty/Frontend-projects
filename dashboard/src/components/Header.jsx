import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

function Header({ darkMode, toggleDarkMode, toggleIsSidebarOpen }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
              onClick={toggleIsSidebarOpen}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="/" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="text-xl h-8 me-1 text-violet-500" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                DashBod
              </span>
            </a>
          </div>

          <button
            className="bg-slate-700 dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {!darkMode ? (
              <FaMoon className="text-white" />
            ) : (
              <FaSun className="text-slate-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
