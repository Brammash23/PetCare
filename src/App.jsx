import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginForm } from "./Components/UserAdminAuth/LoginForm";
import { Register } from "./Components/UserAdminAuth/Register";
import { Home } from "./Main/Home";

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
        {/* Add more routes as needed */}
      </Routes>
    </div>

   </>
  );
}

export default App;
