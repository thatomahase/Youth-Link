import { useState } from "react";
import "./Chatbot.css";

const faqResponses = [
    {keywords: ["bursary", "bursaries", "apply"], reply: "You can view and apply for bursaries on the Content page - click 'Apply Now!' on any listing."},
    {keywords: ["password", "forgot", "reset"], reply: "Click 'Forgot Password?' on the Login page to reset it."},
    {keywords: ["profile", "edit", "update"], reply: "You can update your bio, skills, Interests, portfolio, and contact information on the Profile page."},
    {keywords: ["contact", "support", "help", "assistance"], reply: "Use the Contact page to send us a message and we will get back to you as soon as possible."},
];

function getBotReply(userText) {
    const lowerText = userText. toLowerCase();
    const match = faqResponses.find((item) =>
    item.keywords.some((keyword) => lowerText.includes(keyword))
);
return match ? match.reply : "I'm not really sure about that yet - try asking about bursaries, your profile, or contacting support.";
}


function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState ([
        {sender: "bot", text: "Hi! I'm the Youth-Link assistant. Ask me anything." }
    ]);

    const [input, setInput] = useState("");

    function handleSend(e) {
        e.preventDefault();
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input };
        const botMessage = { sender: "bot", text: getBotReply(input) };
        setMessages([...messages, userMessage, botMessage]);
        setInput("");
    }
    return (
        <div className="chatbot-wrapper">
            {isOpen && (
                <div className="chabot-window">
                    <div className="chatbot-messages">
                         {messages.map((msg, index) =>(
                        <p key={index} className={msg.sender}>
                            {msg.text}
                        </p>

                    ))}
                    </div>

                    <form onSubmit={handleSend}>
                        <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange= {(e) => setInput(e.target.value)}
                        />
                    </form>
                   
                    
                </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close": "Chat"}
        </button>

        </div>

        
    );
}

export default Chatbot;
