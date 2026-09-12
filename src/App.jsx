import Home from "./components/Home";
import{Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Opportunities from "./components/Opportunities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";
function App() {

  return (
    
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path= "/signUp" element = {<SignUp/>} />
      <Route path="/login" element= {<Login/>} />
      <Route path="/opportunities" element= {<Opportunities/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/profile" element= {<Profile/>} /> 
      <Route path="/forgot-password" element= {<ForgotPassword/>} />
      <Route path="/footer" element={<Footer/>} />

    </Routes>

 
  );
}

export default App;