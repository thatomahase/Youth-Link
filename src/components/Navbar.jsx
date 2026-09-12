import { Link } from "react-router-dom";
function Navbar() {
    const loggedIn= !!localStorage.getItem("token");

    let profileLink = null;
    if (loggedIn) {
        profileLink = <li><Link to="/profile"></Link></li>;
    }
    let authlink;
    if (loggedIn) {
        authlink = <li><Link to ="/logout">Logout</Link></li>;  
    } else {
        authlink = <li><Link to ="/login">Login</Link></li>;
    }
    let contentlink = null;
    if (loggedIn) {
        contentlink = <li><Link to="/opportunities">Content</Link></li>;
    }
    return (
        <nav>
            <h2>Youth-Link</h2>

            <ul>
                 <li><Link to = "/home">Home</Link></li>
                 {profileLink}
                 {contentlink}
                 <li><Link to = "/about">About</Link></li>
                 <li><a href="/contact">Contact</a></li>
                 {authlink}
            </ul>
        </nav>
    );
}

export default Navbar;
