import React from "react";
import ReactDOM from "react-dom/client";
import {
  BsFillPersonFill,
  BsCollectionFill,
  BsFolderFill,
} from "react-icons/bs";
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    this.mainmenu = ReactDOM.createRoot(
      document.getElementById("mainMenuContent")
    );
  }

  handleMenu(e) {}

  render() {
    return (
      <div className="mainMenu">
        <div className="container">
          <div className="row">
            <div className="col-12" id="mainMenuContent">
              <div className="row">
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-circle border-0"
                    value="perfil"
                    onClick={this.handleMenu}
                  >
                    <BsFillPersonFill size={"10vw"} />
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-circle border-0"
                    value="aulas"
                    onClick={this.handleMenu}
                  >
                    <BsCollectionFill size={"10vw"} />
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-circle border-0"
                    value="notas"
                    onClick={this.handleMenu}
                  >
                    <BsFolderFill size={"10vw"} />
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
