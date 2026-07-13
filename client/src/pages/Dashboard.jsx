import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/Professional photo.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import rahul from "../assets/10.jpg";
import akhil from "../assets/111.jpg";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ProjectChart from "../components/ProjectChart";

import {
  MdFolder,
  MdWarning,
  MdDone,
  MdPendingActions,
} from "react-icons/md";

function Dashboard() {
const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 pl-4 pr-8 py-8 overflow-y-auto">

        <Header />

        <div className="mt-10">

          <h1 className="text-xl font-bold text-[#5B6B88]">
            Welcome Back, {user?.name} 👋
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Here's what's happening with your projects today.
          </p>

        </div>
<br></br>
        {/* Statistics */}

        <div className="grid grid-cols-4 gap-6 mt-20">

          <StatCard
            title="Total Projects"
            value="12"
            bg="bg-blue-100"
            icon={<MdFolder size={20} className="text-blue-600" />}
          />

          <StatCard
            title="Overdue"
            value="4"
            bg="bg-red-100"
            icon={<MdWarning size={20} className="text-red-500" />}
          />

          <StatCard
            title="Completed"
            value="58"
            bg="bg-green-100"
            icon={<MdDone size={20} className="text-green-400" />}
          />

          <StatCard
            title="Pending"
            value="17"
            bg="bg-yellow-100"
            icon={<MdPendingActions size={20} className="text-yellow-500" />}
          />

        </div>
<br></br>
        {/* Analytics */}

        <div className="grid grid-cols-12 gap-6 mt-12">

          {/* Project Analytics */}

          <div className="col-span-4 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-base font-bold text-gray-700 mb-6">
              Project Analytics
            </h2>

            <ProjectChart />

          </div>

          {/* Project Status */}

          <div className="col-span-8 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] p-8 text-white shadow-md">

            <h2 className="text-3x1 font-bold">
                   Project Status
            </h2>

            <p className="mt-4 text-lg opacity-90">
              Keep working on your pending tasks to stay on schedule.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>

                <p className="text-sm opacity-80">
                  Tasks Completed
                </p>

                <h3 className="text-4xl font-bold">
                  58
                </h3>

              </div>

              <div>

                <p className="text-sm opacity-80">
                  Pending
                </p>

                <h3 className="text-4xl font-bold">
                  17
                </h3>

              </div>

              <div>

                <p className="text-sm opacity-80">
                  Overdue
                </p>

                <h3 className="text-4xl font-bold">
                  4
                </h3>

              </div>

            </div>

            <button className="mt-10 rounded-xl bg-white px-6 py-3 font-semibold text-[#5B5CEB] shadow transition hover:scale-105">

              View Details

            </button>

          </div>

        </div>
  <br></br>
        {/* Dashboard Content */}

        <div className="grid grid-cols-12 gap-8 mt-10 items-start">
       
        {/* Recent Projects */}

          <div className="col-span-12 bg-white rounded-3xl shadow-xl p-8 min-h-[280px]">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold text-gray-700">
                Recent Projects
              </h2>

              <button className="text-indigo-600 font-semibold hover:underline">
                View All
              </button>

          

            {/* Project 1 */}

            <div className="mb-8">

              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="font-semibold text-gray-700">
                    TaskMatrix Dashboard
                  </h3>

                  <p className="text-sm text-gray-500">
                    UI / React Development
                  </p>

                </div>

                <span className="font-semibold text-indigo-600">
                  75%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-3/4 h-3 rounded-full bg-indigo-600"></div>

              </div>

            </div>

            {/* Project 2 */}

            <div className="mb-8">

              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Student Portal
                  </h3>

                  <p className="text-sm text-gray-500">
                    Backend Development
                  </p>

                </div>

                <span className="font-semibold text-green-600">
                  60%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-3/5 h-3 rounded-full bg-green-500"></div>

              </div>

            </div>

            {/* Project 3 */}

            <div>

              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Inventory System
                  </h3>

                  <p className="text-sm text-gray-500">
                    Database Design
                  </p>

                </div>

                <span className="font-semibold text-yellow-500">
                  45%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-[45%] h-3 rounded-full bg-yellow-400"></div>

              </div>

            </div>

          </div>
<br></br>
          {/* Team Members */}

          <div className="col-span-4 bg-white rounded-3xl shadow-md p-8 min-h-[420px]">

            <h2 className="text-2xl font-bold text-gray-700 mb-8">
              Team Members
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <img
                src={profile}
                alt="Deepthi"
                className="w-14 h-14 rounded-full"
                />
                <div>

                  <h3 className="font-semibold text-gray-700">
                    Deepthi
                  </h3>

                  <p className="text-sm text-gray-500">
                    Project Manager
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <img
                  src={rahul}
                  alt="Rahul"
                  className="w-14 h-14 rounded-full"
                />

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Rahul
                  </h3>

                  <p className="text-sm text-gray-500">
                    Backend Developer
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <img
                  src={akhil}
                  alt="Akhil"
                  className="w-14 h-14 rounded-full"
                />

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Akhil
                  </h3>

                  <p className="text-sm text-gray-500">
                    UI Designer
                  </p>

                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-[#EEF2F7] p-5">
<br></br>
                <h3 className="font-semibold text-gray-700">
                  Team Performance
                </h3>

                <p className="mt-2 text-3xl font-bold text-indigo-600">
                  92%
                </p>

                <p className="text-sm text-gray-500">
                  Overall productivity this week
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Row */}

   <div className="col-span-7 w-full bg-white rounded-3xl shadow-md p-8"></div>
                  {/* Recent Activity */}

          <div className="col-span-6 bg-white rounded-2xl shadow-md p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold text-gray-700">
                Recent Activity
              </h2>

              <button className="text-indigo-600 font-semibold hover:underline">
                View All
              </button>

            </div>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-3 rounded-full bg-indigo-600"></div>

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Dashboard UI Completed
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Today • 10:30 AM
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-3 rounded-full bg-green-500"></div>

                <div>

                  <h3 className="font-semibold text-gray-700">
                    MongoDB Connected Successfully
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Yesterday • 6:45 PM
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-3 rounded-full bg-yellow-500"></div>

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Authentication Module Updated
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    2 Days Ago
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-3 rounded-full bg-pink-500"></div>

                <div>

                  <h3 className="font-semibold text-gray-700">
                    Team Meeting Scheduled
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Monday • 11:00 AM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Calendar */}

          <div className="col-span-5 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Calendar
            </h2>

            <Calendar />

            <div className="mt-8">

              <h3 className="font-semibold text-gray-700 mb-5">
                Upcoming Deadlines
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between items-center">

                  <div>

                    <h4 className="font-semibold">
                      Dashboard Design
                    </h4>

                    <p className="text-sm text-gray-500">
                      UI Development
                    </p>

                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                    Jul 15
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <div>

                    <h4 className="font-semibold">
                      Backend APIs
                    </h4>

                    <p className="text-sm text-gray-500">
                      Authentication
                    </p>

                  </div>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600">
                    Jul 18
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <div>

                    <h4 className="font-semibold">
                      Final Review
                    </h4>

                    <p className="text-sm text-gray-500">
                      Project Submission
                    </p>

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                    Jul 22
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;