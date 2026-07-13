function StatCard({ title, value, icon, bg }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

      <div
        className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center`}
      >
        {icon}
      </div>

      <h4 className="mt-5 text-gray-500 font-semibold">

        {title}

      </h4>

      <h1 className="mt-2 text-4xl font-bold text-gray-700">

        {value}

      </h1>

    </div>
  );
}

export default StatCard;