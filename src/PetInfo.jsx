import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PetInfo = () => {
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { value } = useParams(); // Extract any params from the URL (optional)
  const petId = localStorage.getItem("selectedPetId"); // Get pet ID from localStorage
  const navigate = useNavigate();

  useEffect(() => {
    if (petId) {
      axios
        .post("http://localhost:8081/petinfo", { Id: petId })
        .then((res) => {
          setPetData(res.data.pet); // Set pet data
          setLoading(false); // Set loading to false
        })
        .catch((err) => {
          console.error("Error fetching pet data:", err);
          setLoading(false);
        });
    }
  }, [petId]);

  const handleRegister = () => {
    const decision=localStorage.getItem('loggedin');
    if(decision)
    {
        console.log(decision)
        navigate("/adaption_verify"); 
    }
    else
    {
        navigate("/register"); 
    }
  // Navigate to the verification page
  };

  // Fallback image for missing image or if the image is not in DB
  const getImageUrl = (image) => {
    return image
      ? `/images/${image}` // Local image
      : "https://media.giphy.com/media/26gsgZqvF2RYsEjmw/giphy.gif"; // Fallback animated image
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin border-t-4 border-blue-500 rounded-full h-16 w-16"></div>
        </div>
      ) : (
        petData && (
          <div className="flex flex-col items-center space-y-8">
            {/* Image Section */}
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
              <img
                src={getImageUrl(petData.image)} // Dynamic image or fallback image
                alt={petData.name}
                className="w-80 h-80 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Pet Info Section */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">{petData.name}</h1>
            <p className="text-xl text-gray-600 mb-6 text-center">{petData.description}</p>

            {/* Facts Section */}
            <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Facts</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li><strong>Breed:</strong> {petData.breed}</li>
                <li><strong>Gender:</strong> {petData.gender}</li>
                <li><strong>Age:</strong> {petData.age}</li>
                <li><strong>Vaccinated:</strong> {petData.vaccinated ? "Yes" : "No"}</li>
                <li><strong>Pet ID:</strong> {petData.id}</li>
              </ul>
            </div>

            {/* Info Section */}
            <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Info</h2>
              <p className="text-gray-600 text-lg">
                <span className="font-bold">Type:</span> {petData.type}
              </p>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register Adoption
            </button>
          </div>
        )
      )}
    </div>
  );
};
