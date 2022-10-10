import axios from "axios";
import config from "../../configs/config.json";
import Cookies from "universal-cookie";

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
}

export default User;
