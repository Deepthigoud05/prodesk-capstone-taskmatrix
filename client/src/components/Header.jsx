import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-20 flex justify-between items-center">

      {/* Search */}

      <div className="w-[620px] h-16 bg-white rounded-md shadow-sm flex items-center px-8">

        <FiSearch
          size={28}
          className="text-gray-500"
        />

        <input
          type="text"
          placeholder="Search Project..."
          className="ml-4 w-full outline-none text-[20px] font-semibold text-slate-500 placeholder:text-slate-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-8">

        <button>

          <FiBell
            size={28}
            className="text-yellow-500"
          />

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={32}
            className="text-slate-500"
          />

          <span className="text-[20px] font-bold text-slate-500">

            Deepthi

          </span>

        </div>

      </div>

    </div>
  );
}

export default Header;