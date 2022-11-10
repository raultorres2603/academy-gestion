import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import config from "../configs/config.json";
import Cookies from "universal-cookie";
import Controller from "./classes/Controller";

function RegLogForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login - A&G";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    Controller.createUser(username, password);
  }

  function handleInput(e) {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value.toUpperCase());
        // Poner invalid div si no tiene más de 5 carácteres
        if (username.length < 5) {
          document.getElementById("username").classList.add("is-invalid");
          document.getElementById("username").classList.remove("is-valid");
        } else {
          document.getElementById("username").classList.add("is-valid");
          document.getElementById("username").classList.remove("is-invalid");
        }
        break;
      case "password":
        setPassword(e.target.value.toUpperCase());
        // Poner invalid div si no tiene más de 5 carácteres
        if (password.length < 5) {
          document.getElementById("password").classList.add("is-invalid");
          document.getElementById("password").classList.remove("is-valid");
        } else {
          document.getElementById("password").classList.add("is-valid");
          document.getElementById("password").classList.remove("is-invalid");
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="regLogForm">
      <center>
        <div className="container">
          <div className="col-md-12">
            <div className="row titleForm">
              <p className="display-1 text-center text-white">
                Academy Gestion
              </p>
            </div>
            <div className="row">
              <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control form-control-lg inputForm bg-dark text-white"
                      type="text"
                      id="username"
                      onInput={handleInput}
                      placeholder="Username"
                      name="username"
                      aria-label=".form-control-lg example"
                      autocomplete="off"
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      className="invalid-feedback"
                    >
                      Username must be more than 5 characters.
                    </div>
                    <div className="valid-feedback">It can be used!</div>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control form-control-lg inputForm bg-dark text-white"
                      type="password"
                      onInput={handleInput}
                      placeholder="Password"
                      autocomplete="off"
                      id="password"
                      name="password"
                      aria-label=".form-control-lg example"
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      className="invalid-feedback"
                    >
                      Password must be more than 5 characters.
                    </div>
                    <div className="valid-feedback">It can be used!</div>
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

export default RegLogForm;
