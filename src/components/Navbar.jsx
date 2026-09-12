import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <h2>Youth-Link</h2>

            <ul>
                 <li><Link to = "/home">Home</Link></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/opportunities">Content</a></li>
                <li><Link to = "/about">About</Link></li>
                <li><a href="/contact">Contact</a></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
