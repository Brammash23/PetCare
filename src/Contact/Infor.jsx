export const Infor = () => {
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Address"
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
      </section>
    </div>
  );
};
