import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex bg-[#EEF2F7]">

      {/* Left Section */}

      <div className="w-1/2 bg-gradient-to-br from-[#5B5CEB] to-[#7475FF] flex flex-col justify-center px-20 text-white">

        <h1 className="text-5xl font-bold">
          Join TaskMatrix
        </h1>

        <p className="mt-6 text-xl leading-9 opacity-90">
          Create an account to manage your projects,
          collaborate with your team and track your
          progress effortlessly.
        </p>

        <div className="mt-12">
          <div className="w-24 h-2 rounded-full bg-white/80 mb-5"></div>
          <div className="w-16 h-2 rounded-full bg-white/50"></div>
        </div>

      </div>

      {/* Right Section */}

      <div className="w-1/2 flex items-center justify-center">

        <div className="w-[520px] bg-white rounded-3xl shadow-xl p-12">

          <h2 className="text-4xl font-bold text-gray-700 text-center">
            Create Account
          </h2>

          <p className="text-gray-500 text-center mt-3 mb-10">
            Sign up to continue
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}

            <div className="mb-6">

              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-500"
              />

            </div>

            {/* Email */}

            <div className="mb-6">

              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-500"
              />

            </div>

            {/* Password */}

            <div className="mb-6">

              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-500"
              />

            </div>

            {/* Confirm Password */}

            <div className="mb-8">

              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-500"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-[#5B5CEB] hover:bg-[#4B4CCB] text-white py-4 rounded-xl font-semibold text-lg transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}

            <Link
              to="/"
              className="text-[#5B5CEB] font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;