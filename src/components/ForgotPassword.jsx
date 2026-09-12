import { useState } from "react";
import Navbar from "./Navbar";
import "./Login.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
    e.preventDefault ();
    console.log("Request reset for:", email);   
}

return(

    <div className="logo">
        <Navbar/>
        <h1><strong>Reset Your Password</strong></h1>
        <form className="login" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
            type="email"
            name="email"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
);
}

export default ForgotPassword;


