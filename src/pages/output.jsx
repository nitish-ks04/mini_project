import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/output.css";

const Output = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { route, selectedTime, fullForecast } = location.state || {};

    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        if (!route || !selectedTime || !fullForecast) {
            alert("data is empty !!")
            navigate('/abo_us');
            return;
        }

        const matchedEntries = fullForecast.filter(
            (entry) => entry.Hour.slice(0, 5) === selectedTime
        );

        if (matchedEntries.length > 0) {
            console.log("Matched entries:", matchedEntries);
            const total = matchedEntries.reduce(
                (sum, entry) => sum + entry["Estimated Buses Required"],
                0
            );
            console.log("total", total)
            const averages = total / matchedEntries.length;
            const average = averages / 45
            console.log("average ", average)
            setSelectedData({
                ...matchedEntries[0],
                averageBuses: average
            });
        } else {
            setSelectedData(null);
        }
    }, [route, selectedTime, fullForecast, navigate]);

    const getUniqueEntries = (entries) => {
        const seen = new Set();
        return entries.filter((entry) => {
            const time = entry.Hour.slice(0, 5);
            if (seen.has(time)) {
                return false;
            }
            seen.add(time);
            return true;
        });
    };
    const uniqueForecastData = getUniqueEntries(fullForecast);

    return (
        <div className="out-home">
            <div className="out-firlayout">
                {selectedData ? (
                    <div className="out-forecast">
                        <h3>Forecast for Route <strong>{route}</strong> at <strong>{selectedTime}</strong></h3>
                        <p><strong>Estimated Buses Required:</strong> {Math.round(selectedData.averageBuses)}</p>
                    </div>
                ) : (
                    <p>No forecast data available for {selectedTime}</p>
                )}
            </div>

            <div className="out-seclayout">
                <h4>All Forecast Entries</h4>
                <table className='forecast-table'>
                    <thead>
                        <tr>
                            <th>Hour</th>
                            <th>Estimated Buses Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uniqueForecastData.map((entry, index) => {
                            const isSelected = entry.Hour.slice(0, 5) === selectedTime;
                            const time = entry.Hour.slice(0, 5); 
                            const entriesAtSameTime = fullForecast.filter(e => e.Hour.slice(0, 5) === time);
                            const total = entriesAtSameTime.reduce((sum, e) => sum + e["Estimated Buses Required"], 0);
                            const averageDivided = (total / entriesAtSameTime.length) / 45;
                            return (
                                <tr key={index} className={isSelected ? "highlight-row" : ""}>
                                    <td>{entry.Hour}</td>
                                    <td>{Math.round(averageDivided) || 'N/A'}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
            <button className='out-but' onClick={() => navigate("/abo_us")}>Back to Route</button>
        </div>
    );
};

export default Output;