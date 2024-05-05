import React, { useEffect, useState } from 'react';
import closeLine from "./assets/close-line.svg";
import logo from "./assets/logo.svg";
import playstore from "./assets/playstore.png";
import appstore from "./assets/appstore.png";

const BottomPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    localStorage.removeItem('popupStatus');
  };

  useEffect(() => {
    const popupStatus = localStorage.getItem('popupStatus');

    if (!popupStatus) {
      setTimeout(() => {
        setIsPopupOpen(true);
        localStorage.setItem('popupStatus', 'open');
      }, 24 * 60 * 60 * 1000);
    } else if (popupStatus === 'open') {
      setIsPopupOpen(true);
    }
  }, []);

  return (
    <div className="">
      <div
        className={`fixed bg-[white] w-[90%] sm:w-[249px] sm:h-[258px] bottom-0 right-0 z-50 shadow border border-gray-200 rounded-[20px] m-3 transition-transform ease-in-out duration-700 ${isPopupOpen ? 'translate-y-0' : 'translate-y-[130%]'
          }`}
      >
        <div className="sm:block hidden">
          <div className="relative shadow mr-3 mb-1 flex justify-center items-center">
            <img className="absolute" src={logo} alt="Logo" />
          </div>

          <div className="cursor-pointer mr-3 mt-3 flex justify-end items-end">
            <img onClick={togglePopup} className="w-6 h-6" src={closeLine} alt="Close" />
          </div>
          <div className="text-center text-[black] mt-4 text-base font-medium leading-normal">
            Download the app for a better experience
          </div>
          <div className="flex flex-col mt-4 gap-2 mx-auto justify-center items-center">
            <img className="cursor-pointer" src={playstore} alt="Play Store" />
            <img className="cursor-pointer" src={appstore} alt="App Store" />
          </div>
        </div>


        <div className="relative sm:hidden p-3">
          <div className="mr-3 mt-1 flex justify-between items-center">
            <div className="text-orange-A200 text-base font-bold uppercase">Download the tabnovel app!</div>
            <img onClick={togglePopup} className="cursor-pointer w-6 h-6" src={closeLine} alt="Close" />
          </div>
          <div className="w-[90%]">
            <span className="text-neutral-600 text-sm font-normal leading-[21px]">
              Have a much better experience on our mobile app. Download the Tabnovel app to:<br /></span>
            <span className="text-neutral-600 text-sm font-normal leading-[21px]">Write and share your story<br />Read offline
              <br />Get access to unlimited chapters
              <br />Unlock multiple chapters of your favorite books<br />Personalize your reading modes<br />
            </span>
            <span className="text-neutral-600 text-sm font-normal leading-[21px]">The Tabnovel app is available on Appstore and Playstore.</span>
          </div>
          <div className="w-[100%] h-12 mt-1 bg-orange-A200 rounded-[36px] justify-center items-center inline-flex">
            <div className="text-center text-[white] text-sm font-bold leading-tight">Download now</div>
          </div>
          <div className="w-[133.35px] h-[162.08px] left-[262.76px] top-[158.21px] absolute origin-top-left rotate-[-21.79deg] opacity-10 flex-col justify-center items-center inline-flex">
            <img className="w-[133.35px] h-[161.59px]" src="/tabnovel.svg" />
          </div>
          <div className="w-[100.02px] h-[121.56px] left-[-60.24px] top-[-13.17px] absolute origin-top-left rotate-[-21.79deg] opacity-10 flex-col justify-center items-center inline-flex">
            <img className="w-[100.02px] h-[121.20px]" src="/tabnovel.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPopup;
