import React from "react";

const ShowOffer = ({ closeOffer, acceptOffer }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75" onClick={closeOffer}>
      <div className="relative border-2 border-black w-72 h-66 text-center bg-white" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={closeOffer}
          className="absolute left-2 m-2 px-1 border-2 bg-gray-200 border-black top-0"
        >
          X
        </button>
        <p className="mt-5 py-10">
          Click the button below to accept our amazing offer
        </p>
        <button
          onClick={acceptOffer}
          className="border-2 p-1 mb-4 bg-gray-200 border-black rounded-lg"
        >
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default ShowOffer;
