import { Link, useNavigate } from 'react-router-dom';
import { MdPets } from "react-icons/md";
import { useState } from 'react';
import { Validity } from './LoginValidity'; // Ensure this validation function is correct
import axios from 'axios';

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const Navigate = useNavigate();

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = Validity(user);
    setError(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      axios.post("http://localhost:8081/loginform", user)
        .then((res) => {
          if (res.data.status === "ok") {
            alert("Login successful!");
            localStorage.setItem('email', user.email);
            localStorage.setItem('loggedin', true);
            localStorage.setItem('user_id', user.id);
             // Store email in localStorage
            Navigate('/home'); // Navigate to the home page
          } else if (res.data === "failure") {
            alert("Invalid email or password. Please try again.");
          }
        })
        .catch((err) => {
          console.error("Error occurred while logging in: ", err);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <div className="font-sans m-0 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container flex w-[700px] bg-white rounded-md shadow-md">
        <div className="left-section flex-1 bg-white-100 flex justify-center items-center">
          <img className="max-w-full h-auto" src="images/loginslide.jpg" alt="Dog" />
        </div>

        <div className="right-section flex-1 p-12 flex flex-col bg-yellow-200 justify-center">
          <div className="logo mb-5">
            <MdPets className="w-48 size-20 pl-8" />
          </div>
          <h1 className="text-2xl font-semibold mb-7">Login</h1>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-5">
              <input
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                type="email"
                placeholder="Email"
                onChange={handleInput}
                name="email"
                value={user.email}
                required
              />
              {error.email && <span className="text-sm text-red-500">{error.email}</span>}
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <input
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                type="password"
                placeholder="Password"
                onChange={handleInput}
                name="password"
                value={user.password}
                required
              />
              {error.password && <span className="text-sm text-red-500">{error.password}</span>}
            </div>

            {/* Login Button */}
            <button
              className="bg-orange-300 text-white px-5 py-3 rounded hover:bg-orange-400 transition-colors cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <Link
              className="text-orange-400 hover:text-orange-400 underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
