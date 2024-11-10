import React, { useEffect } from "react";
import { useState } from "react";
import Timer from "./components/Timer";
import ShowTimer from "./components/ShowTimer";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [hours, setHours] = useState(0);
  const [mints, setMints] = useState(0);
  const [seconds, setSecnds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  function handleStart() {
    if (hours < 0 || mints < 0 || seconds <= 0) {
      alert("Enter valid inputs");
    } else {
      setIsStart(true);
    }
  }
  function resetTimer() {
    setHours(0);
    setMints(0);
    setSecnds(0);
  }

  function handlePause(){
    setIsPause(true)
    clearInterval(timerId)
  }
  function handleReset() {
    setIsStart(false);
    resetTimer();
    clearInterval(timerId);
  }

  function handleResume() {
    setIsPause(false);
    runTimer(seconds,mints,hours)
  }

  function handleInput(e) {
    const val = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHours(val);
    } else if (id === "mints") {
      setMints(val);
    } else {
      setSecnds(val);
    }
  }

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecnds((s) => s - 1);
    } else if (min > 0) {
      setMints((m) => m - 1);
      setSecnds(59);
    } else {
      setHours((h) => h - 1);
      setSecnds(59);
      setMints(59);
    }
    if (min === 0 && sec === 0 && hr === 0) {
      handleReset()
      clearInterval(tid);
      alert("Timer finished");
      return
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, mints, hours, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, mints, seconds]);

  return (
    <div className="text-center py-24 bg-cyan-200 h-screen ">
      <h1 className="text-2xl font-serif font-bold ">Count down Timer</h1>
      {!isStart && <Timer handleInput={handleInput} handleStart={handleStart} />}
      {isStart && ( <ShowTimer hours={hours} mints={mints} seconds={seconds} handlePause={handlePause} handleResume={handleResume} handleReset={handleReset} isPause={isPause}  />
      )}
    </div>
  );
};

export default App;
