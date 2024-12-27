import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginForm } from "./Components/UserAdminAuth/LoginForm";
import { Register } from "./Components/UserAdminAuth/Register";
import { Home } from "./Home";
import { Blogs } from "./Blogs";
import { ContactUs } from "./ContactUs";
import { AdoptCatlog } from "./AdoptCatlog";
import { About } from "./About";
import { Account } from "./Account/Account";



function App() {
  const [count, setCount] = useState(0);

  return (
   <>
    <div>
      {/* Routes for navigation */}
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/adopt" element={<AdoptCatlog />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  <Account />
   </>
  );
}

export default App;
