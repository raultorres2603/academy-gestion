import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";
import "bootstrap-icons/font/bootstrap-icons.css";
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(e) {
    switch (e.target.value) {
      case "profile":
        this.mainmenu = ReactDOM.createRoot(
          document.getElementById("mainMenuContent")
        );
        this.mainmenu.render(<Profile />);
        break;
      case "rooms":
        break;
      case "qualification":
        break;

      default:
        break;
    }
  }

  render() {
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
                    onClick={this.handleMenu}
                  >
                    <i class="bi bi-person-fill"></i>
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    value="rooms"
                    className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
                    onClick={this.handleMenu}
                  >
                    <i class="bi bi-easel-fill"></i>
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    value="qualification"
                    className="btn btn-outline-light btn-lg rounded-5 border-0 buttonMain"
                    onClick={this.handleMenu}
                  >
                    <i class="bi bi-clipboard2-pulse-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
