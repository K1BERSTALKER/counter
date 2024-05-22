"use client";
import React from "react";
import Countdown from "./Countdown";
import TimerInput from "./TimerInput";

export default function Timer() {
  const [byDate, setByDate] = React.useState(false);
  const [date, setDate] = React.useState(new Date("2024-12-31T23:59:59"));
  const [byHours, setByHours] = React.useState(true);
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);
  const intervalRef = React.useRef(null);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (byHours === false && isRunning === true) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setDays(days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }, 1000);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      setIsRunning(false);
      setByHours(true);
    } else {
      setIsRunning(true);
    }

    return () => clearInterval(timer);
  }, [hours, minutes, seconds, days, byHours, isRunning]);

  return (
    <div>
      {byHours ? (
        <TimerInput
          date={date}
          setDate={setDate}
          byDate={byDate}
          setByDate={setByDate}
          byHours={byHours}
          setByHours={setByHours}
          days={days}
          setDays={setDays}
          hours={hours}
          setHours={setHours}
          minutes={minutes}
          setMinutes={setMinutes}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      ) : (
        <Countdown
          byDate={byDate}
          date={date}
          setDate={setDate}
          hours={hours}
          setHours={setHours}
          minutes={minutes}
          setMinutes={setMinutes}
          seconds={seconds}
          setSeconds={setSeconds}
          days={days}
          setDays={setDays}
          setByHours={setByHours}
          byHours={byHours}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          intervalRef={intervalRef}
        />
      )}
    </div>
  );
}
