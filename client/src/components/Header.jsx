import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">

      {/* Search */}

      <div className="w-full md:flex-1">

        <div className="bg-white rounded-2xl shadow-sm flex items-center px-5 py-4">

          <FiSearch
            size={22}
            className="text-gray-500 flex-shrink-0"
          />

          <input
            type="text"
            placeholder="Search Project..."
            className="ml-4 w-full outline-none text-base md:text-lg font-medium text-slate-600 placeholder:text-slate-400"
          />

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-end gap-5">

        {/* Notification */}

        <button className="relative p-3 bg-white rounded-2xl shadow-sm hover:bg-gray-100 transition">

          <FiBell
            size={22}
            className="text-yellow-500"
          />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-white rounded-2xl shadow-sm px-4 py-2">

          <FaUserCircle
            size={34}
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

    </div>
  );
}

export default Header;