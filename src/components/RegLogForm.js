import React from "react";
import ReactDOM from "react-dom/client";

class RegLogForm extends React.Component {
  constructor(props) {
    super(props);
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
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control form-control-lg inputForm bg-dark text-white"
                        type="text"
                        placeholder="Username"
                        name="username"
                        aria-label=".form-control-lg example"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control form-control-lg inputForm bg-dark text-white"
                        type="password"
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
                          type="button"
                          class="btn btn-success btn-lg buttonForm"
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
