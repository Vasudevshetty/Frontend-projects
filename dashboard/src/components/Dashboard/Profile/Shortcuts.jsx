import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../../constants";
import Title from "./Title";

function Shortcuts() {
  return (
    <div className="flex gap-4 flex-col bg-white rounded-lg p-4 dark:bg-gray-600">
      <Title>Shortcuts</Title>
      {shortcutLink.map((shortcut, index) => (
        <div
          key={index}
          className="flex justify-between items-center cursor-pointer rounded-sm"
        >
          <div className="flex gap-4  items-center">
            <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <shortcut.icon />
            </span>
            <h3 className="font-medium dark:text-gray-300">{shortcut.title}</h3>
          </div>
          <span className="bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500">
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Shortcuts;
