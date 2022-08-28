import React from "react";
import ReactDOM from "react-dom/client";
import {
  BsFillPersonFill,
  BsCollectionFill,
  BsFolderFill,
} from "react-icons/bs";
import Profile from "./Profile";
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
                    className="btn btn-outline-light btn-lg rounded-circle border-0 buttonMain"
                    value="profile"
                    onClick={this.handleMenu}
                  >
                    Profile
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    value="rooms"
                    className="btn btn-outline-light btn-lg rounded-circle border-0 buttonMain"
                    onClick={this.handleMenu}
                  >
                    Rooms
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    value="qualification"
                    className="btn btn-outline-light btn-lg rounded-circle border-0 buttonMain"
                    onClick={this.handleMenu}
                  >
                    Qualifications
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
