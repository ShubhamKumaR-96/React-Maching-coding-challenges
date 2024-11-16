import React, { useState } from "react";
import ShowOffer from "./ShowOffer";

const ModalOverlay = () => {
  const [isOffer, setIsOffer] = useState(true);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const showOfferClick = () => {
    setIsOffer(!isOffer);
  };

  const acceptOfferClick = () => {
    setIsOfferAccepted(true);
    setIsOffer(false);
  };

  const closeOfferClick = () => {
    setIsOffer(true);
    setIsOfferAccepted(false);
  };

  return (
     <>
      <h1 className="text-2xl font-bold text-center mb-10 "> ModalOverlay</h1>
      <div
        className="flex justify-center items-center"
      >
        {isOffer ? (
          <button
            onClick={showOfferClick}
            className="border-2 p-2 mt-20 bg-gray-500 text-white rounded-md"
          >
            Show Offer
          </button>
        ) : isOfferAccepted ? (
          <p className="text-center text-lg mt-20"> Offer Accepted</p>
        ) : (
          <ShowOffer closeOffer={closeOfferClick} acceptOffer={acceptOfferClick} />
        )} 
    </div>
    </>
  );
};

export default ModalOverlay;
