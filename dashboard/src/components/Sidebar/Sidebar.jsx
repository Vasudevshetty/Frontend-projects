import { links } from "../../constants";
import LinkItem from "./LinkItem";

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium ">
          {links.map((link, idx) => (
            <LinkItem key={idx} {...link} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
