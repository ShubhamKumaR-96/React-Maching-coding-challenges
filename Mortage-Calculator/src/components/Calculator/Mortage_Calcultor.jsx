import React, { useState } from "react";

const Mortage_Calcultor = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateRate = () => {
    const prinicipalAmount = parseFloat(principal);
    const annualInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    const payment =
      (prinicipalAmount *
        annualInterestRate *
        Math.pow(1 + annualInterestRate, numberOfPayments)) /
      (Math.pow(1 + annualInterestRate, numberOfPayments) - 1);
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="bg-slate-300 h-screen flex flex-col justify-center items-center py-20 ">
      <div className="mb-4 flex flex-col ">
        <label className="text-xl mb-2">Principal Amount</label>
        <input
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          type="number"
          className="px-2 border-2 border-black"
        />
      </div>
      <div className="mb-4 flex flex-col ">
        <label className="text-xl mb-2">Interest rate</label>
        <input
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          type="number"
          className=" px-2 border-2 border-black"
        />
      </div>
      <div className="mb-4 flex flex-col ">
        <label className="text-xl mb-2">Length of loan:</label>
        <input
          value={years}
          onChange={(e) => setYears(e.target.value)}
          type="number"
          className="px-2 border-2 border-black"
        />
      </div>
      <button
        onClick={calculateRate}
        className="w-24 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Calculate
      </button>
      {monthlyPayment && (
        <h2 className="mt-5 text-xl font-semibold text-center shadow-lg p-4">
          Monthly Payment: ${monthlyPayment}
        </h2>
      )}
    </div>
  );
};

export default Mortage_Calcultor;
