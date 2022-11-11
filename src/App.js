import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode Has Been Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#292a2d";
      showAlert("Dark Mode Has Been Enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <TextForm
        heading="Enter Your Text Below to Analyze or Beautify"
        mode={mode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
    </>
  );
}

export default App;
