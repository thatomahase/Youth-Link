import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! I'm the Youth-Link assistant. Ask me anything." }
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSend(e) {
        e.preventDefault();
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:5000/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                     message: input,
                     history: messages 
                    }),
            });

            const data = await response.json();
            const botMessage = { sender: "bot", text: data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error connecting to chatbot:", error);
            const errorMessage = { sender: "bot", text: "Sorry, I couldn't connect right now. Try again later." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="chatbot-wrapper">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <p key={index} className={msg.sender}>
                                {msg.text}
                            </p>
                        ))}

                        {isLoading && <p className="bot">Typing...</p>}
                    </div>

                    <form onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}

            <div className="thought-bubble">

    <div className="thought-text">
        Need some help? 💭
    </div>

    <span className="thought-dot dot-one"></span>

    <span className="thought-dot dot-two"></span>

    <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Chat"}
    </button>

        </div>
        </div>
    );
}

export default Chatbot;