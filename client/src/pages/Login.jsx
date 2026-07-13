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

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

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
    <div className="min-h-screen bg-gray-100 flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-700 text-white items-center justify-center">

        <div className="text-center">

          <h1 className="text-5xl font-bold mb-4">
            TaskMatrix
          </h1>

          <p className="text-lg">
            Plan • Collaborate • Deliver
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full md:w-1/2 flex items-center justify-center">

        <div className="bg-white shadow-lg rounded-xl p-10 w-96">

          <h2 className="text-3xl font-bold text-center mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mb-4"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mb-6"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white rounded-lg p-3 hover:bg-blue-800"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-700 font-semibold"
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