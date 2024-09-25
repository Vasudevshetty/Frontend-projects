function Card({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl flex items-center gap-2 dark:bg-gray-600 dark:text-gray-300">
      <span className={`${data.bgColor} px-3 py-6 text-2xl rounded-2xl dark:bg-gray-6`}>
        <data.icon />
      </span>
      <div>
        <h2 className="text-xl">
          <span className="text-2xl font-bold">{data.count}</span>/250
        </h2>
        <p className="font-bold">{data.title}</p>
      </div>
    </div>
  );
}

export default Card;
