import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="w-full lg:max-w-2xl">
        <div className="flex items-center rounded-2xl bg-white px-5 py-4 shadow-md">
          <FiSearch
            size={22}
            className="shrink-0 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search Project..."
            className="ml-4 w-full bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-end gap-4">
        <button className="relative rounded-2xl bg-white p-4 shadow-md transition hover:bg-gray-100">
          <FiBell
            size={22}
            className="text-yellow-500"
          />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md">
          <FaUserCircle
            size={38}
            className="text-slate-500"
          />

          <div className="hidden sm:block">
            <p className="text-sm text-gray-400">
              Welcome
            </p>

            <h3 className="font-semibold text-slate-700">
              Deepthi
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;