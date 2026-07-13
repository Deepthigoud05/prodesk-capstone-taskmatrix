import {
  MdDashboard,
  MdViewKanban,
  MdFolder,
  MdAssignment,
  MdPeople,
  MdSettings,
  MdPerson,
  MdLogout,
} from "react-icons/md";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      title: "Dashboard",
      icon: <MdDashboard size={22} />,
      path: "/dashboard",
    },
    {
      title: "Kanban",
      icon: <MdViewKanban size={22} />,
      path: "/kanban",
    },
    {
      title: "Projects",
      icon: <MdFolder size={22} />,
      path: "/projects",
    },
    {
      title: "Task Details",
      icon: <MdAssignment size={22} />,
      path: "/task-details",
    },
    {
      title: "Team",
      icon: <MdPeople size={22} />,
      path: "/team",
    },
    {
      title: "Settings",
      icon: <MdSettings size={22} />,
      path: "/settings",
    },
    {
      title: "Profile",
      icon: <MdPerson size={22} />,
      path: "/profile",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#1F2937] text-white flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold tracking-wide">
          TaskMatrix
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 mt-6">

        {menu.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center gap-4 px-8 py-4 text-lg transition rounded-r-full mr-4 ${
              location.pathname === item.path
                ? "bg-[#5B5CEB] text-white"
                : "hover:bg-[#374151]"
            }`}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>

        ))}

      </div>

      {/* Logout */}
      <div className="border-t border-gray-700">

        <button
          onClick={() => {
       localStorage.removeItem("token");
localStorage.removeItem("user");

window.location.href = "/";
            window.location.href = "/";
          }}
          className="w-full flex items-center gap-4 px-8 py-6 text-red-300 hover:text-red-400 transition"
        >
          <MdLogout size={22} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;