import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import config from "../configs/config.json";
import Cookies from "universal-cookie";

function SetAulas(props) {
  const socket = props.socket;
  const user = props.user;

  document.title = "A&G - Aulas";

  return (
    <div className="setAulas">
      <div className="container">
        <div className="col-12">
          <div className="row titleSetAulas">
            <p className="display-3 text-center text-white">Crear Aula</p>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetAulas;
