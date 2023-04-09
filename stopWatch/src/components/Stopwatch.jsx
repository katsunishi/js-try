import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div>
      <h1>ストップウォッチ</h1>
      <p>{time}秒</p>
      {isRunning ? (
        <button onClick={handleStop}>ストップ</button>
      ) : (
        <button onClick={handleStart}>スタート</button>
      )}
      <button onClick={handleReset}>リセット</button>
    </div>
  );
}

export default Stopwatch;
