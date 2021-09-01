import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    }, 3000);
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
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm
              heading="Enter Your Text Below to Analyze"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>

      <Alert alert={alert} />
    </>
  );
}

export default App;
