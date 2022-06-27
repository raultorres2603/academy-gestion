import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import config from "../configs/config.json";

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
      .get(`${config.secure}://${config.dominion}:${config.port}/api/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {});
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
                <p className="display-1 text-center text-white">Academy Gest</p>
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
