import { useEffect, useRef, useState } from "react";

const Timer = ({ scramble, event, onSolveComplete }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsrunning] = useState(false);
  const [isTimerReady, setIsTimerReady] = useState(false);
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);
  const holdTimeoutRef = useRef(null);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.code === "Space") {
        if (isTimerReady && !isRunning) {
          setIsTimerReady(false);
          startTimer();
        }
        clearTimeout(holdTimeoutRef.current);
      }
    };

    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        if (isRunning) {
          stopTimer();
        } else if (!isTimerReady) {
          holdTimeoutRef.current = setTimeout(() => {
            setIsTimerReady(true);
          }, 150);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRunning, isTimerReady]);

  const startTimer = () => {
    if (!isRunning) {
      setIsrunning(true);
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    const finalTime = Date.now() - startTimeRef.current;

    setIsrunning(false);
    setTime(finalTime);

    onSolveComplete({
      time: finalTime,
      scramble,
      event
    });
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsrunning(false);
    setTime(0);
  };

  const formatTime = (timeInMs) => {
    const milliseconds = Math.floor((timeInMs % 1000) / 10); // Two digits of ms
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return minutes > 0
      ? `${minutes}.${seconds}.${milliseconds.toString().padStart(2, "0")}`
      : `${seconds}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`${
        isTimerReady ? "text-green-600" : "text-white"
      } text-7xl font-robotoMono select-none py-12`}
    >
      {formatTime(time)}
    </div>
  );
};

export default Timer;
