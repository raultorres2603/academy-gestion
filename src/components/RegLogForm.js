import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import config from "../configs/config.json";
import Cookies from "universal-cookie";

class RegLogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    document.title = "Login - A&G";
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${config.secure}://${config.dominion}:${config.port}/api/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          switch (res.data.error) {
            case "1":
              alert("No se ha especificaco un usuario o contraseña.");
              break;
            case "2":
              alert("No se pudo establecer la conexión con la base de datos.");
              break;
            case "3":
              alert("No se pudo insertar éste nuevo usuario.");
              break;
            case "4":
              alert("No se pudo comprobar éste usuario.");
              break;

            default:
              break;
          }
        } else {
          if (res.data.message) {
            new Cookies().set("userID", res.data.user, { maxAge: 3600 });
          }
        }
      });
  }

  handleInput(e) {
    switch (e.target.name) {
      case "username":
        this.setState({
          username: e.target.value,
        });
        break;
      case "password":
        this.setState({
          password: e.target.value,
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="regLogForm">
        <center>
          <div className="container">
            <div className="col-md-12">
              <div className="row titleForm">
                <p className="display-1 text-center text-white">Academy Gestion</p>
              </div>
              <div className="row">
                <form action="#" method="post" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control form-control-lg inputForm bg-dark text-white"
                        type="text"
                        onInput={this.handleInput}
                        placeholder="Username"
                        name="username"
                        aria-label=".form-control-lg example"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control form-control-lg inputForm bg-dark text-white"
                        type="password"
                        onInput={this.handleInput}
                        placeholder="Password"
                        name="password"
                        aria-label=".form-control-lg example"
                      />
                    </div>
                  </div>
                  <div className="row buttonLogin">
                    <div className="col-md-12">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg buttonForm"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default RegLogForm;
