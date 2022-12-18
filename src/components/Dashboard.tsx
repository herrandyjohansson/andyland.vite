import Api from "../utils/api";

import { useQuery } from "@tanstack/react-query";
import { WeatherLocation } from "../models/weather";
import {
  WeatherCard,
  WeatherCardIconColorPicker,
  WeatherCardLoading,
} from "./WeatherCard";
import DateUtils from "../utils/date";
import { SaunaCard } from "./SaunaCard";
import { Cats } from "./Cats";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { useReducer } from "react";

enum CountActionKind {
  Increment = "increment",
  Decrement = "decrement",
}

interface CountState {
  count: number;
}
interface CountAction {
  type: CountActionKind;
  payload: number;
}
interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

const Dashboard: React.FC = () => {
  const {
    data: weatherData,
    isFetched: isWeatherFetched,
    isLoading: isWeatherLoading,
  } = useQuery<WeatherLocation[]>(["weather"], Api.fetchWeatherData, {
    refetchInterval: 1000 * 60 * 60,
  });

  return (
    <div>
      <section id="weather" className="transition-all ease-linear duration-300">
        {isWeatherLoading && (
          <div className="grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer">
            <WeatherCardLoading />
            <WeatherCardLoading />
          </div>
        )}
        {isWeatherFetched && (
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{ delay: 5000 }}
          >
            {weatherData?.map((location) => {
              return (
                <SwiperSlide>
                  <WeatherCard
                    key={location.location}
                    icon={WeatherCardIconColorPicker(location.temperature)}
                    item={location}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </section>
      <section id="cats">
        <div>
          <Cats />
        </div>
      </section>
      <section id="sauna">
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(1)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(2)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(3)} />
      </section>
    </div>
  );
};

export default Dashboard;
