import React, { useState } from 'react';
import axios from 'axios';

export const Infor = () => {
  // State to store form values as an object
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  // State to manage form submission status and popup visibility
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // handleClick function to manage button click behavior
  const handleClick = () => {
    // You can trigger additional logic on button click
    console.log("Button clicked");
  };

  // handleInputChange to update specific form field dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update specific field
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Log form data
    console.log(formData);
  
    // Send form data to the backend
    axios.post("http://localhost:8081/ContactUs", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  
    // Clear input fields by resetting formData state
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
  
    // Show the success popup
    setIsSubmitted(true);
    setIsPopupVisible(true);
  
    // Hide the popup after 3 seconds
    setTimeout(() => {
      setIsPopupVisible(false);
      setIsSubmitted(false); // Reset form submission status
    }, 10000);
  };
  

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 py-5 text-center text-white">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <a
          href="/dashboard"
          className="mt-2 inline-block text-white bg-yellow-300 px-4 py-2 rounded-md font-bold border-2 border-yellow-300 hover:bg-yellow-500 hover:text-white"
        >
          Back to Dashboard
        </a>
      </header>

      {/* Contact Container */}
      <section className="flex flex-col items-center px-4 py-8">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center mb-8">
          <h3 className="text-xl font-semibold">Your Pet Adoption Farm</h3>
          <h4 className="text-lg mt-2">Address:</h4>
          <p className="mt-2">
            No. 25, Anna Nagar Main Road, Opposite to ABC Supermarket, Madurai - 625020.
          </p>
          <img
            src="assets/images/logo1.png"
            alt="Pet Adoption"
            className="mt-4 mx-auto w-40 h-auto object-contain"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Feedback"
              rows="3"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>

        {/* Success Popup */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-green-600">We Will Get Back to You!</h3>
              <p>Your submission has been successful.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};