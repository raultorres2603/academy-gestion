import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegLogForm from "./components/RegLogForm";
import MainMenu from "./components/MainMenu";
import Cookies from "universal-cookie";
import "./css/main.css";
import axios from "axios";
import config from "./configs/config.json";
const { io } = require("socket.io-client");
const socket = io(`${config.secure}://${config.dominion}:${config.port}`);

export const userContext = React.createContext();

function App(props) {
  const cookie = new Cookies();
  const [userLogged, setUserLogged] = useState(
    !cookie.get("Auth") ? false : true
  );

  return (
    <div id="App" className="App text-center">
      {userLogged ? (
        <MainMenu auth={cookie.get("Auth")} socket={socket} />
      ) : (
        <RegLogForm />
      )}
    </div>
  );
}

export default App;
