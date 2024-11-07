import React from "react";
import { useState } from "react";

const App = () => {
  const [isStart, setIsStart] = useState(false);

  function handleStart() {
    setIsStart(true);
  }
  function handleReset() {
    setIsStart(false);
  }

  function handleInput(e) {
    console.log(e.target.id,e.target.value);
  }
  return (
    <div className="text-center py-24 bg-cyan-200 h-screen ">
      <h1 className="text-2xl font-serif font-bold ">Count down Timer</h1>
      {!isStart && (
        <div className="text-center">
          <div className="flex justify-center items-center">
            <input
              onChange={handleInput}
              className="size-14 border-none outline-none text-base m-8 text-center"
              id="hours"
              placeholder="H"
            />
            <input
              onChange={handleInput}
              className="size-14 border-none outline-none text-base  text-center"
              id="mints"
              placeholder="M"
            />
            <input
              onChange={handleInput}
              className="size-14 border-none outline-none text-base m-8 text-center"
              id="sec"
              placeholder="S"
            />
          </div>
          <button
            className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      )}
      {isStart && (
        <>
          <div className="flex justify-center items-center gap-5 text-8xl my-5">
            <div>12</div>
            <span>:</span>
            <div>12</div>
            <span>:</span>
            <div>12</div>
          </div>

          <button className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer mr-5">
            Pause
          </button>
          <button
            onClick={handleReset}
            className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer"
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default App;
