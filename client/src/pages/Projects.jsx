import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import rahul from "../assets/10.jpg";
import akhil from "../assets/111.jpg";

import {
  MdAdd,
  MdSearch,
  MdEdit,
  MdDelete,
} from "react-icons/md";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    status: "Active",
    progress: 0,
    dueDate: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProjects(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleChange = (e) => {

    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });

  };
    const createProject = async () => {

    try {

      const token = localStorage.getItem("token");

      if (editingId) {

        await axios.put(
          `http://localhost:5000/api/projects/${editingId}`,
          projectData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      } else {

        await axios.post(
          "http://localhost:5000/api/projects",
          projectData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      }

      fetchProjects();

      setShowModal(false);

      setEditingId(null);

      setProjectData({
        title: "",
        description: "",
        status: "Active",
        progress: 0,
        dueDate: "",
      });

    } catch (error) {

      console.error(error);

      alert("Unable to save project.");

    }

  };

  const editProject = (project) => {

    setEditingId(project._id);

    setProjectData({
      title: project.title,
      description: project.description,
      status: project.status,
      progress: project.progress,
      dueDate: project.dueDate
        ? project.dueDate.substring(0, 10)
        : "",
    });

    setShowModal(true);

  };

  const deleteProject = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProjects();

    } catch (error) {

      console.error(error);

      alert("Unable to delete project.");

    }

  };

  return (

    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-4xl font-bold text-[#5B6B88]">
              Projects
            </h1>

            <p className="text-gray-500 mt-2">
              Manage and monitor all your ongoing projects.
            </p>

          </div>

          <button
            onClick={() => {

              setEditingId(null);

              setProjectData({
                title: "",
                description: "",
                status: "Active",
                progress: 0,
                dueDate: "",
              });

              setShowModal(true);

            }}
            className="flex items-center gap-2 bg-[#5B5CEB] hover:bg-[#4A4BD8] text-white px-6 py-3 rounded-xl shadow transition"
          >

            <MdAdd size={22} />

            New Project

          </button>

        </div>
                {/* Search */}

        <div className="mt-8">

          <div className="relative w-[420px]">

            <MdSearch
              size={22}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Projects..."
              className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#5B5CEB]"
            />

          </div>

        </div>
<br></br>
        {/* Projects Table */}

        <div className="mt-8 bg-white rounded-3xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-[#F8F9FC]">

              <tr className="text-left text-gray-600">

                <th className="px-8 py-5">Project</th>

                <th>Members</th>

                <th>Status</th>

                <th>Due Date</th>

                <th>Progress</th>

                <th className="text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {projects.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No Projects Found
                  </td>

                </tr>

              ) : (

                projects.map((project) => (

                  <tr
                    key={project._id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="px-8 py-6">

                      <div>

                        <h3 className="font-semibold text-gray-700">
                          {project.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {project.description}
                        </p>

                      </div>

                    </td>

                    <td>

                      <div className="flex -space-x-2">

                        <img
                          src={rahul}
                          alt=""
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />

                        <img
                          src={akhil}
                          alt=""
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />

                      </div>

                    </td>

                    <td>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold
                        ${
                          project.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : project.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >

                        {project.status}

                      </span>

                    </td>

                    <td className="text-gray-600">

                      {project.dueDate
                        ? new Date(
                            project.dueDate
                          ).toLocaleDateString()
                        : "Not Set"}

                    </td>

                    <td>

                      <div className="w-40 h-2 bg-gray-200 rounded-full">

                        <div
                          className="h-2 bg-[#5B5CEB] rounded-full"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        ></div>

                      </div>

                      <p className="text-sm mt-2 text-gray-500">

                        {project.progress}%

                      </p>

                    </td>

                    <td>

                      <div className="flex justify-center gap-4">

                        <button
                          onClick={() =>
                            editProject(project)
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >

                          <MdEdit size={20} />

                        </button>

                        <button
                          onClick={() =>
                            deleteProject(project._id)
                          }
                          className="text-red-600 hover:text-red-800"
                        >

                          <MdDelete size={20} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>
        <br></br>
                {/* Summary Cards */}

        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Total Projects
            </h3>

            <p className="text-4xl font-bold text-[#5B5CEB] mt-4">
              {projects.length}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Active Projects
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-4">
              {
                projects.filter(
                  (project) => project.status === "Active"
                ).length
              }
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h3 className="text-lg font-semibold text-gray-600">
              Completed Projects
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-4">
              {
                projects.filter(
                  (project) => project.status === "Completed"
                ).length
              }
            </p>

          </div>

        </div>

      </main>

      {/* Create Project Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-[650px] rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-[#5B5CEB] mb-8">

              {editingId
                ? "Edit Project"
                : "Create New Project"}

            </h2>

            <div className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Project Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={projectData.title}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Description
                </label>

                <textarea
                  rows="4"
                  name="description"
                  value={projectData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                />

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="block mb-2 font-medium">
                    Status
                  </label>

                  <select
                    name="status"
                    value={projectData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >

                    <option>Active</option>
                    <option>Pending</option>
                    <option>Completed</option>

                  </select>

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Progress
                  </label>

                  <input
                    type="number"
                    name="progress"
                    value={projectData.progress}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Due Date
                </label>

                <input
                  type="date"
                  name="dueDate"
                  value={projectData.dueDate}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                />

              </div>

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                }}
                className="px-6 py-3 border rounded-xl hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={createProject}
                className="bg-[#5B5CEB] text-white px-8 py-3 rounded-xl hover:bg-[#4B4CCB]"
              >
                {editingId
                  ? "Update Project"
                  : "Save Project"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default Projects;