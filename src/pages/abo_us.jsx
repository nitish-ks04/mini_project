import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../css/abo_us.css"
function About_us() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handereg = handleSubmit()
    useEffect(() => {
        const isUser = localStorage.getItem("userInside");
        if (!isUser) {
            alert("login or register first to access");
            navigate('/');
        }
    }, [])


    return (
        <div className="about-home">
            <div className="about-im"></div>
            <form onSubmit={handleSubmit(handereg)} className="about-form">
                <h2>Enter the route and bus timing </h2>
                <input type="text" placeholder="Enter Bus route" className="about-text" {...register("text")} />
                <input type="time" placeholder="Enter a time" className="about-time" {...register("time", { required: true })} />
                {errors.time && <span className="about-error-message">This field is required</span>}
                <button type="submit">Submit</button>
            </form>
            <div className="about-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/profile")}>Profile </button>  
            </div>
        </div>
    );
}
export default About_us