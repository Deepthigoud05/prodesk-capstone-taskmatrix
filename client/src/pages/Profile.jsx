import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import profile from "../assets/Professional photo.jpg";
import {
  MdEmail,
  MdPhone,
  MdWork,
  MdLocationOn,
  MdEdit,
} from "react-icons/md";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        {/* Header */}

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-4xl font-bold text-[#445372]">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your personal information.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-[#5B5CEB] text-white px-6 py-3 rounded-xl shadow hover:bg-[#4A4BD8] transition">

            <MdEdit size={20} />

            Edit Profile

          </button>

        </div>
<br></br>
        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-10">

          <div className="flex items-center gap-10">

            <img
              src={profile}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-[#5B5CEB]"
            />

            <div>

              <h2 className="text-4xl font-bold text-gray-700">
            {user?.name}
              </h2>

              <p className="text-xl text-[#5B5CEB] mt-2">
                Full Stack Developer
              </p>

              <span className="inline-block mt-5 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                Active
              </span>

            </div>

          </div>

          {/* Information */}

          <div className="grid grid-cols-2 gap-10 mt-12">            {/* Left Information */}

            <div className="space-y-8">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">

                  <MdEmail className="text-[#5B5CEB]" size={24} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Email Address
                  </p>

                  <h3 className="font-semibold text-lg">
                    {user?.email}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">

                  <MdPhone className="text-[#5B5CEB]" size={24} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Phone Number
                  </p>

                  <h3 className="font-semibold text-lg">
                    +91 9876543210
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">

                  <MdWork className="text-[#5B5CEB]" size={24} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Position
                  </p>

                  <h3 className="font-semibold text-lg">
                    Full Stack Developer
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">

                  <MdLocationOn className="text-[#5B5CEB]" size={24} />

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <h3 className="font-semibold text-lg">
                    Hyderabad, Telangana
                  </h3>

                </div>

              </div>

            </div>
<br></br>
            {/* Right Information */}

            <div>

              <div className="bg-[#F8F9FC] rounded-2xl p-6">

                <h3 className="text-xl font-bold text-gray-700">
                  About Me
                </h3>

                <p className="text-gray-600 mt-4 leading-8">

                  Passionate Full Stack Developer with experience in
                  React, Node.js, Express and MongoDB. I enjoy building
                  modern web applications with clean UI and efficient
                  backend architecture.

                </p>

              </div>
<br></br>
              <div className="bg-[#F8F9FC] rounded-2xl p-6 mt-6">

                <h3 className="text-xl font-bold text-gray-700">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3 mt-5">

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    React
                  </span>

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    Node.js
                  </span>

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    Express
                  </span>

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    MongoDB
                  </span>

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    Tailwind CSS
                  </span>

                  <span className="bg-[#5B5CEB] text-white px-4 py-2 rounded-full">
                    Java
                  </span>

                </div>

              </div>

            </div>

          </div>
          
                  </div>
<br></br>
        {/* Statistics */}

        <div className="grid grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h3 className="text-gray-500 font-medium">
              Projects Completed
            </h3>

            <p className="text-5xl font-bold text-[#5B5CEB] mt-5">
              18
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h3 className="text-gray-500 font-medium">
              Experience
            </h3>

            <p className="text-5xl font-bold text-green-600 mt-5">
              1 Year
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h3 className="text-gray-500 font-medium">
              Joined
            </h3>

            <p className="text-5xl font-bold text-orange-500 mt-5">
              Jul 2026
            </p>

          </div>

        </div>
<br></br>
        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <h2 className="text-2xl font-bold text-gray-700">
            Recent Activity
          </h2>
<br></br>
          <div className="mt-8 space-y-6">

            <div className="border-l-4 border-[#5B5CEB] pl-5">

              <h3 className="font-semibold">
                Dashboard Updated
              </h3>

              <p className="text-sm text-gray-500">
                2 hours ago
              </p>

            </div>

            <div className="border-l-4 border-green-500 pl-5">

              <h3 className="font-semibold">
                New Project Created
              </h3>

              <p className="text-sm text-gray-500">
                Yesterday
              </p>

            </div>

            <div className="border-l-4 border-yellow-500 pl-5">

              <h3 className="font-semibold">
                Kanban Board Modified
              </h3>

              <p className="text-sm text-gray-500">
                3 days ago
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>

  );
}

export default Profile;