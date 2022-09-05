import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";
import axios from "axios";
import config from "../configs/config.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from "universal-cookie";
import { useContext } from "react";

function MainMenu(props) {
  const cookie = new Cookies();
  const user = comprobInfo();
  const comprob = setInterval(() => {
    if (!cookie.get("Auth")) {
      window.location.reload();
    }
  }, 500);

  function handleMenu(e) {
    switch (e.target.value) {
      case "profile":
        let mainmenu = ReactDOM.createRoot(
          document.getElementById("mainMenuContent")
        );
        mainmenu.render(<Profile auth={props.auth} />);
        break;
      case "rooms":
        break;
      case "qualification":
        break;

      default:
        break;
    }
  }

  function comprobInfo() {
    const idUser = window.atob(props.auth);
    axios
      .post(
        `${config.secure}://${config.dominion}:${config.port}/api/userInfo`,
        {
          idUser: idUser,
        }
      )
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          if (
            typeof res.data.firstName === undefined ||
            typeof res.data.secondName === undefined
          ) {
            return false;
          } else {
            return res.data;
          }
        }
      });
  }

  return (
    <div className="mainMenu">
      <div className="container">
        <div className="row">
          <div className="col-12" id="mainMenuContent">
            <div className="row text-center">
              {!user ? (
                <div className="row titleFormMainMenu">
                  <p className="display-3 text-center text-white">
                    Configura tu perfil
                  </p>
                </div>
              ) : (
                <div className="row titleForm">
                  <p className="display-3 text-center text-white">
                    Hola {user.firstName} {user.secondName}
                  </p>
                </div>
              )}
            </div>
            <div className="row buttonsGroup">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain profile"
                  value="profile"
                  onClick={handleMenu}
                >
                  <i className="bi bi-person-fill" value="profile"></i>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  value="rooms"
                  about={config.profileStep}
                  className={
                    !user
                      ? "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain disabled"
                      : "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
                  }
                  onClick={handleMenu}
                >
                  <i className="bi bi-easel-fill" value="rooms"></i>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  value="qualification"
                  className={
                    !user
                      ? "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain disabled"
                      : "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
                  }
                  onClick={handleMenu}
                >
                  <i
                    className="bi bi-clipboard2-pulse-fill"
                    value="qualification"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
