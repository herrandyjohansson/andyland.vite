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

const Dashboard: React.FC = () => {
  const {
    data: weatherData,
    isFetching: isWeatherDataFetching,
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
            <WeatherCardLoading />
            <WeatherCardLoading />
          </div>
        )}
        {isWeatherFetched && (
          <div className="grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer">
            {weatherData?.map((location) => {
              return (
                <WeatherCard
                  key={location.location}
                  icon={WeatherCardIconColorPicker(location.temperature)}
                  item={location}
                />
              );
            })}
          </div>
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
