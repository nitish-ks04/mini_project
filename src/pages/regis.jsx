import { useForm } from "react-hook-form";
import "../css/regis.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Regis() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const isuser = localStorage.getItem("userInside");
        if (isuser) {
            navigate("/home")
        }
    }, [])

    const handelReg = (data) => {
        console.log(data)
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existinguser = users.find(users => users.email === data.mail)
        if (existinguser) {
            alert("the user is exiting with this email!!")
            return;
        }
        const newuser = {
            name: data.text,
            phone: data.ph,
            email: data.mail,
            password: data.pass,
        };
        users.push(newuser)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("userInside", true)
        localStorage.setItem("currentuser", JSON.stringify(newuser));
        navigate("/home")
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit(handelReg)} className="submit-form">
                <h2>Register </h2>
                <input type="text" placeholder="Enter your name" className="name-input" {...register("text")} />
                <input type="tel" placeholder="Enter your phone number" className="phone-input" {...register("ph", {
                    required: "Phone number is required",
                    pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid 10-digit phone number",
                    },
                })}
                />
                {errors.ph && <span className="error-message">{errors.ph.message}</span>}

                <input type="email" placeholder="Enter your email" className="email-input" {...register("mail", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                    },
                })}
                />
                {errors.mail && <span className="error-message">{errors.mail.message}</span>}
                <input type="password" placeholder="Enter your password" className={`password-input ${errors.pass ? "input-error" : ""}`}{...register("pass", { required: true })} />
                {errors.pass && (<span className="error-message">This field is required</span>)}
                <button type="submit">Submit</button>
            </form>
            <div className="regis-divider"></div>
            <div className="regis-image"> </div>
        </div>
    );
}

export default Regis