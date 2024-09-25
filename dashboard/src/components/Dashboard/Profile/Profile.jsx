import DonutChart from "./DonutChart";
import Shortcuts from "./Shortcuts";
import User from "./User";

function Profile({ darkMode }) {
  return (
    <div className="px-2 py-4 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col justify-between gap-4 ">
      <User />
      <Shortcuts />
      <DonutChart darkMode={darkMode} />
    </div>
  );
}

export default Profile;
