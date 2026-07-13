import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import profile from "../assets/Professional photo.jpg";
import rahul from "../assets/10.jpg";
import akhil from "../assets/111.jpg";
import ram from "../assets/112.webp";
import somu from "../assets/113.avif";
import raghav from "../assets/114.webp";
import sai from "../assets/115.webp";
import nikhil from "../assets/116.webp";

import {
  MdAdd,
  MdMoreHoriz,
  MdEdit,
  MdDelete,
} from "react-icons/md";

function Kanban() {

  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Todo",
    progress: 0,
    dueDate: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleChange = (e) => {

    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });

  };
    const createTask = async () => {

    try {

      const token = localStorage.getItem("token");

      if (editingId) {

        await axios.put(
          `http://localhost:5000/api/tasks/${editingId}`,
          taskData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      } else {

        await axios.post(
          "http://localhost:5000/api/tasks",
          taskData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      }

      fetchTasks();

      setShowModal(false);

      setEditingId(null);

      setTaskData({
        title: "",
        description: "",
        priority: "Medium",
        status: "Todo",
        progress: 0,
        dueDate: "",
      });

    } catch (error) {

      console.error(error);

      alert("Unable to save task.");

    }

  };

  const editTask = (task) => {

    setEditingId(task._id);

    setTaskData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      progress: task.progress,
      dueDate: task.dueDate
        ? task.dueDate.substring(0, 10)
        : "",
    });

    setShowModal(true);

  };

  const deleteTask = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();

    } catch (error) {

      console.error(error);

      alert("Unable to delete task.");

    }

  };

  const todoTasks = tasks.filter(
    (task) => task.status === "Todo"
  );

  const progressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "Done"
  );

  return (

    <div className="flex min-h-screen bg-[#EEF2F7]">

      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">

        <Header />

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-3xl font-bold text-[#5B6B88]">
              Kanban Board
            </h1>

            <p className="text-gray-500 mt-2">
              Organize and track your project tasks.
            </p>

          </div>

          <button
            onClick={() => {

              setEditingId(null);

              setTaskData({
                title: "",
                description: "",
                priority: "Medium",
                status: "Todo",
                progress: 0,
                dueDate: "",
              });

              setShowModal(true);

            }}
            className="flex items-center gap-2 bg-[#5B5CEB] text-white px-6 py-3 rounded-xl shadow hover:bg-[#4A4BD8] transition"
          >

            <MdAdd size={22} />

            New Task

          </button>

        </div>

        <div className="grid grid-cols-3 gap-8 mt-10">
                    {/* TODO  */}

          <div className="bg-[#F8F9FC] rounded-3xl p-6 shadow-md">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  Todo
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {todoTasks.length} Tasks
                </p>

              </div>

              <MdMoreHoriz
                size={24}
                className="text-gray-500"
              />

            </div>

            <div className="space-y-5">

              {todoTasks.length === 0 ? (

                <div className="bg-white rounded-2xl p-6 text-center text-gray-500">

                  No Tasks

                </div>

              ) : (

                todoTasks.map((task) => (

                  <div
                    key={task._id}
                    className="bg-white rounded-2xl shadow-sm p-5"
                  >

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold
                      ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >

                      {task.priority}

                    </span>

                    <h3 className="mt-4 text-lg font-bold text-gray-700">

                      {task.title}

                    </h3>

                    <p className="text-sm text-gray-500 mt-2">

                      {task.description}

                    </p>

                    <div className="flex justify-between items-center mt-6">

                      <span className="text-sm text-gray-500">

                        {task.dueDate
                          ? new Date(task.dueDate).toLocaleDateString()
                          : "No Date"}

                      </span>

                      <img
                        src={profile}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />

                    </div>

                    <div className="flex justify-end gap-3 mt-5">

                      <button
                        onClick={() => editTask(task)}
                        className="text-blue-600 hover:text-blue-800"
                      >

                        <MdEdit size={20} />

                      </button>

                      <button
                        onClick={() => deleteTask(task._id)}
                        className="text-red-600 hover:text-red-800"
                      >

                        <MdDelete size={20} />

                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>
                    {/*  IN PROGRESS  */}

          <div className="bg-[#F8F9FC] rounded-3xl p-6 shadow-md">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  In Progress
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {progressTasks.length} Tasks
                </p>

              </div>

              <MdMoreHoriz
                size={24}
                className="text-gray-500"
              />

            </div>

            <div className="space-y-5">

              {progressTasks.length === 0 ? (

                <div className="bg-white rounded-2xl p-6 text-center text-gray-500">

                  No Tasks

                </div>

              ) : (

                progressTasks.map((task) => (

                  <div
                    key={task._id}
                    className="bg-white rounded-2xl shadow-sm p-5"
                  >

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold
                      ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >

                      {task.priority}

                    </span>

                    <h3 className="mt-4 text-lg font-bold text-gray-700">

                      {task.title}

                    </h3>

                    <p className="text-sm text-gray-500 mt-2">

                      {task.description}

                    </p>

                    <div className="mt-5">

                      <div className="flex justify-between text-sm mb-2">

                        <span className="text-gray-600">
                          Progress
                        </span>

                        <span className="font-semibold text-indigo-600">

                          {task.progress}%

                        </span>

                      </div>

                      <div className="w-full h-2 bg-gray-200 rounded-full">

                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{
                            width: `${task.progress}%`,
                          }}
                        ></div>

                      </div>

                    </div>

                    <div className="flex justify-between items-center mt-6">

                      <span className="text-sm text-gray-500">

                        {task.dueDate
                          ? new Date(task.dueDate).toLocaleDateString()
                          : "No Date"}

                      </span>

                      <img
                        src={ram}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />

                    </div>

                    <div className="flex justify-end gap-3 mt-5">

                      <button
                        onClick={() => editTask(task)}
                        className="text-blue-600 hover:text-blue-800"
                      >

                        <MdEdit size={20} />

                      </button>

                      <button
                        onClick={() => deleteTask(task._id)}
                        className="text-red-600 hover:text-red-800"
                      >

                        <MdDelete size={20} />

                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>
                    {/* DONE */}

          <div className="bg-[#F8F9FC] rounded-3xl p-6 shadow-md">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-xl font-bold text-gray-700">
                  Done
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {doneTasks.length} Tasks
                </p>

              </div>

              <MdMoreHoriz
                size={24}
                className="text-gray-500"
              />

            </div>

            <div className="space-y-5">

              {doneTasks.length === 0 ? (

                <div className="bg-white rounded-2xl p-6 text-center text-gray-500">

                  No Tasks

                </div>

              ) : (

                doneTasks.map((task) => (

                  <div
                    key={task._id}
                    className="bg-white rounded-2xl shadow-sm p-5"
                  >

                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">

                      Completed

                    </span>

                    <h3 className="mt-4 text-lg font-bold text-gray-700">

                      {task.title}

                    </h3>

                    <p className="text-sm text-gray-500 mt-2">

                      {task.description}

                    </p>

                    <div className="flex justify-between items-center mt-6">

                      <span className="text-sm text-green-600 font-medium">

                        ✔ Completed

                      </span>

                      <img
                        src={nikhil}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />

                    </div>

                    <div className="flex justify-end gap-3 mt-5">

                      <button
                        onClick={() => editTask(task)}
                        className="text-blue-600 hover:text-blue-800"
                      >

                        <MdEdit size={20} />

                      </button>

                      <button
                        onClick={() => deleteTask(task._id)}
                        className="text-red-600 hover:text-red-800"
                      >

                        <MdDelete size={20} />

                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>
              {/* Create / Edit Task Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-[650px] rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-[#5B5CEB] mb-8">

              {editingId ? "Edit Task" : "Create New Task"}

            </h2>

            <div className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Task Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={taskData.title}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#5B5CEB]"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Description
                </label>

                <textarea
                  rows="4"
                  name="description"
                  value={taskData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#5B5CEB]"
                />

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="block mb-2 font-medium">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={taskData.priority}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >

                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>

                  </select>

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Status
                  </label>

                  <select
                    name="status"
                    value={taskData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >

                    <option>Todo</option>
                    <option>In Progress</option>
                    <option>Done</option>

                  </select>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="block mb-2 font-medium">
                    Progress
                  </label>

                  <input
                    type="number"
                    name="progress"
                    min="0"
                    max="100"
                    value={taskData.progress}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Due Date
                  </label>

                  <input
                    type="date"
                    name="dueDate"
                    value={taskData.dueDate}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                </div>

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
                onClick={createTask}
                className="bg-[#5B5CEB] hover:bg-[#4B4CCB] text-white px-8 py-3 rounded-xl"
              >

                {editingId
                  ? "Update Task"
                  : "Save Task"}

              </button>

            </div>

          </div>

        </div>

      )}

    </main>

  </div>

  );

}

export default Kanban;
       