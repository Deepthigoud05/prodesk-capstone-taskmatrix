function StatCard({ title, value, icon, bg }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${bg}`}
      >
        {icon}
      </div>

      <h4 className="mt-5 text-sm font-semibold text-gray-500">
        {title}
      </h4>

      <h1 className="mt-2 text-4xl font-bold text-gray-800">
        {value}
      </h1>
    </div>
  );
}

export default StatCard;