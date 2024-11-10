import React from 'react'

const ShowTimer = (props) => {
  const {hours,mints,seconds,handlePause,handleResume,handleReset,isPause}=props;
  return (
    <div>
        <div className="flex justify-center items-center gap-5 text-8xl my-5">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{mints < 10 ? `0${mints}` : mints}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>
          {!isPause && (
            <button onClick={handlePause} className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer mr-5">
              Pause
            </button>
          )}
          {isPause && (
            <button onClick={handleResume} className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer mr-5">
              Resume
            </button>
          )}
          <button
            onClick={handleReset}
            className="h-10 w-24 border-none outline-none bg-purple-400 rounded-md cursor-pointer"
          >
            Reset
          </button>
      
    </div>
  )
}

export default ShowTimer
