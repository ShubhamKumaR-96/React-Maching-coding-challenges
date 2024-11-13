import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const ImageCarousel = () => {
  const [imgData, setImgData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.reddit.com/r/aww/top/.json?t=all"
        );
        const data = await response.json();
        console.log(data?.data?.children);
        setImgData(data?.data?.children);
      } catch (error) {
        console.log("Error fetchinf data", error);
      }
    }
    fetchData();
  }, []);

  function nextImg() {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % imgData.length);
  }
  function prevImg() {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + imgData.length) % imgData.length);
  }

  useEffect(()=>{
    const interval=setInterval(()=>{
        setCurrentIdx((prevIdx) => (prevIdx + 1) % imgData.length);
    },7000)
    return ()=>clearInterval(interval)
  },[imgData.length])

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-center mb-10 font-semibold text-2xl">
        ImageCarousel
      </h1>
      <div className="relative border-2 border-black w-96 h-80 bg-gray-400">
        <button onClick={prevImg} className="absolute left-1 top-36 z-10 bg-black bg-opacity-60 text-white rounded-full p-1 hover:bg-opacity-80">
          <BiLeftArrow size={36} />
        </button>
        {imgData.length > 0 && imgData[currentIdx]?.data?.thumbnail && (
          <img
            className="absolute w-full h-full "
            src={imgData[currentIdx]?.data?.thumbnail}
            alt={`pic-${currentIdx}`}
          />
        )}
        <button onClick={nextImg} className="absolute right-1 top-36 z-10 bg-black bg-opacity-60 text-white rounded-full p-1 hover:bg-opacity-80">
          <BiRightArrow  size={36} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
