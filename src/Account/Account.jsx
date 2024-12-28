import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Account = () => {
  const [User, setUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    Adopt_count:'',
  });

  const Navigate=useNavigate()
  
  const [loading, setLoading] = useState(true); // To show loading while fetching data

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const email = localStorage.getItem('email');
    console.log("Stored email:", email); // Debugging the email from localStorage

    axios
      .get("http://localhost:8081/account", {
        headers: {
          "Authorization": `Bearer ${email}`, // sending email as token or header
        },
      })
      .then((response) => {
        console.log(response.data[0].id); // Log the response to see if it contains name, email, etc.
        
        // If the response is as expected, set the user state
        if (response.data) {
          setUser({
            id: response.data[0].id,
            name: response.data[0].name,
            email: response.data[0].email,
            phone: response.data[0].phone,
            Adopt_count:response.data[0].pets,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Handle the error
      })
      .finally(() => {
        setLoading(false); // Stop loading after the data is fetched
      });
      console.log(User)
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }
  const handleRegister = (e) => {
    e.preventDefault();
     localStorage.removeItem('email');
     localStorage.removeItem('loggedin');
     Navigate('/loginform')

  };

  const handleData = () =>{
    Navigate('/view-adaptions')
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
          {/* Profile Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">User Profile</h1>
            <p className="text-gray-600 mt-2">Welcome back, {User.name}!</p>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Username:</span>
              <span className="font-semibold text-gray-800">{User.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-semibold text-gray-800">{User.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-semibold text-gray-800">{User.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="font-semibold text-gray-800">{User.phone}</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 text-center">
            <button
            onClick={handleRegister} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Logout
            </button>
          </div>

          <div className="mt-6 text-center">
            <button onClick={handleData}
            className="px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View Adoptions
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
