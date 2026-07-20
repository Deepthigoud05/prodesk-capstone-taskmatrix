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
    <div className="flex min-h-screen bg-[#F6F8FC]">

      <Sidebar />

     <main className="flex-1 overflow-y-auto pt-20 lg:pt-0 p-4 sm:p-6 lg:p-8">

        <div className="px-8 xl:px-12 py-8">

          <Header />

          {/* Header */}

          <div className="mt-8">

            <p className="text-sm uppercase tracking-widest font-semibold text-[#5B5CEB]">
              Account
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#2F3B52] mt-2">
              Settings
            </h1>

            <p className="text-gray-500 mt-3 max-w-2xl">
              Manage your personal information, password,
              notifications and workspace preferences.
            </p>

          </div>

          {/* Top Section */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-12">

            {/* Profile */}

            <div className="bg-white rounded-3xl shadow-sm p-8">

             <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] flex items-center justify-center">

                  <MdPerson
                    size={30}
                    className="text-[#5B5CEB]"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#344054]">
                    Profile Information
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Update your account details.
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <div>

                  <label className="text-sm text-gray-500">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Deepthi Goud"
                    className="w-full mt-2 border rounded-xl px-5 py-4 focus:outline-none focus:border-[#5B5CEB]"
                  />

                </div>

                <div>

                  <label className="text-sm text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="deepthi@example.com"
                    className="w-full mt-2 border rounded-xl px-5 py-4 focus:outline-none focus:border-[#5B5CEB]"
                  />

                </div>

                <button className="w-full sm:w-auto bg-[#5B5CEB] hover:bg-[#4A4BD8] text-white px-7 py-3 rounded-xl font-semibold transition">

                  Save Changes

                </button>

              </div>

            </div>

            {/* Password */}

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

                  <MdLock
                    size={30}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#344054]">
                    Security
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Change your password securely.
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-red-400"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-red-400"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-red-400"
                />

                <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold transition">

                  Update Password

                </button>

              </div>

            </div>

          </div>

          {/* Preference Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

  {/* Notifications */}

  <div className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-lg transition">

    <div className="flex items-center gap-4 mb-8">

      <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

        <MdNotifications
          size={28}
          className="text-yellow-500"
        />

      </div>

      <div>

        <h2 className="text-xl font-bold text-[#344054]">
          Notifications
        </h2>

        <p className="text-sm text-gray-500">
          Stay updated with your work.
        </p>

      </div>

    </div>

    <div className="space-y-6">

     <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <span>Email Notifications</span>

        <input
          type="checkbox"
          defaultChecked
          className="w-5 h-5 accent-[#5B5CEB]"
        />

      </label>

      <label className="flex items-center justify-between">

        <span>Push Notifications</span>

        <input
          type="checkbox"
          defaultChecked
          className="w-5 h-5 accent-[#5B5CEB]"
        />

      </label>

      <label className="flex items-center justify-between">

        <span>Task Reminders</span>

        <input
          type="checkbox"
          className="w-5 h-5 accent-[#5B5CEB]"
        />

      </label>

    </div>

  </div>

  {/* Appearance */}

  <div className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-lg transition">

    <div className="flex items-center gap-4 mb-8">

      <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">

        <MdPalette
          size={28}
          className="text-[#5B5CEB]"
        />

      </div>

      <div>

        <h2 className="text-xl font-bold text-[#344054]">
          Appearance
        </h2>

        <p className="text-sm text-gray-500">
          Customize your workspace.
        </p>

      </div>

    </div>

    <label className="text-sm text-gray-500">
      Theme
    </label>

    <select className="w-full mt-3 border rounded-xl px-5 py-4 focus:outline-none focus:border-[#5B5CEB]">

      <option>Light Theme</option>

      <option>Dark Theme</option>

    </select>

    <button className="mt-6 w-full bg-[#5B5CEB] hover:bg-[#4A4BD8] text-white py-3 rounded-xl font-semibold transition">

      Apply Theme

    </button>

  </div>

  {/* Privacy */}

  <div className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-lg transition">

    <div className="flex items-center gap-4 mb-8">

      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

        <MdSecurity
          size={28}
          className="text-green-600"
        />

      </div>

      <div>

        <h2 className="text-xl font-bold text-[#344054]">
          Privacy
        </h2>

        <p className="text-sm text-gray-500">
          Control your account security.
        </p>

      </div>

    </div>

    <div className="space-y-6">

      <label className="flex items-center justify-between">

        <span>Private Profile</span>

        <input
          type="checkbox"
          defaultChecked
          className="w-5 h-5 accent-green-600"
        />

      </label>

      <label className="flex items-center justify-between">

        <span>Two-Factor Authentication</span>

        <input
          type="checkbox"
          className="w-5 h-5 accent-green-600"
        />

      </label>

      <label className="flex items-center justify-between">

        <span>Login Alerts</span>

        <input
          type="checkbox"
          defaultChecked
          className="w-5 h-5 accent-green-600"
        />

      </label>

    </div>

    <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">

      Save Privacy

    </button>

  </div>

</div>

{/* Account Summary */}

     <div className="bg-white rounded-3xl shadow-sm p-8 mt-10">

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    <div>

      <h2 className="text-2xl font-bold text-[#344054]">
        Account Summary
      </h2>

      <p className="text-gray-500 mt-2">
        Review your account information before saving your changes.
      </p>

    </div>

    <button className="w-full lg:w-auto bg-[#5B5CEB] hover:bg-[#4A4BD8] text-white px-8 py-4 rounded-xl font-semibold transition shadow-md">

      Save All Changes

    </button>

  </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

    <div className="bg-[#F8F9FC] rounded-2xl p-6 hover:shadow-md transition">

      <p className="text-sm text-gray-500">
        Account Type
      </p>

      <h3 className="text-2xl font-bold text-[#344054] mt-2">
        Premium
      </h3>

      <p className="text-sm text-green-600 mt-3">
        Active Subscription
      </p>

    </div>

    <div className="bg-[#F8F9FC] rounded-2xl p-6 hover:shadow-md transition">

      <p className="text-sm text-gray-500">
        Member Since
      </p>

      <h3 className="text-2xl font-bold text-[#344054] mt-2">
        July 2026
      </h3>

      <p className="text-sm text-gray-500 mt-3">
        1 Month Experience
      </p>

    </div>

    <div className="bg-[#F8F9FC] rounded-2xl p-6 hover:shadow-md transition">

      <p className="text-sm text-gray-500">
        Application Version
      </p>

      <h3 className="text-2xl font-bold text-[#344054] mt-2">
        v1.0.0
      </h3>

      <p className="text-sm text-blue-600 mt-3">
        Latest Version
      </p>

    </div>

  </div>

</div>

</div>

</main>

</div>

  );
}

export default Settings;
        