import React, { useState, useEffect } from "react";
import axios from "axios";

export const Adopt = () => {
  const [pets, setPets] = useState([]); // Store fetched pets data
  const [filters, setFilters] = useState({
    petType: "all",
    breed: "all",
    gender: "all",
    age: "all",
  });

  // Fetch pet data from the backend
  useEffect(() => {
    const value = '0'; // Change this if needed for dynamic filtering
    axios
      .get(`http://localhost:8081/adopt?status=${value}`)  // Fetch pets based on status
      .then((res) => {
        setPets(res.data); // Set fetched pets data to state
      })
      .catch((err) => {
        console.error("Error:", err); // Handle errors
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  // Filter pets based on the selected filters
  const filteredPets = pets.filter((pet) => {
    const { petType, breed, gender, age } = filters;
    return (
      (petType === "all" || pet.type === petType) &&
      (breed === "all" || pet.breed === breed) &&
      (gender === "all" || pet.gender === gender) &&
      (age === "all" || pet.age === age)
    );
  });

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5 font-sans">
        <h1 className="text-3xl font-bold text-center mb-6">
          Find Your New Best Friend
        </h1>

        {/* Filters Section */}
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <label htmlFor="petType" className="block mb-2 text-sm font-medium">
              Pet Type:
            </label>
            <select
              id="petType"
              className="w-full p-2 border rounded"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <label htmlFor="breed" className="block mb-2 text-sm font-medium">
              Breed:
            </label>
            <select
              id="breed"
              className="w-full p-2 border rounded"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="golden-retriever">Golden Retriever</option>
              <option value="labrador">Labrador</option>
              <option value="dachshund">Dachshund</option>
              <option value="siamese">Siamese</option>
              <option value="persian">Persian</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium">
              Gender:
            </label>
            <select
              id="gender"
              className="w-full p-2 border rounded"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <label htmlFor="age" className="block mb-2 text-sm font-medium">
              Age:
            </label>
            <select
              id="age"
              className="w-full p-2 border rounded"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="puppy">puppy</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Pet Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="text-center bg-white border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-sm text-gray-500 capitalize">{pet.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
