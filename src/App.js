import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegLogForm from './components/RegLogForm';
import MainMenu from './components/MainMenu';
import "./css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: false
    }
  }
  
  render() {
    return (
      <div className="App text-center">
        {this.state.userLogged ? <MainMenu /> : <RegLogForm />}
      </div>
    );
  }
  
}

export default App;
