import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Profile.css";

function Profile() {
    const [profile, setProfile] = useState(null);

    const [formData, setFormData] = useState({
        bio: "",
        skills: "",
        interests: "",
        email: "",
        number: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:5000/api/students/profile", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Profile saved:", data);
            })
            .catch((err) => console.error("Error saving profile:", err));
    }

    useEffect(() => {
        fetch("http://localhost:5000/api/students/profile", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => setProfile(data))
            .catch((err) => console.error("Error fetching profile:", err));
    }, []);

    return (
        <div className="profile">
            <Navbar />
            <main>
                <h1>Profile</h1>

                {profile && <p>Welcome back, {profile.username}</p>}

                <form onSubmit={handleSubmit}>
                    <section className="profile_picture">
                        <label htmlFor="profilePic">Upload Profile Picture: </label>
                        <input
                            type="file"
                            id="profilePic"
                            name="profilePic"
                            accept="image/*"
                        />
                    </section>

                    <section className="bio">
                        <label htmlFor="bio">Bio: </label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="5"
                            placeholder="About yourself: "
                            value={formData.bio}
                            onChange={handleChange}
                        ></textarea>
                    </section>

                    <section className="skills">
                        <label htmlFor="skills">Skills: </label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder="e.g. Python, JS, Java"
                            value={formData.skills}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="interests">
                        <label htmlFor="interests">Interests:</label>
                        <input
                            type="text"
                            id="interests"
                            name="interests"
                            placeholder="e.g. Full-Stack Dev, Data Analysis"
                            value={formData.interests}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="portfolio">
                        <label htmlFor="portfolio">Portfolio</label>
                        <input
                            type="file"
                            id="portfolio"
                            name="portfolio"
                            multiple
                            accept=".pdf, image/*"
                        />
                    </section>

                    <section className="contact">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe23@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="number">Number: </label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            placeholder="+27 12 345 6789"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </section>

                    <button type="submit">Save Profile</button>
                </form>
            </main>
        </div>
    );
}

export default Profile;