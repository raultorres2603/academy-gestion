import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegLogForm from "./components/RegLogForm";
import MainMenu from "./components/MainMenu";
import Cookies from "universal-cookie";
import "./css/main.css";
import axios from "axios";
import config from "./configs/config.json";

function App(props) {
  const cookie = new Cookies();
  const [userLogged, setUserLogged] = useState(
    !cookie.get("Auth") ? false : true
  );

  return (
    <div id="App" className="App text-center">
      {userLogged ? <MainMenu auth={cookie.get("Auth")} /> : <RegLogForm />}
    </div>
  );
}

export default App;
