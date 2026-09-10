import { useState } from "react";
import Navbar from "./Navbar";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Log in successful!");
                console.log("Role:", data.role);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error connecting to server:", error);
        };
    };
    
    return(

        <div className="login">
            <Navbar/>
            <h1>Login Account</h1>
            <form className="login" onSubmit={handleLogin}>
                <label>Email</label>
                <input
                type="email"
                name="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />
                <label>Password</label>
                <input
                type="password"
                name="password"
                placeholder="Enter your registered password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type="submit">Submit</button><br />
            </form>
        </div>

    );
};

export default Login;