import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  MdEdit,
  MdDelete,
  MdCalendarToday,
  MdFlag,
  MdPerson,
  MdCheckCircle,
} from "react-icons/md";

function TaskDetails() {
  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        {/* Heading */}

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-4xl font-bold text-[#445372]">
              Task Details
            </h1>

            <p className="text-gray-500 mt-2">
              View complete information about the selected task.
            </p>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 bg-[#5B5CEB] text-white px-5 py-3 rounded-xl shadow hover:bg-[#4A4BD8]">

              <MdEdit size={20} />

              Edit

            </button>

            <button className="flex items-center gap-2 bg-[#5B5CEB] text-white px-5 py-3 rounded-xl shadow hover:bg-red-600">

              <MdDelete size={20} />

              Delete

            </button>

          </div>

        </div>
<br></br>
        {/* Main Card */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold text-gray-700">
            Dashboard UI Design
          </h2>

          <p className="text-gray-500 mt-4 leading-8">

            Design and implement a modern responsive dashboard for the
            TaskMatrix project using React, Tailwind CSS and reusable
            components.

          </p>
<br></br>
          <div className="grid grid-cols-2 gap-8 mt-10">            {/* Left Section */}

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <MdFlag className="text-red-500" size={24} />

                <div>

                  <p className="text-gray-500 text-sm">
                    Priority
                  </p>

                  <h3 className="font-semibold text-lg">
                    High
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <MdCheckCircle className="text-green-500" size={24} />

                <div>

                  <p className="text-gray-500 text-sm">
                    Status
                  </p>

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">
                    In Progress
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <MdPerson className="text-[#5B5CEB]" size={24} />

                <div>

                  <p className="text-gray-500 text-sm">
                    Assigned To
                  </p>

                  <h3 className="font-semibold">
                    Deepthi 
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <MdCalendarToday className="text-[#5B5CEB]" size={24} />

                <div>

                  <p className="text-gray-500 text-sm">
                    Due Date
                  </p>

                  <h3 className="font-semibold">
                    20 July 2026
                  </h3>

                </div>

              </div>

            </div>

            {/* Right Section */}

            <div>

              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                Progress
              </h3>

              <div className="w-full h-4 bg-gray-200 rounded-full">

                <div className="w-[70%] h-4 rounded-full bg-[#5B5CEB]"></div>

              </div>

              <p className="mt-3 text-gray-600">
                70% Completed
              </p>
<br></br>
              {/* Comments */}

              <div className="mt-10">

                <h3 className="text-lg font-semibold text-gray-700">
                  Comments
                </h3>

                <div className="mt-5 space-y-4">

                  <div className="bg-gray-100 rounded-xl p-4">

                    <h4 className="font-semibold">
                      Rahul
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Dashboard UI looks good. Please improve spacing before review.
                    </p>

                  </div>

                  <div className="bg-gray-100 rounded-xl p-4">

                    <h4 className="font-semibold">
                      Akhil
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Colors match the Figma design. Ready for API integration.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>        </div>
<br></br>
        {/* Bottom Section */}

        <div className="grid grid-cols-2 gap-2 mt-10">
<br></br>
          {/* Subtasks */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Subtasks
            </h2>

            <div className="space-y-5">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

                <span className="line-through text-gray-500">
                  Create Dashboard Layout
                </span>

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

                <span className="line-through text-gray-500">
                  Build Reusable Components
                </span>

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

                <span>
                  Connect Backend APIs
                </span>

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

                <span>
                  Final Testing
                </span>

              </label>

            </div>

          </div>

          {/* Activity Timeline */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-700 mb-9">
              Activity Timeline
            </h2>

            <div className="space-y-8">

              <div className="border-l-4 border-[#5B5CEB] pl-5">

                <h3 className="font-semibold">
                  Task Created
                </h3>

                <p className="text-gray-500 text-sm">
                  10 July 2026 • 9:30 AM
                </p>

              </div>

              <div className="border-l-4 border-green-500 pl-5">

                <h3 className="font-semibold">
                  Assigned to Deepthi
                </h3>

                <p className="text-gray-500 text-sm">
                  11 July 2026 • 11:00 AM
                </p>

              </div>

              <div className="border-l-4 border-yellow-500 pl-5">

                <h3 className="font-semibold">
                  Status changed to In Progress
                </h3>

                <p className="text-gray-500 text-sm">
                  12 July 2026 • 3:15 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );
}

export default TaskDetails;