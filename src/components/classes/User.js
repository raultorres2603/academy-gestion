import axios from "axios";
import config from "../../configs/config.json";
import Cookies from "universal-cookie";
import $ from "jquery";

class User {
  #username;
  #password;

  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

  getUsername() {
    return this.#username;
  }

  getPassword() {
    return this.#password;
  }

  create() {
    axios
      .post(`${config.secure}://${config.dominion}:${config.port}/api/login`, {
        username: this.getUsername(),
        password: this.getPassword(),
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          switch (res.data.error) {
            case "1":
              alert(
                "No se ha especificaco un usuario o contraseña o no se han enviado parametros correctos."
              );
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
            new Cookies().set("Auth", window.btoa(res.data.user), {
              maxAge: 3600,
            });
            window.location.reload();
          }
        }
      });
  }

  static update(firstName, secondName, nif, country, tel, city, idUser) {
    axios
      .post(
        `${config.secure}://${config.dominion}:${config.port}/api/updateUser`,
        {
          firstName: firstName.toUpperCase(),
          secondName: secondName.toUpperCase(),
          nif: nif.toUpperCase(),
          country: country.toUpperCase(),
          tel: tel,
          city: city.toUpperCase(),
          idUser: window.atob(idUser),
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
}

export default User;
