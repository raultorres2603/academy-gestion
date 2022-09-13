import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import $ from "jquery";
import axios from "axios";
import config from "../configs/config.json";
import Cookies from "universal-cookie";

function Profile(props) {
  const [user, setUser] = useState(props.user);
  const cookie = new Cookies();
  console.log(user);

  document.title = "A&G - Profile";

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        `${config.secure}://${config.dominion}:${config.port}/api/updateUser`,
        {
          firstName: user.firstName.toUpperCase(),
          secondName: user.secondName.toUpperCase(),
          nif: user.nif.toUpperCase(),
          country: user.country.toUpperCase(),
          tel: user.tel,
          city: user.city.toUpperCase(),
          idUser: window.atob(cookie.get("Auth")),
        }
      )
      .then((res) => {
        console.log(res);
        if (res.error) {
          $(".alert-danger").fadeToggle(500);
          setTimeout(() => {
            $(".alert-danger").fadeToggle(500);
          }, 2000);
        } else {
          $(".alert-success").fadeToggle(500);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((err) => {
        alert("Error de conexión");
        console.log(err);
      });
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "firstName":
        user.firstName = e.target.value;
        console.log(user);
        break;
      case "secondName":
        user.secondName = e.target.value;
        console.log(user);
        break;
      case "nif":
        user.nif = e.target.value;
        console.log(user);
        break;
      case "tel":
        user.tel = e.target.value;
        console.log(user);
        break;
      case "country":
        user.country = e.target.value;
        console.log(user);
        break;
      case "city":
        user.city = e.target.value;
        console.log(user);
        break;

      default:
        break;
    }
  }

  return (
    <div className="profileMenu">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <p className="display-3 text-center text-white">
                {config.configProfile}
              </p>
            </div>
            <div className="row">
              <div
                className="alert alert-success"
                role="alert"
                style={{ display: "none" }}
              >
                {config.successProfile}
              </div>
              <div
                className="alert alert-danger"
                role="alert"
                style={{ display: "none" }}
              >
                {config.dangerProfile}
              </div>
            </div>
            <div className="row mt-5">
              <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="firstName"
                      placeholder={config.firstName}
                      defaultValue={!user ? "" : user.firstName}
                      onInput={handleChange}
                      required
                      aria-label=".form-control-lg example"
                    />
                    <input
                      className="form-control form-control-lg mt-4"
                      type="text"
                      name="nif"
                      required
                      placeholder={config.nif}
                      defaultValue={!user ? "" : user.nif}
                      onInput={handleChange}
                      aria-label=".form-control-lg example"
                    />
                    <input
                      className="form-control form-control-lg mt-4"
                      type="text"
                      name="country"
                      required
                      placeholder={config.country}
                      defaultValue={!user ? "" : user.country}
                      onInput={handleChange}
                      aria-label=".form-control-lg example"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="secondName"
                      placeholder={config.secondName}
                      defaultValue={!user ? "" : user.secondName}
                      onInput={handleChange}
                      required
                      aria-label=".form-control-lg example"
                    />
                    <input
                      className="form-control form-control-lg mt-4"
                      type="text"
                      name="tel"
                      placeholder={config.tel}
                      defaultValue={!user ? "" : user.tel}
                      required
                      onInput={handleChange}
                      aria-label=".form-control-lg example"
                    />
                    <input
                      className="form-control form-control-lg mt-4"
                      type="text"
                      name="city"
                      required
                      placeholder={config.city}
                      defaultValue={!user ? "" : user.city}
                      onInput={handleChange}
                      aria-label=".form-control-lg example"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <button type="submit" className="btn btn-success btn-lg">
                    {config.confirmProfile}
                  </button>
                </div>
                <div className="row mt-4">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    {config.rejectProfile}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
