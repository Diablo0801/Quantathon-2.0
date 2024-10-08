import React, { useState, useRef, useEffect } from "react";
import './countdown.css'

const App = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days: days > 9 ? days : "0" + days,
            hours: hours > 9 ? hours : "0" + hours,
            minutes: minutes > 9 ? minutes : "0" + minutes,
            seconds: seconds > 9 ? seconds : "0" + seconds,
        };
    };

    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer({ days, hours, minutes, seconds });
        }
    };

    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date("2024-10-13T23:59:59");
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
        return () => clearInterval(Ref.current);
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    return (
        <div className="countdown-container">
            <h3>Time Remaining</h3>
            <div className="countdown-timer">
                <div className="time-section">
                    <span className="time">{timer.days}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-section">
                    <span className="time">{timer.hours}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-section">
                    <span className="time">{timer.minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-section">
                    <span className="time">{timer.seconds}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default App;
