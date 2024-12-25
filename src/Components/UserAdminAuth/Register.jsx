import { Link, useNavigate } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { Validity } from './LoginValidity';
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [Error, setError] = useState({
    email: "",
    password: "",
    name: "",
  });
  const Navigate = useNavigate();

  const handleInput = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError({
      email: "",
      password: "",
      name: "",
    });

    const validationErrors = Validity(User); // Validating the inputs
    setError(validationErrors);

    // Check if there are no errors
    if (!validationErrors.email && !validationErrors.password && !validationErrors.name) {
      console.log("HII");
      axios.post("http://localhost:8081/register", User)
        .then((res) => {
          Navigate('/loginform');
          console.log("sucess")
     // Redirect after successful registration
        })
        .catch((err) => {
          console.error("Error occurred while registering: ", err);
        });
    }
  };

  return (
    <div className="font-sans m-0 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container flex w-[700px] bg-white rounded-md shadow-md">
        {/* Right Section */}
        <div className="right-section bg-yellow-100 flex-1 p-12 flex flex-col justify-center">
          <div className="logo mb-5">
            <MdPets className="w-48 size-20 pl-8" />
          </div>
          <h1 className="text-2xl font-medium mb-7">Please Fill out this to Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-4 mb-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="text"
              placeholder="Username"
              name="name"
              value={User.name}
              onChange={handleInput}
              required
            />
            {Error.name && <span className="text-1xl text-sm text-red-500">{Error.name}</span>}

            <input
              className="w-full p-4 mb-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="email"
              placeholder="UserEmail"
              name="email"
              value={User.email}
              onChange={handleInput}
              required
            />
            {Error.email && <span className="text-1xl text-sm text-red-500">{Error.email}</span>}

            <input
              className="w-full p-4 mb-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="password"
              placeholder="Password"
              name="password"
              value={User.password}
              onChange={handleInput}
              required
            />
            {Error.password && <span className="text-red-500 text-sm block mt-1">{Error.password}</span>}

            <button
              className="bg-orange-300 text-white px-5 py-3 rounded hover:bg-orange-400 transition-colors cursor-pointer"
              type="submit"
            >
              Register
            </button>
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <Link className="text-orange-400 hover:text-orange-400 underline" to="/loginform">
                Login
              </Link>
            </p>
          </form>
        </div>
        {/* Left Section */}
        <div className="left-section w-96 flex-1 bg-white-100 flex justify-center items-center">
          <img className="max-w-full h-auto" src="images/slide.jpg" alt="Dog" />
        </div>
      </div>
    </div>
  );
};
