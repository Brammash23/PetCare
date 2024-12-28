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
import { MyAccount } from "./myaccount";
import { Adopt } from "./Common/Adopt";
import { PetInfo } from "./PetInfo";
import { AboutPet } from "./aboutpet";
import { Adaption } from "./Adaption";
import { Adaption_Verify } from "./adaption_verify";
import { ViewAdoptions } from "./ViewAdoptions";
import { GetInvolved } from "./GetInvolved";
import { Admin } from "./Admin/Admin";





function App() {
  const [count, setCount] = useState(0);

  return (
   <>
 
    <div>
  
      {/* Routes for navigation */}
      <Routes>
      <Route path="/adaption_verify" element={<Adaption_Verify/>}/>
      <Route path="/petinfo" element={  <AboutPet />} />
        <Route path="/myaccount" element={  <MyAccount /> } />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/adopt" element={<AdoptCatlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/view-adaptions" element={  <ViewAdoptions />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add more routes as needed */}
      </Routes>

    </div>
    

   </>
  );
}

export default App;
