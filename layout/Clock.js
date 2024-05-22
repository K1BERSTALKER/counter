"use client";
import React from "react";
import SlotCounter from "react-slot-counter";

export default function Clock({ serverTime }) {
  const [currentTime, setCurrentTime] = React.useState(
    serverTime || new Date()
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const rawHours = currentTime.getHours();
  const hours = formatNumber(rawHours % 12 === 0 ? 12 : rawHours % 12); // Limit hours to max 12
  const minutes = formatNumber(currentTime.getMinutes());
  const seconds = formatNumber(currentTime.getSeconds());
  const period = rawHours >= 12 ? "PM" : "AM"; // Determine AM/PM
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayOfWeek = daysOfWeek[currentTime.getDay() - 1];

  return (
    <div className="p-6 text-3xl font-bold flex flex-col justify-center items-center h-[70vh] wfull gap-6">
      {loading ? (
        <div className="animate-pulse flex flex-col gap-6 justify-center items-center">
          <div className="w-72 h-14 rounded-md bg-gray-600 "></div>
          <div className="w-64 h-14 rounded-md bg-gray-600 "></div>
        </div>
      ) : (
        <>
          <div className="bg-gray-600 rounded-md flex items-center justify-evenly gap-3">
            <p className="flex flex-col p-2 justify-center items-center">
              <SlotCounter
                startValue={0}
                value={dayOfWeek}
                valueClassName="text-3xl font-bold"
                charClassName="text-3xl font-bold"
                separatorClassName="text-3xl font-bold"
                sequentialAnimationMode={true}
                duration={1}
              />
              <span className="text-sm text-gray-900">Week</span>
            </p>
            <div className="w-px h-[60%] bg-white" />
            <p className="flex flex-col p-2 justify-center items-center">
              <SlotCounter
                startValue={0}
                value={currentTime.getDate()}
                valueClassName="text-3xl font-bold w-5"
                charClassName="text-3xl font-bold w-5"
                separatorClassName="text-3xl font-bold w-5"
                sequentialAnimationMode={true}
                duration={1}
              />
              <span className="text-sm text-gray-900">Day</span>
            </p>
            <div className="w-px h-[60%] bg-white" />
            <p className="flex flex-col p-2 justify-center items-center">
              <SlotCounter
                startValue={0}
                value={currentTime.getMonth() + 1}
                valueClassName="text-3xl font-bold w-5"
                charClassName="text-3xl font-bold w-5"
                separatorClassName="text-3xl font-bold w-5"
                sequentialAnimationMode={true}
                duration={1}
              />
              <span className="text-sm text-gray-900">Month</span>
            </p>
            <div className="w-px h-[60%] bg-white" />
            <p className="flex flex-col p-2 justify-center items-center">
              <SlotCounter
                startValue={0}
                value={currentTime.getFullYear()}
                valueClassName="text-3xl font-bold w-5"
                charClassName="text-3xl font-bold w-5"
                separatorClassName="text-3xl font-bold w-5"
                sequentialAnimationMode={true}
                duration={1}
              />
              <span className="text-sm text-gray-900">Month</span>
            </p>
          </div>
          <div className="bg-gray-600 rounded-md p-2">
            <SlotCounter
              startValue={0}
              value={hours}
              valueClassName="text-3xl font-bold w-5"
              charClassName="text-3xl font-bold w-5"
              separatorClassName="text-3xl font-bold w-5"
              sequentialAnimationMode={true}
              duration={1}
            />
            :
            <SlotCounter
              startValue={0}
              value={minutes}
              valueClassName="text-3xl font-bold w-5"
              charClassName="text-3xl font-bold w-5"
              separatorClassName="text-3xl font-bold w-5"
              sequentialAnimationMode={true}
              duration={1}
            />
            :
            <SlotCounter
              startValue={0}
              value={seconds}
              valueClassName="text-3xl font-bold w-5"
              charClassName="text-3xl font-bold w-5"
              separatorClassName="text-3xl font-bold w-5"
              sequentialAnimationMode={true}
              duration={1}
            />
            <span className="text-3xl font-bold w-5 ml-4">{period}</span>
          </div>
        </>
      )}
    </div>
  );
}
