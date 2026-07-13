import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  MdPerson,
  MdLock,
  MdNotifications,
  MdPalette,
  MdSecurity,
} from "react-icons/md";

function Settings() {
  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        {/* Page Header */}

        <div className="mt-10">

          <h1 className="text-4xl font-bold text-[#445372]">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account preferences and application settings.
          </p>

        </div>
<br></br>
        {/* Settings Cards */}

        <div className="grid grid-cols-2 gap-8 mt-10">

          {/* Profile Settings */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center">

                <MdPerson size={28} className="text-[#5B5CEB]" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-700">
                  Profile Settings
                </h2>

                <p className="text-gray-500">
                  Update your personal information.
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#5B5CEB]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#5B5CEB]"
              />

              <button className="bg-[#5B5CEB] text-white px-6 py-3 rounded-xl hover:bg-[#4A4BD8] transition">

                Save Changes

              </button>

            </div>

          </div>

          {/* Password */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">

                <MdLock size={28} className="text-red-500" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-700">
                  Change Password
                </h2>

                <p className="text-gray-500">
                  Keep your account secure.
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-red-400"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-red-400"
              />

              <button className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition">

                Update Password

              </button>

            </div>

          </div>
        {/* Bottom Settings */}

        <div className="grid grid-cols-3 gap-8 mt-10">

          {/* Notifications */}

          <div className="bg-white rounded-3xl shadow-md p-7">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                <MdNotifications
                  size={28}
                  className="text-yellow-500"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  Notifications
                </h2>

                <p className="text-gray-500 text-sm">
                  Manage notification preferences
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <label className="flex justify-between items-center">

                <span>Email Notifications</span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

              </label>

              <label className="flex justify-between items-center">

                <span>Push Notifications</span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

              </label>

              <label className="flex justify-between items-center">

                <span>Task Reminders</span>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#5B5CEB]"
                />

              </label>

            </div>

          </div>

          {/* Appearance */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">

                <MdPalette
                  size={28}
                  className="text-[#5B5CEB]"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  Appearance
                </h2>

                <p className="text-gray-500 text-sm">
                  Customize your workspace
                </p>

              </div>

            </div>

            <select className="w-full border rounded-xl px-5 py-4">

              <option>Light Theme</option>

              <option>Dark Theme</option>

            </select>

            <button className="mt-6 w-full bg-[#5B5CEB] text-white py-3 rounded-xl hover:bg-[#4A4BD8]">

              Apply Theme

            </button>

          </div>

          {/* Privacy */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                <MdSecurity
                  size={28}
                  className="text-green-600"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  Privacy
                </h2>

                <p className="text-gray-500 text-sm">
                  Account security options
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <label className="flex justify-between">

                <span>Two-Factor Authentication</span>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-green-600"
                />

              </label>

              <label className="flex justify-between">

                <span>Private Profile</span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-green-600"
                />

              </label>

            </div>

            <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">

              Save Privacy Settings

            </button>

          </div>

        </div>
                {/* Save Section */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold text-gray-700">
                Account Information
              </h2>

              <p className="text-gray-500 mt-2">
                Last updated: 13 July 2026
              </p>

            </div>

            <button className="bg-[#5B5CEB] hover:bg-[#4A4BD8] text-white px-8 py-4 rounded-xl font-semibold shadow transition">

              Save All Changes

            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-8">

            <div className="bg-[#F8F9FC] rounded-2xl p-6">

              <p className="text-gray-500 text-sm">
                Account Type
              </p>

              <h3 className="text-xl font-semibold mt-2">
                Premium
              </h3>

            </div>

            <div className="bg-[#F8F9FC] rounded-2xl p-6">

              <p className="text-gray-500 text-sm">
                Member Since
              </p>

              <h3 className="text-xl font-semibold mt-2">
                July 2026
              </h3>

            </div>

            <div className="bg-[#F8F9FC] rounded-2xl p-6">

              <p className="text-gray-500 text-sm">
                App Version
              </p>

              <h3 className="text-xl font-semibold mt-2">
                v1.0.0
              </h3>

                    </div>
 </div>
  </div>
   </div>
      </main>

    </div>

);
}
export default Settings;
        