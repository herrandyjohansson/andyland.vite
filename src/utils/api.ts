import axios from "axios";
import { Todo } from "../models/todo";
import { WeatherLocation } from "../models/weather";

const API_BASE_URL = "https://andyland-api.azurewebsites.net";

export default class Api {
  public static fetchTodos() {
    return axios.get(`${API_BASE_URL}/api/todo`).then((res) => res.data);
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
        let orderResult = res.data.map((locationItem: WeatherLocation) => {
          const orderSortingArray: any = [
            {
              location: "oslo",
              order: 1,
            },
            {
              location: "malmö",
              order: 3,
            },
            {
              location: "Piggen",
              order: 2,
            },
            {
              location: "kiruna",
              order: 4,
            },
            {
              location: "Linkan",
              order: 5,
            },
            {
              location: "Sthlm",
              order: 6,
            },
          ];

          let match = orderSortingArray.find(
            (x: any) => x.location === locationItem.location.toLocaleLowerCase()
          );

          if (match) {
            return {
              ...locationItem,
              order: match.order,
            };
          }

          return locationItem;
        });

        return orderResult.sort((a: any, b: any) => a.order - b.order);
      });
  }
  public static fetchFunnyCat() {
    return axios
      .get(`https://api.thecatapi.com/v1/images/search`)
      .then((res) => res.data);
  }

  public static addTodo(_description: string, _todoListId: number) {
    let addTodo = {
      description: _description,
      todoListId: _todoListId,
    };

    return axios
      .post(`${API_BASE_URL}/api/todo`, addTodo)
      .then((res) => res.data);
  }

  public static completingTodoById(id: number) {
    return axios.put(`${API_BASE_URL}/api/todo/${id}`).then((res) => res.data);
  }
}
