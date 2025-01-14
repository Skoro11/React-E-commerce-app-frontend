import React, { useState, useEffect } from "react";

const CountdownClock = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Define the end date and time for the countdown
  const targetDate = new Date("2025-01-10T23:00:00"); // Example target date (end of the year)

 
  // Function to update the countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now; // Time difference in milliseconds

      // If the time difference is less than or equal to 0, clear the interval and stop updating
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Update the state with the new time, ensuring two digits for hours, minutes, and seconds
      setTimeRemaining({
        days,
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
      <div className="flexed__countdown">

        <div className="above">
        <span className="day_desc">Days</span>
            
        <span className="day_desc">Hours</span>
        <span className="day_desc">Minutes</span>
        <span className="day_desc">Seconds</span>

        </div>

        <div className="desc__under">
            <span className="desc__number first__num">{timeRemaining.days} </span>
                    <span className="dots">:</span>
            <span className="desc__number">{timeRemaining.hours} </span>
                    <span className="dots">:</span>
            <span className="desc__number">{timeRemaining.minutes} </span>
                    <span className="dots">:</span>
            <span className="desc__number">{timeRemaining.seconds} </span>

        </div>
      </div>
  );
};

export default CountdownClock;