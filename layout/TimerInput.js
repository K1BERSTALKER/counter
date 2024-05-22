import React from "react";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { calculateTimer, formattedDate, parseDateString } from "../constants";

export default function TimerInput(props) {
  const {
    date,
    setDate,
    byDate,
    setByDate,
    byHours,
    setByHours,
    days,
    setDays,
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
  } = props;

  const inputDate = date ? formattedDate(new Date(date)) : "";

  const handleChangeByDate = (by) => {
    if (by === "days") {
      setByDate(true);
      setDate(0);
    } else if (by === "hours") {
      setByDate(false);
      setDate(new Date());
    }
  };

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  };

  const run = () => {
    if (byDate) {
      const { days, hours, minutes, seconds } = calculateTimer("date", date);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      const now = new Date();
      const targetDate = new Date(
        now.getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000
      );
      setDate(targetDate);
      const {
        days,
        hours: h,
        minutes: m,
        seconds: s,
      } = calculateTimer("hours", targetDate);
      setDays(days);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      alert("Select time first");
    }
    setByHours(false);
  };

  return (
    <section className="flex gap-4 flex-col">
      {byDate ? (
        <div className="flex flex-col  gap-6">
          <label htmlFor="date" className="ext-sm text-gray-500  font-bold">
            Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => handleDateChange(e)}
            className="text-black p-2 rounded-md bg-gray-200 outline-none"
          />
          <h4
            className="text-sm text-gray-300 cursor-pointer"
            onClick={() => handleChangeByDate("hours")}
          >
            Back to Hours
          </h4>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="hour"
                className="text-sm text-gray-500  text-center font-bold"
              >
                Hour
              </label>
              <select
                name="hour"
                id="hour"
                className="text-black p-2 rounded-md"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="minutes"
                className="text-sm text-gray-500  text-center font-bold"
              >
                Minutes
              </label>
              <select
                name="hour"
                id="minutes"
                className="text-black p-2 rounded-md"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              >
                {Array.from({ length: 60 }).map((_, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="seconds"
                className="text-sm text-gray-500  text-center font-bold"
              >
                Seconds
              </label>
              <select
                name="hour"
                id="seconds"
                className="text-black p-2 rounded-md"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              >
                {Array.from({ length: 60 }).map((_, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h4
            className="text-sm text-gray-300 cursor-pointer"
            onClick={() => handleChangeByDate("days")}
          >
            Change by Date
          </h4>
        </div>
      )}
      <div className="flex justify-between">
        <button
          className="p-2 rounded-md bg-gray-800 flex gap-2 items-center"
          onClick={run}
        >
          <FaPlay />
          Go
        </button>
        <button className="p-2 rounded-md bg-gray-800 flex gap-2 items-center">
          Reset
          <GrPowerReset />
        </button>
      </div>
    </section>
  );
}
