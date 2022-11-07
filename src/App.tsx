import "./App.css";
import SideBar from "./components/SideBar";
import { BsSunFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
function App() {
  return (
    <div className="relative top-0 h-screen">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="main-wrapper">
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <div>
            <CardWeather
              temperature={"-10"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-10"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div className="col-span-2">
            <CardWeather
              temperature={"-23"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"14"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div className="">
            <CardWeather
              temperature={"-7"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-6"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-2"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-10"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-10"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>

          <div>
            <CardWeather
              temperature={"-2"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"33"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-1"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
          <div>
            <CardWeather
              temperature={"-17"}
              icon={<BsFillCloudRainHeavyFill />}
              name={"oslo"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const CardWeather = ({ temperature, icon, name }: any) => {
  return (
    <div>
      <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase text-xs p-1 tracking-widest">
        {name}
      </div>
      <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
        <div className="flex justify-between mx-4 mt-10 mb-10">
          <div className="text-5xl">{icon}</div>
          <div className="text-7xl flex">
            {temperature}
            <span className="text-lg ml-2">
              <span>°</span>
              <span className="">C</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
