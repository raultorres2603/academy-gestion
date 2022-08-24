import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegLogForm from "./components/RegLogForm";
import MainMenu from "./components/MainMenu";
import Cookies from "universal-cookie";
import "./css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: false,
      comprob: false,
      root: false,
    };
  }

  componentDidMount() {
    this.root = ReactDOM.createRoot(document.getElementById("App"));
    let cookie = new Cookies();
    this.setState({
      comprob: setInterval(() => {
        if (!cookie.get("userID")) {
          this.setState({
            userLogged: false,
          });
        } else {
          this.setState({
            userLogged: true,
          });
        }
      }, 500),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.comprob);
    this.root = false;
  }

  render() {
    return (
      <div id="App" className="App text-center">
        {this.state.userLogged ? <MainMenu /> : <RegLogForm />}
      </div>
    );
  }
}

export default App;
