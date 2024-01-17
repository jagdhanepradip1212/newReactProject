import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Components/Pages/Home/Home";
import Company from "./Components/Pages/Company/Company";
import Service from "./Components/Pages/Services/Services";
import Pricing from "./Components/Pages/Pricing";
import Signup from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Contact from "./Components/Pages/Contact";
import ForgotPass from "./Components/Auth/ForgotPassword";
import Terms from "./Components/Utility/Terms";
import PrivatePolicy from "./Components/Utility/PrivatePolicy";
import HelpFaq from "./Components/Help-Center/HelpFaq";
import HelpGuide from "./Components/Help-Center/HelpGuide";
import HoweWork from "./Components/Pages/HoweWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/privacy" element={<PrivatePolicy />}></Route>
        <Route path="/faqs" element={<HelpFaq />}></Route>
        <Route path="/guide" element={<HelpGuide />}></Route>
        <Route path="/howework" element={<HoweWork />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>

        <Route path="/forgotpassword" element={<ForgotPass />}></Route>
      </Routes>
    </div>
  );
}

export default App;
