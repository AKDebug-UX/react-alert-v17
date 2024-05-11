import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AlertPopup = ({ message, undo, onClose, autoCloseTimeout, bgColor,topPosition,bottomPosition,topRight }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, autoCloseTimeout);

    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseTimeout, onClose]);

  return (
    <div className={`fixed inset-0 flex justify-${topPosition} items-${bottomPosition} md:m-8 z-50`}>
      <div className="bg-[black] opacity-10 fixed inset-0"></div>{" "}
      <div
        className={`w-full h-[59px] md:w-[370px] ${bgColor} p-3.5 text-left rounded-b-xl md:rounded-xl justify-start md:justify-center items-center inline-flex transition-transform ease-in-out duration-400`}
      >
        <div className="text-white text-base font-medium leading-snug">
          {message}
        </div>
      </div>
    </div>
  );
};

AlertPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  autoCloseTimeout: PropTypes.number.isRequired,
};

export default AlertPopup;
