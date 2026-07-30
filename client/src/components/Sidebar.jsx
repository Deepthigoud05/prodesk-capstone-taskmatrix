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
        className="fixed top-5 left-5 z-50 rounded-xl bg-indigo-600 p-3 text-white shadow-lg lg:hidden"
      >
        <MdMenu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-64
          bg-[#1F2937]
          text-white
          shadow-2xl
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
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-gray-700 px-6 py-6">

          <h1 className="text-2xl font-bold tracking-wide">
            TaskMatrix
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <MdClose size={28} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">

          {menu.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`mx-3 mb-2 flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-indigo-600 shadow-lg"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.icon}

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          ))}

        </nav>

        {/* Logout */}
        <div className="border-t border-gray-700 p-4">

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
            className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-red-300 transition hover:bg-gray-700 hover:text-red-400"
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