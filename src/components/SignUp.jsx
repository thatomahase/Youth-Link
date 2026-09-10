import { useState } from "react";
import Navbar from "./Navbar";
import "./SignUp.css";

function SignUp() {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        // Check if required fields are empty
        if (
            user.fullname === "" ||
            user.email === "" ||
            user.password === "" ||
            user.confirmPassword === ""
        ) {
            newErrors.general = "Please fill in the required fields.";
            setErrors(newErrors);
            return;
        }

        // Check email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            newErrors.email = "Please enter a valid email address";
            setErrors(newErrors);
            return;
        }

        // Check password length
        if (user.password.length < 8) {
            newErrors.password =
                "Your password must have at least 8 characters.";
            setErrors(newErrors);
            return;
        }

        // Check passwords match
        if (user.password !== user.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            setErrors(newErrors);
            return;
        }

        // Clear errors
        setErrors({});

        // Data that will be sent to Flask
        const userData = {
            username: user.fullname,
            email: user.email,
            password: user.password,
            role: "student",
        };

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/users/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                console.log("Account created successfully!");
                console.log(data);
            } else {
                console.log("Registration failed:", data.message);
            }
        } catch (error) {
            console.error("Error connecting to server:", error);
        }
    };

    return (
        <div className="signup">
            <Navbar />

            <h1>Create Account</h1>

            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <br />

                <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Your Full Name"
                    required
                    value={user.fullname}
                    onChange={handleChange}
                />

                <br />

                <label>Email</label>
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    required
                    value={user.email}
                    onChange={handleChange}
                />

                <br />

                {errors.email && (
                    <p className="error-text">{errors.email}</p>
                )}

                <label>Password</label>
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    required
                    value={user.password}
                    onChange={handleChange}
                />

                <br />

                {errors.password && (
                    <p className="error-text">{errors.password}</p>
                )}

                <label>Confirm Password</label>
                <br />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Please enter your Password again"
                    required
                    value={user.confirmPassword}
                    onChange={handleChange}
                />

                <br />

                {errors.confirmPassword && (
                    <p className="error-text">
                        {errors.confirmPassword}
                    </p>
                )}

                {errors.general && (
                    <p className="error-text">{errors.general}</p>
                )}

                <button type="submit">Submit</button>
                <br />
            </form>
        </div>
    );
}

export default SignUp;