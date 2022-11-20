import axios from "axios";
import { WeatherLocation } from "../models/weather";

const API_BASE_URL = "https://andyland-api.azurewebsites.net";

export default class Api {
  public static fetchTodos() {
    return axios.get("https://dummyjson.com/users").then((res) => res.data);
  }
  public static fetchAvailableSaunaTimesForSpecificDate(date: string) {
    return axios
      .get(`${API_BASE_URL}/api/Scrape/sukkerbiten?startDate=${date}`)
      .then((res) => res.data);
  }
  public static fetchWeatherData() {
    return axios
      .get(`${API_BASE_URL}/api/Weather/weatherLocationsList`)
      .then((res) => {
        return res.data.filter(
          (item: WeatherLocation) =>
            item.location.toLocaleLowerCase() === "oslo" ||
            item.location.toLocaleLowerCase() === "malmö" ||
            item.location.toLocaleLowerCase() === "linköping" ||
            item.location.toLocaleLowerCase() === "kiruna"
        );
      });
  }
  public static fetchFunnyCat() {
    return axios
      .get(`https://api.thecatapi.com/v1/images/search`)
      .then((res) => res.data);
  }
}
