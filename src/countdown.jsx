import React, { useState, useRef, useEffect } from "react";
import './countdown.css'

const App = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24)); 
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (days > 9 ? days : "0" + days) + ":" +
                (hours > 9 ? hours : "0" + hours) + ":" +
                (minutes > 9 ? minutes : "0" + minutes) + ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer("02:00:00:00"); 

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setHours(deadline.getHours() + 48); 
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
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h3>Time Remaining</h3>
            <h2>{timer}</h2>
            
        </div>
    );
};

export default App;
