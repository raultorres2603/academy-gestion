import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from "universal-cookie";
function MainMenu(props) {
  const [user, setUser] = useState(infoUser);
  const cookie = new Cookies();

  function infoUser() {
    let idUser = cookie.get("userID");
  }

  function handleMenu(e) {
    switch (e.target.value) {
      case "profile":
        let mainmenu = ReactDOM.createRoot(
          document.getElementById("mainMenuContent")
        );
        mainmenu.render(<Profile userId={cookie.get("userID")} />);
        break;
      case "rooms":
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
            <div className="row buttonsGroup">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
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
                  className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
                  onClick={handleMenu}
                >
                  <i className="bi bi-easel-fill" value="rooms"></i>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  value="qualification"
                  className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
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
