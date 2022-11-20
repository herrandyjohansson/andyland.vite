import { WeatherLocation } from "../models/weather";
import { GiWinterGloves } from "react-icons/gi";
import { GiColdHeart } from "react-icons/gi";
import { RiTempColdLine } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";

export interface Props {
  item: WeatherLocation;
  icon: React.ReactNode;
}

export const WeatherCardIconColorPicker = (temperature: any) => {
  if (temperature < -5) {
    return <GiWinterGloves color="#1e3a8a" />;
  }
  if (temperature < 0) {
    return <GiColdHeart color="#3b82f6" />;
  }
  if (temperature > 0) {
    return <RiTempColdLine color="#93c5fd" />;
  }
  if (temperature > 5) {
    return <BsSunFill color="#065f46" />;
  }
  if (temperature > 10) {
    return <BsSunFill color="#fde047" />;
  }
};

export const WeatherCard: React.FC<Props> = ({ icon, item }) => {
  return (
    <div>
      <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase text-xs p-1 tracking-widest">
        {item.location}
      </div>
      <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
        <div className="flex h-20 justify-between">
          <div className="flex justify-start align-middle items-center text-5xl w-16">
            {icon}
          </div>
          <div className="flex align-middle items-center text-5xl">
            <span>{item.temperature}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WeatherCardLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase text-xs p-1 tracking-widest">
        <div className="h-2 bg-slate-700 rounded col-span-2 mx-40"></div>
      </div>
      <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
        <div className="flex justify-between mx-4 mt-10 mb-10">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>
          <div className="text-7xl flex">
            <span className="text-lg ml-2"></span>
            <div className="rounded bg-slate-700 h-16 w-10"></div>
            <div className="rounded bg-slate-700 h-4 w-4 ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
