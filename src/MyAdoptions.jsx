import axios from "axios";
import { useState, useEffect } from "react";

export const MyAdoptions = () => {
  const [Email] = useState(localStorage.getItem('email')); // Get email from local storage
  const [adoptions, setAdoptions] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    if (Email) {
      axios.post('http://localhost:8081/myadoptions', { Email }) // Send Email as an object
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAdoptions(res.data); // Store response data
          } else {
            setAdoptions([]); // Set to empty array if no adoptions are found
          }
        })
        .catch((err) => {
          console.error(err);
          setError(err.response?.data?.error || "An error occurred while fetching adoptions.");
        });
    } else {
      setError("Email is not available in local storage.");
    }
  }, [Email]);

  return (
    <>
      <div className="container mx-auto mt-6">
        <h1 className="text-2xl font-bold text-gray-800">My Adoptions</h1>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 mt-4 p-4 bg-red-100 rounded-md">
            <p>{error}</p>
          </div>
        )}

        {/* Adoptions */}
        {adoptions && adoptions.length > 0 && (
          <div className="mt-4">
            {adoptions.map((adoption, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md my-2">
                <p><strong>Pet ID:</strong> {adoption.pet_id}</p>
                <p><strong>Name:</strong> {adoption.firstname} {adoption.lastname}</p>
                <p><strong>Address:</strong> {adoption.address}</p>
              </div>
            ))}
          </div>
        )}

        {/* No Adoptions Found */}
        {adoptions && adoptions.length === 0 && (
          <div className="mt-4 p-4 bg-blue-100 rounded-md text-blue-600 text-center">
            <p>No adoptions found. Please consider adopting a pet!</p>
          </div>
        )}
      </div>
    </>
  );
};
