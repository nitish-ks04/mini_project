import "../css/navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-brand">
                <a href="/">BMTC</a>
            </div>
            <div className="nav-link">
                {/* <a href="/home">Home</a> */}
                <a href="/login">Login</a>
                <a href="/regis">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar