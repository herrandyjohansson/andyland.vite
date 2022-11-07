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
        <div className="grid grid-cols-2 gap-5">
          <Card
            temperature={"-2"}
            icon={<BsFillCloudRainHeavyFill />}
            name={"oslo"}
          />
          <Card
            temperature={"8"}
            icon={<BsSunFill size={44} color={"#FFE168"} />}
            name={"linköping"}
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({ temperature, icon, name }: any) => {
  return (
    <div>
      <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase text-xs p-1 tracking-widest">
        {name}
      </div>
      <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
        <div className="flex justify-between mx-4">
          <div className="text-5xl">{icon}</div>
          <div className="text-5xl">{temperature} °C</div>
        </div>
      </div>
    </div>
  );
};

export default App;
