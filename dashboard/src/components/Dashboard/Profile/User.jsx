function User() {
  return (
    <div className="flex gap-2 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300">
      <img
        src="https://github.com/Vasudevshetty.png"
        alt="profile image"
        className="w-14 h-14 rounded-full"
      />
      <div>
        <h3 className="font-semibold md:text-2xl text-xl">Vasudev shetty</h3>
        <p>Full stack developer</p>
      </div>
    </div>
  );
}

export default User;
