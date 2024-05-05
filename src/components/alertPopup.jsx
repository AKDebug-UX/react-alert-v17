import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AlertPopup = ({ message, undo, onClose, autoCloseTimeout }) => {
 
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, autoCloseTimeout);

    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseTimeout, onClose]);

  return (
    <div className="">
      <div className=""></div> {/* Black background with opacity */}
      <div className="">
        <p className="">{message} &nbsp;
          <span className="">{undo}</span>
        </p>
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
