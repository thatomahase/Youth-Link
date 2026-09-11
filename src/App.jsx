import Home from "./components/Home";
import{Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Opportunities from "./components/Opportunities";
import Contact from "./components/Contact";
import About from "./components/About";
import Profile from "./components/Profile";
import "./App.css";
function App() {

  return (
    
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path= "/signUp" element = {<SignUp/>} />
      <Route path="/login" element= {<Login/>} />
      <Route path="/opportunities" element= {<Opportunities/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/profile" element= {<Profile/>} />

    </Routes>

 
  );
}

export default App;