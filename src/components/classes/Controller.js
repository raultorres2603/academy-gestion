import Aula from "./Aula";
import User from "./User";

class Controller {
  createAula(name, plant, door) {
    let aula = new Aula(name, plant, door);
    let response = aula.create();

    if (response.err) {
      alert("Error al crear aula");
    } else {
      console.log("InsertID: " + response.insertID);
    }
  }

  createUser(username, password) {
    let user = new User(username, password);
    user.create();
  }

  updateUser(firstName, secondName, nif, country, tel, city, idUser) {
    User.update(firstName, secondName, nif, country, tel, city, idUser);
  }
}

export default Controller;
