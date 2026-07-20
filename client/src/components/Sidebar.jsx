import { useState } from "react";
import {
  MdDashboard,
  MdViewKanban,
  MdFolder,
  MdAssignment,
  MdPeople,
  MdSettings,
  MdPerson,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#5B5CEB] text-white p-3 rounded-xl shadow-lg"
      >
        <MdMenu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          w-64
          h-screen
          bg-[#1F2937]
          text-white
          flex
          flex-col
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-8 border-b border-gray-700">

          <h1 className="text-3xl font-bold tracking-wide">
            TaskMatrix
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <MdClose size={28} />
          </button>

        </div>

        {/* Menu */}
        <div className="flex-1 mt-6 overflow-y-auto">

          {menu.map((item) => (

            <Link
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 px-8 py-4 text-lg transition-all duration-200 rounded-r-full mr-4 ${
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
            }}
            className="w-full flex items-center gap-4 px-8 py-6 text-red-300 hover:bg-[#374151] hover:text-red-400 transition"
          >
            <MdLogout size={22} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;