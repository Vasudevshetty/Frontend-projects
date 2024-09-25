import { users } from "../../../constants";
import Title from "../Title";
import Member from "./Member";

function Team() {
  return (
    <div className="bg-white p-3 rounded-xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Team</Title>
      {users.map((user, index) => (
        <Member key={index} user={user} />
      ))}
    </div>
  );
}

export default Team;
