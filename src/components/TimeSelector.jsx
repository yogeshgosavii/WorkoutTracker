// TimeSelector.js
import React, { useState } from 'react';

function TimeSelector({
    className,
    ...props
}) {
    const [selectedTime, setSelectedTime] = useState(0);

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const formattedHour = hour.toString().padStart(2, '0');
                const formattedMinute = minute.toString().padStart(2, '0');
                options.push(`${formattedHour}:${formattedMinute}`);
            }
        }
        return options;
    };

    const timeOptions = generateTimeOptions();

    const handlePrevClick = () => {
        const currentIndex = timeOptions.findIndex(time => time === selectedTime);
        if (currentIndex > 0) {
            setSelectedTime(timeOptions[currentIndex - 1]);
        }
    };

    const handleNextClick = () => {
        const currentIndex = timeOptions.findIndex(time => time === selectedTime);
        if (currentIndex < timeOptions.length - 1) {
            setSelectedTime(timeOptions[currentIndex + 1]);
        }
    };

    return (
        <div className={`flex items-center w-full rounded-xl  text-gray-400 py-2 px-2 bg-gray-100 ${className}`} {...props}>
            <button className="  py-2 px-2 " onClick={handlePrevClick}>
                <svg className="h-8 w-8   " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="15 6 9 12 15 18" /></svg>
            </button>
            <select className="mx-4  w-full bg-gray-100 outline-none font-medium   px-3 py-2 appearance-none" value={selectedTime} onChange={(e) => handleTimeSelection(e.target.value)} style={{ textAlignLast: 'center' }}>
                <option value="" disabled hidden>Select a time</option>
                {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
            <button className="  py-2 px-2 " onClick={handleNextClick}>
                <svg className="h-8 w-8 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="9 6 15 12 9 18" /></svg>
            </button>
        </div>
    );
}

export default TimeSelector;
