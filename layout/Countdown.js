import React from "react";
import SlotCounter from "react-slot-counter";
import { FaPause, FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { calculateTimer } from "../constants";

export default function Countdown(props) {
  const {
    days,
    hours,
    minutes,
    seconds,
    setDays,
    setHours,
    setMinutes,
    setSeconds,
    setDate,
    date,
    isRunning,
    setIsRunning,
    intervalRef,
  } = props;

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (!intervalRef.current) {
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    const newDate = new Date(); // Assuming this resets the date to current time
    setDate(newDate);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex items-center justify-center">
        {days > 0 && (
          <p>
            <SlotCounter
              value={days}
              startValue={0}
              sequentialAnimationMode={true}
              valueClassName="text-[200px] text-gray-500 "
              separatorClassName="text-[200px] text-gray-500 "
              charClassName="text-[200px] text-gray-500 "
              duration={1}
            />
            <span className="text-6xl">:</span>
          </p>
        )}

        {hours > 0 && (
          <p>
            <SlotCounter
              value={hours}
              startValue={0}
              sequentialAnimationMode={true}
              valueClassName="text-[200px] text-gray-500 "
              separatorClassName="text-[200px] text-gray-500 "
              charClassName="text-[200px] text-gray-500 "
            />
            <span className="text-6xl">:</span>
          </p>
        )}
        {minutes > 0 && (
          <p className="flex items-center justify-center">
            <SlotCounter
              value={minutes}
              startValue={0}
              sequentialAnimationMode={true}
              valueClassName="text-[200px] text-gray-500 "
              separatorClassName="text-[200px] text-gray-500 "
              charClassName="text-[200px] text-gray-500 "
            />
            <span className="text-6xl">:</span>
          </p>
        )}
        <p>
          <SlotCounter
            value={seconds}
            startValue={0}
            sequentialAnimationMode={true}
            valueClassName="text-[200px] text-gray-500 w-36"
            separatorClassName="text-[200px] text-gray-500 w-36"
            charClassName="text-[200px] text-gray-500 w-36"
            duration={1}
          />
        </p>
      </div>
      <div className="flex justify-between">
        {isRunning ? (
          <button
            onClick={stopTimer}
            className="p-2 rounded-md bg-gray-800 flex gap-2 items-center"
          >
            <FaPause />
            Pause
          </button>
        ) : (
          <button
            onClick={resumeTimer}
            className="p-2 rounded-md bg-gray-800 flex gap-2 items-center"
          >
            <FaPlay />
            Play
          </button>
        )}
        <button
          onClick={resetTimer}
          className="p-2 rounded-md bg-gray-800 flex gap-2 items-center"
        >
          <GrPowerReset />
          Reset
        </button>
      </div>
    </div>
  );
}
