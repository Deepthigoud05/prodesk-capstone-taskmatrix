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
    <div className="flex min-h-screen bg-[#F6F8FC]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto pt-20 lg:pt-0 p-4 sm:p-6 lg:p-8">

        <div className="px-8 xl:px-12 py-8">

          <Header />

          {/* Page Title */}

          <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

            <div>

              <p className="text-sm uppercase tracking-widest font-semibold text-[#5B5CEB]">
                Task Details
              </p>

             <h1 className="text-3xl md:text-4xl font-bold text-[#2F3B52] mt-2">
                Dashboard UI Design
              </h1>

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                  High Priority
                </span>

                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                  In Progress
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  Due • 20 Jul 2026
                </span>

              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5B5CEB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A4BD8] transition">

                <MdEdit />

                Edit

              </button>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition">

                <MdDelete />

                Delete

              </button>

            </div>

          </div>

          {/* Description */}

          <div className="bg-white rounded-3xl shadow-sm mt-12 p-8">

            <h2 className="text-2xl font-bold text-[#344054]">
              Description
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              Design and implement a clean, modern dashboard interface
              for the TaskMatrix project. The page should provide an
              intuitive experience while supporting project management,
              analytics, team collaboration and responsive layouts.

            </p>

          </div>

          {/* Progress + Information */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-12">

            {/* Progress */}

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-[#344054]">
                  Progress
                </h2>

                <span className="text-2xl font-bold text-[#5B5CEB]">
                  70%
                </span>

              </div>

              <div className="mt-8 h-4 bg-gray-200 rounded-full">

                <div className="h-4 rounded-full bg-[#5B5CEB] w-[70%]"></div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

                <div>

                  <p className="text-sm text-gray-400">
                    Completed
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    7
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Pending
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    3
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Team
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    4
                  </h3>

                </div>

              </div>

            </div>

            {/* Task Information */}

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <h2 className="text-2xl font-bold text-[#344054] mb-8">
                Task Information
              </h2>

              <div className="space-y-7">

               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                  <div className="flex items-center gap-3">

                    <MdPerson className="text-[#5B5CEB]" />

                    <span className="text-gray-500">
                      Assigned To
                    </span>

                  </div>

                  <span className="font-semibold">
                    Deepthi
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <MdFlag className="text-red-500" />

                    <span className="text-gray-500">
                      Priority
                    </span>

                  </div>

                  <span className="font-semibold">
                    High
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <MdCheckCircle className="text-green-500" />

                    <span className="text-gray-500">
                      Status
                    </span>

                  </div>

                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                    In Progress
                  </span>

                </div>
                                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <MdCalendarToday className="text-[#5B5CEB]" />

                    <span className="text-gray-500">
                      Due Date
                    </span>

                  </div>

                  <span className="font-semibold">
                    20 July 2026
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Team Discussion */}

          <div className="mt-12 bg-white rounded-3xl shadow-sm p-8">

           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

              <div>

                <h2 className="text-2xl font-bold text-[#344054]">
                  Team Discussion
                </h2>

                <p className="text-gray-500 mt-1">
                  Latest updates from your team members.
                </p>

              </div>

              <button className="w-full sm:w-auto bg-[#5B5CEB] text-white px-5 py-2 rounded-xl hover:bg-[#4A4BD8] transition">
                Add Comment
              </button>

            </div>

            <div className="space-y-6">

              {/* Comment */}

             <div className="flex flex-col sm:flex-row gap-5">

                <div className="w-12 h-12 rounded-full bg-[#5B5CEB] text-white flex items-center justify-center font-bold text-lg">

                  R

                </div>

                <div className="flex-1 bg-[#F8F9FC] rounded-2xl p-5">

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                    <h3 className="font-semibold text-gray-800">
                      Rahul
                    </h3>

                    <span className="text-sm text-gray-400">
                      2 hours ago
                    </span>

                  </div>

                  <p className="mt-3 text-gray-600 leading-7">

                    The dashboard looks much cleaner now. We can proceed
                    with API testing after connecting the remaining endpoints.

                  </p>

                </div>

              </div>

              {/* Comment */}

              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">

                  A

                </div>

                <div className="flex-1 bg-[#F8F9FC] rounded-2xl p-5">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold text-gray-800">
                      Akhil
                    </h3>

                    <span className="text-sm text-gray-400">
                      Yesterday
                    </span>

                  </div>

                  <p className="mt-3 text-gray-600 leading-7">

                    Responsive layout has been verified. Everything looks
                    ready for the sprint review.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Section */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-12">

  {/* Subtasks */}

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl ...">

    <div className="flex items-center justify-between mb-8">

      <div>

        <h2 className="text-2xl font-bold text-[#344054]">
          Subtasks
        </h2>

        <p className="text-gray-500 mt-1">
          Project checklist
        </p>

      </div>

      <span className="px-4 py-2 rounded-full bg-[#EEF2FF] text-[#5B5CEB] font-semibold">
        3 / 5
      </span>

    </div>

    <div className="space-y-5">

      {[
        ["Create dashboard layout", true],
        ["Build reusable components", true],
        ["Create analytics cards", true],
        ["Connect backend APIs", false],
        ["Final testing & review", false],
      ].map(([task, done], index) => (

        <div
          key={index}
          className={`flex items-center justify-between rounded-2xl px-5 py-4 transition ${
            done
              ? "bg-green-50"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >

          <div className="flex items-center gap-4">

            <input
              type="checkbox"
              checked={done}
              readOnly
              className="w-5 h-5 accent-[#5B5CEB]"
            />

            <span
              className={`font-medium ${
                done
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }`}
            >
              {task}
            </span>

          </div>

          <span
            className={`text-sm font-semibold ${
              done
                ? "text-green-600"
                : "text-yellow-600"
            }`}
          >
            {done ? "Done" : "Pending"}
          </span>

        </div>

      ))}

    </div>

  </div>

  {/* Timeline */}

  <div className="bg-white rounded-3xl shadow-sm p-8">

    <h2 className="text-2xl font-bold text-[#344054] mb-8">
      Activity Timeline
    </h2>

    <div className="relative border-l-2 border-gray-200 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-10">

      <div className="relative">

        <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-[#5B5CEB]"></div>

        <h3 className="font-semibold text-gray-800">
          Task Created
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          10 Jul 2026 • 09:30 AM
        </p>

      </div>

      <div className="relative">

        <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-green-500"></div>

        <h3 className="font-semibold text-gray-800">
          Assigned to Deepthi
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          11 Jul 2026 • 11:15 AM
        </p>

      </div>

      <div className="relative">

        <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-yellow-500"></div>

        <h3 className="font-semibold text-gray-800">
          Status changed to In Progress
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          12 Jul 2026 • 03:20 PM
        </p>

      </div>

      <div className="relative">

        <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-blue-500"></div>

        <h3 className="font-semibold text-gray-800">
          Latest update added
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Today • 10:45 AM
        </p>

      </div>

    </div>

  </div>
</div>
</div>

</main>

</div>

  );
}
export default TaskDetails;