import { useState } from "react";
import Navbar from "./Navbar";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData); // we'll swap this for a real API call once your backend is ready
    }

    return(
        <div className="contact">
            <Navbar/>
            <h1>Contact Youth-Link</h1>

            <p>
                Have a question, suggestion, or need assistance finding an opportunity?
                We would love to hear from you. Send us a message and we'll get back to you
                as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <br />

                <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your Full name"
                      value={formData.name}
                      onChange={handleChange}
                />
                <br />

                <label>Email</label>
                <br />

                <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your registered email address"
                value={formData.email}
                onChange={handleChange}
                />
                <br />

                <label>Message Us</label>
                <br />

                <textarea
                id="message"
                name="message"
                placeholder="How can we assist you today?"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                ></textarea>
                <br />

                <button type="submit">Send Message</button>

            </form>
        </div>
    );
}
export default Contact;