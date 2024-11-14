import React, { useEffect, useRef, useState } from "react";

const TwoFactorInput = () => {
  const inputArr = ["", "", "", ""];
  const [inputs, setInputs] = useState(inputArr);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [missing,setMissing]=useState(inputArr)
  const CODE="3698"


  const handleMissing=()=>{
    const missed=inputs.map((item,idx)=>{
        if(item==='') return idx;
    }).filter((item)=>(item || item===0))
    console.log('missed',missed)
    setMissing(missed)

    if(missed.length) return;

    const userInput=inputs.join('')
    const isMatch=userInput===CODE;
    const msg=isMatch ? "code is valid":"code is not valid"
    alert(msg)
  }

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, idx) => {
    const val = e.target.value;

    if (!Number(val)) return;

    if (idx < inputs.length - 1) {
      refs[idx + 1].current.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[idx] = val;
    setInputs(copyInputs);
  };

  const handleOnKeyDown = (e, idx) => {
    console.log(e.keyCode, idx);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[idx] = "";
      setInputs(copyInputs);

      if (idx > 0) {
        refs[idx - 1].current.focus();
      }
    }
  };

  const handlePaste=(e)=>{
    const data=e.clipboardData.getData('text');
    if(!Number(data) || data.length !== inputs.length) return;

    const pasteData=data.split('')
    setInputs(pasteData)
    refs[inputs.length-1].current.focus()

  }

  console.log("inputs", inputs);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center">Two-factor code input</h1>
      <div>
        {inputArr.map((inp, idx) => {
          return (
            <input
              key={idx}
              type="text"
              value={inputs[idx]}
              ref={refs[idx]}
              maxLength="1"
              onChange={(e) => handleInputChange(e, idx)}
              onKeyDown={(e) => handleOnKeyDown(e, idx)}
              onPaste={handlePaste}
              className={`w-10 h-10 border-2 ${
                missing.includes(idx) ? "border-red-500" : "border-blue-600"
              } m-2 my-10 font-semibold outline-none focus:border-blue-700 text-center`}
            />
          );
        })}
      </div>
      <button onClick={handleMissing} className="bg-red-400 text-white font-bold rounded-md p-2">
        Submit
      </button>
    </div>
  );
};

export default TwoFactorInput;
