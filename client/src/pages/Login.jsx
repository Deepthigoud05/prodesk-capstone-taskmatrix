import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-indigo-700 to-blue-600 text-white p-10">

        <div className="max-w-md text-center">

          <h1 className="text-5xl font-bold">
            TaskMatrix
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Plan • Collaborate • Deliver
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl md:p-10">

          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              required
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 p-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;