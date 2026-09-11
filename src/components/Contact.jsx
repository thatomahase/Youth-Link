import Navbar from "./Navbar";

function Contact() {
    return(
        <div className="contact">
            <Navbar/>
            <h1>Contact Youth-Link</h1>

            <p>
                Have a question, suggestion, or need assistance finding an opportunity?
                We would love to hear from you. Send us a message and we'll get back to you
                as soon as possible.
            </p>

            <form className="contact-form">
                <label>Full Name</label>
                <br />

                <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your Full name"
                
                />
                <br />

                <label>Email</label>
                <br />

                <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your registered email address"
                />
                <br />

                <label>Message Us</label>
                <br />

                <textarea
                id="message"
                name="message"
                placeholder="How can we assist you today?"
                rows="6"
                ></textarea>
                <br />

                <button type="submit">Send Message</button>

            </form>
        </div>
    );
}
export default Contact;