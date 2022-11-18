import axios from "axios";

export default class Api {
  public static fetchTodos() {
    return axios.get("https://dummyjson.com/users").then((res) => res.data);
  }
}
