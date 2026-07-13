
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import profile from "../assets/Professional photo.jpg";
import rahul from "../assets/10.jpg";
import akhil from "../assets/111.jpg";
import {
  MdPersonAdd,
  MdEmail,
  MdPhone,
} from "react-icons/md";

function Team() {
  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        {/* Header */}

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-4xl font-bold text-[#445372]">
              Team Members
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your project team.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-[#5B5CEB] text-white px-6 py-3 rounded-xl shadow hover:bg-[#4A4BD8] transition">

            <MdPersonAdd size={22} />

            Invite Member

          </button>

        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-3 gap-8 mt-10">          {/* Member 1 */}

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition">

            <div className="flex justify-center">

              <img
                src={profile}
                alt="Deepthi"
                className="w-24 h-24 rounded-full border-4 border-[#5B5CEB]"
              />

            </div>

            <div className="text-center mt-5">

              <h2 className="text-2xl font-bold text-gray-700">
                Deepthi
              </h2>

              <p className="text-[#5B5CEB] font-medium mt-1">
                Project Manager
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">

                <MdEmail size={20} />

                <span>deepthi@gmail.com</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <MdPhone size={20} />

                <span>+91 9876543210</span>

              </div>

            </div>

            <div className="mt-8 flex justify-center">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Active
              </span>

            </div>

          </div>

          {/* Member 2 */}

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition">

            <div className="flex justify-center">

              <img
                src={rahul}
                alt="Rahul"
                className="w-24 h-24 rounded-full border-4 border-[#5B5CEB]"
              />

            </div>

            <div className="text-center mt-5">

              <h2 className="text-2xl font-bold text-gray-700">
                Rahul
              </h2>

              <p className="text-[#5B5CEB] font-medium mt-1">
                Backend Developer
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">

                <MdEmail size={20} />

                <span>rahul@gmail.com</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <MdPhone size={20} />

                <span>+91 9123456780</span>

              </div>

            </div>

            <div className="mt-8 flex justify-center">

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                Busy
              </span>

            </div>

          </div>

          {/* Member 3 */}

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition">

            <div className="flex justify-center">

              <img
                src={akhil}
                alt="Akhil"
                className="w-24 h-24 rounded-full border-4 border-[#5B5CEB]"
              />

            </div>

            <div className="text-center mt-5">

              <h2 className="text-2xl font-bold text-gray-700">
                Akhil
              </h2>

              <p className="text-[#5B5CEB] font-medium mt-1">
                UI / UX Designer
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">

                <MdEmail size={20} />

                <span>akhil@gmail.com</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <MdPhone size={20} />

                <span>+91 9988776655</span>

              </div>

            </div>

            <div className="mt-8 flex justify-center">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Available
              </span>

            </div>

          </div>
                  </div>
<br></br>
        {/* Team Statistics */}

        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Total Members
            </h3>

            <p className="text-4xl font-bold text-[#5B5CEB] mt-4">
              12
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Active Members
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-4">
              8
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Busy Members
            </h3>

            <p className="text-4xl font-bold text-yellow-500 mt-4">
              4
            </p>

          </div>

        </div>

      </main>

    </div>

  );
}

export default Team;