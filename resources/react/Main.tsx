import React, { useState, useEffect } from 'react';

function Main() {
    // State to hold the countdown values
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Calculate the target date
        const target = new Date("Jan 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();

        // Function to update the countdown
        const updateCountdown = () => {
            const now = new Date().getTime();
            const count = target - now;
            const days = Math.floor(count / (1000 * 60 * 60 * 24));
            const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((count % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });
        };

        // Initial call to set the countdown immediately
        updateCountdown();

        // Set interval to update the countdown every second
        const interval = setInterval(updateCountdown, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card px-3 py-5">
            <div className="card-body py-3">
                <div className="row g-0">
                    <div className="col-md-5 py-3" id="mobile">
                        <h1 className="card-title"><strong>Website is under construction</strong></h1>
                        <p className="card-text sub-title mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-md-7 py-3">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 text-center">
                            <div className="col" id="day">
                                <h3>{time.days}</h3>
                                <small>Days</small>
                            </div>
                            <div className="col" id="hour">
                                <h3>{time.hours}</h3>
                                <small>Hours</small>
                            </div>
                            <div className="col" id="minute">
                                <h3>{time.minutes}</h3>
                                <small>Minutes</small>
                            </div>
                            <div className="col" id="second">
                                <h3>{time.seconds}</h3>
                                <small>Seconds</small>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <i className="fa-brands fa-facebook px-2"></i>
                            <i className="fa-brands fa-whatsapp px-2"></i>
                            <i className="fa-brands fa-linkedin px-2"></i>
                            <i className="fa-brands fa-github px-2"></i>
                            <br />
                            <h6 className="mt-3">© Copyright 2024 Website Name</h6>
                        </div>
                    </div>
                    <div className="col-md-5 py-3" id="desktop">
                        <h1 className="card-title mt-4"><strong>Website is under construction</strong></h1>
                        <p className="card-text sub-title mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;