import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";
import axios from "axios";
import Aulas from "./Aulas";
import SetAulas from "./SetAulas";
import config from "../configs/config.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from "universal-cookie";
import { userContext } from "../App";
import { useContext } from "react";

function MainMenu(props) {
  const contexts = useContext(userContext);
  const socket = contexts.socket;
  const auth = contexts.auth;
  const cookie = new Cookies();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .post(
        `${config.secure}://${config.dominion}:${config.port}/api/userInfo`,
        {
          idUser: window.atob(auth),
        }
      )
      .then((res) => {
        if (res.data.error) {
          console.log(res.error);
        } else {
          setUser(res.data);
        }
      });

    setInterval(() => {
      if (!cookie.get("Auth")) {
        window.location.reload();
      }
    }, 500);
  }, []);

  function handleMenu(e) {
    let mainmenu = ReactDOM.createRoot(
      document.getElementById("mainMenuContent")
    );
    switch (e.target.value) {
      case "profile":
        mainmenu.render(<Profile user={user} socket={socket} />);
        break;
      case "rooms":
        user.type === 1
          ? mainmenu.render(<Aulas user={user} socket={socket} />)
          : mainmenu.render(<SetAulas user={user} socket={socket} />);
        break;
      case "qualification":
        break;

      default:
        break;
    }
  }

  return (
    <div className="mainMenu">
      <div className="container">
        <div className="row">
          <div className="col-12" id="mainMenuContent">
            <div className="row text-center">
              <div className="row titleForm">
                {!user.firstName ? (
                  <p className="display-3 text-center text-white">
                    Pantalla Principal
                  </p>
                ) : (
                  <p className="display-3 text-center text-white">
                    {user.firstName} {user.secondName}
                  </p>
                )}
              </div>
            </div>
            <div className="row buttonsGroup">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain profile"
                  value="profile"
                  title={config.profileHelp}
                  onClick={handleMenu}
                >
                  <i className="bi bi-person-fill" value="profile"></i>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  value="rooms"
                  className={
                    !user.firstName
                      ? "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain rooms disabled"
                      : "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain rooms"
                  }
                  title={config.roomsHelp}
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
                    !user.firstName
                      ? "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain qualification disabled"
                      : "btn btn-outline-light btn-lg rounded-5 border-0 buttonMain qualification"
                  }
                  title={config.qualiHelp}
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
