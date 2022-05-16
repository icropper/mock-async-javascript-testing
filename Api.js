import axios from "axios";

export class Api {

  static async getPersonById(id){
    return axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
}

