import { useState } from "react";
import AlertPopup from "./components/alertPopup";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <>
      {showAlert && (
        <AlertPopup
          message="Login Successful 🥳"
          onClose={handleShowAlert}
          autoCloseTimeout={3000}
          bgColor="success"
        />
      )}

      <button onClick={handleShowAlert}>Show Alert</button>
    </>
  );
}

export default App;
