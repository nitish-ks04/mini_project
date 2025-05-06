import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/abo_us.css";
import NavButton from "../component/nav_butt";

function About_us() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const isUser = localStorage.getItem("userInside");
        if (!isUser) {
            alert("Login or register first to access");
            navigate('/');
        }
    }, []);

    const onSubmit = async (data) => {
        setLoading(true);
        setError("");
        setForecastData(null);

        try {
            const route = data.text.trim().toUpperCase();
            const selectedTime = data.time; // HH:mm format

            const res = await axios.post("http://localhost:5000/api/forecast", {
                routes: [route]
            });

            const fullForecast = res.data[route];
            if (!fullForecast || !Array.isArray(fullForecast)) {
                setError("No forecast data available");
                return;
            }

            navigate("/output", {
                state: {
                    route,
                    selectedTime,
                    fullForecast,
                }
            });
        } catch (err) {
            console.error(err);
            setError("Failed to fetch forecast");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="about-home">
            <div className="about-im"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="about-form">
                <h2>Enter the route and bus timing</h2>
                <input
                    type="text"
                    placeholder="Enter Bus route"
                    className="about-text"
                    {...register("text", { required: true })}
                />
                <input
                    type="time"
                    className="about-time"
                    {...register("time", { required: true })}
                />
                {errors.text && <span className="about-error-message">Route is required</span>}
                {errors.time && <span className="about-error-message">Time is required</span>}
                <button type="submit">Submit</button>
            </form>

            {/* {loading && <p>Loading forecast...</p>}
            {error && <p className="about-error-message">{error}</p>}

            {forecastData && (
                <div className="about-forecast">
                    <h3>Forecast for Route {forecastData.route} at {forecastData.selectedTime}</h3>
                    <p>Average Estimated Buses: {forecastData.averageBuses}</p>
                </div>
            )} */}
            <NavButton />
        </div>
    );
}

export default About_us;
