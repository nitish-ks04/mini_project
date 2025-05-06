import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css"
import Firstillus from "../image/first-illus.svg"
import secondillus from "../image/Bus.jpg"
import NavButton from "../component/nav_butt";
function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const features = [
        "Real-time tracking of buses",
        "Dynamic route optimization",
        "Passenger demand forecasting",
        "Fleet performance analytics",
        "User-friendly interface for operators",
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    };
    const navigate = useNavigate();
    return (
        <div className="hom">
            <div className="first-lay">
                <div className="hom-text">
                    <h2>BMTC Fleet Management  & Routing</h2>
                    This project focuses on designing, developing, and simulating an optimized fleet management and routing system for the Bangalore Metropolitan Transport Corporation (BMTC).
                </div>
                <div className="first-illu">
                    <img src={Firstillus} alt="first illustration" />
                </div>
            </div>
            <div className="second-lay">
                <div className="second-text">
                    The primary objective is to enhance fleet utilization and improve overall operational efficiency. The system integrates real-time passenger demand data, traffic conditions, and fleet performance metrics to dynamically allocate buses and optimize routes
                </div>
                <div className="second-illu">
                    <img src={secondillus} alt="second illustration" />
                </div>
            </div>
            <div className="third-lay">
                <h2>Feature</h2>
                <div className="third-text">
                    <button className="arrow-btn" onClick={handlePrev}>←</button>
                    <div className="feature-text">{features[currentIndex]}</div>
                    <button className="arrow-btn" onClick={handleNext}>→</button>
                </div>
            </div>
           <NavButton/>
        </div>
    );

}

export default Home