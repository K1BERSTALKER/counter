"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms for better accuracy
      }, 10);
    } else if (!running && time !== 0) {
      clearInterval(timer.current);
    }
    return () => clearInterval(timer.current);
  }, [running, time]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setRunning((prevRunning) => !prevRunning);
      } else if (event.code === "Escape") {
        setRunning(false);
        setTime(0);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const millis = time % 1000;
    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / 60000) % 60);
    const hour = Math.floor((time / 3600000) % 24);
    const day = Math.floor(time / 86400000);

    setMilliseconds(millis);
    setSeconds(sec);
    setMinutes(min);
    setHours(hour);
    setDays(day);
  }, [time]);

  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  return (
    <div className="h-[70vh] grid place-items-center">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 justify-center">
          {days > 0 && <p className="text-5xl font-bold">{days}d</p>}
          {hours > 0 && <p className="text-5xl font-bold">{hours}h</p>}
          {minutes > 0 && <p className="text-5xl font-bold">{minutes}m</p>}
          <p className="text-5xl font-bold">{seconds}s:</p>
          <p className="text-5xl font-bold min-w-[160px]">{milliseconds}ms</p>
        </div>
        <div className="flex justify-between">
          <div className="relative group">
            <button
              onClick={() => setRunning(!running)}
              className="p-2 rounded-md bg-gray-800 flex gap-2 items-center relative"
            >
              {running ? (
                <>
                  <FaPause />
                  Pause
                </>
              ) : (
                <>
                  <FaPlay />
                  Play
                </>
              )}
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 p-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity min-w-20">
              Press Space
            </span>
          </div>
          <div className="relative group">
            <button
              onClick={() => {
                setRunning(false);
                setTime(0);
                setMilliseconds(0);
                setSeconds(0);
                setMinutes(0);
                setHours(0);
                setDays(0);
              }}
              className="p-2 rounded-md bg-gray-800 flex gap-2 items-center relative"
            >
              <GrPowerReset />
              Reset
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 p-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity min-w-20">
              Press Esc
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
