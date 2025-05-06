import "../css/nav_butt.css"
import { useNavigate } from "react-router-dom";

function NavButton(){
    const navigate = useNavigate();
    return(
        <div className="home-register">
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/abo_us")}>Route </button>
            <button onClick={() => navigate("/profile")}>Profile </button>  
        </div>
    )
}

export default NavButton;