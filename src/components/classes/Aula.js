import axios from "axios";
import config from "../../configs/config.json";

class Aula {
  #name;
  #plant;
  #door;

  constructor(name, plant, door) {
    this.#name = name;
    this.#plant = plant;
    this.#door = door;
  }

  getName() {
    return this.#name;
  }

  getPlant() {
    return this.#plant;
  }

  getDoor() {
    return this.#door;
  }

  create() {
    axios
      .post(
        `${config.secure}://${config.dominion}:${config.port}/aulas/create`,
        {
          name: this.getName(),
          plant: this.getPlant(),
          door: this.getDoor(),
        }
      )
      .then((response) => {
        if (response.data.err) {
          return JSON.stringify({ err: "1" });
        } else {
          return JSON.stringify({ insertId: response.data.insertID });
        }
      });
  }
}

export default Aula;
