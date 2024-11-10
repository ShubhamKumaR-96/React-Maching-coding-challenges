import React from "react";

const Timer = ({handleInput,handleStart}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center">
        <input
          onChange={handleInput}
          className="size-14 border-none outline-none text-base m-8 text-center"
          id="hours"
          placeholder="HH"
        />
        <input
          onChange={handleInput}
          className="size-14 border-none outline-none text-base  text-center"
          id="mints"
          placeholder="MM"
        />
        <input
          onChange={handleInput}
          className="size-14 border-none outline-none text-base m-8 text-center"
          id="sec"
          placeholder="SS"
        />
      </div>
      <button
        className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default Timer;
