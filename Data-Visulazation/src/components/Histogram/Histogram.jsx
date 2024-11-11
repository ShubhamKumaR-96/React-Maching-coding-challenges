import React, { useEffect, useState } from "react";
import HistogramChart from "./HistogramChart";

const Histogram = () => {
  const [data, setData] = useState([]);
  const [frequency, setFrequency] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
        );
        const textData = await response.text();
        const numbers = textData.trim().split("\n").map(Number);
        setData(numbers);

        // Calculate frequency
        const freq = {};
        numbers.forEach((num) => {
          freq[num] = (freq[num] || 0) + 1;
        });

        // Convert frequency object to array of objects for recharts
        const freqArray = Object.entries(freq).map(([key, value]) => ({
          name: key,
          frequency: value,
        }));
        setFrequency(freqArray);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-20 ">
      <h1 className="text-2xl font-bold mb-4">Histogram</h1>
      <HistogramChart data={frequency} />
    </div>
  );
};

export default Histogram;
