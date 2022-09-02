import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegLogForm from "./components/RegLogForm";
import MainMenu from "./components/MainMenu";
import Cookies from "universal-cookie";
import "./css/main.css";

function App(props) {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    let cookie = new Cookies();
    setInterval(() => {
      if (!cookie.get("userID")) {
        setUserLogged(false);
      } else {
        setUserLogged(true);
      }
    }, 500);
  });

  return (
    <div id="App" className="App text-center">
      {userLogged ? <MainMenu /> : <RegLogForm />}
    </div>
  );
}

export default App;
