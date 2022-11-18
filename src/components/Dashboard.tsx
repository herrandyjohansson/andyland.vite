import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Api from "../utils/api";

const Dashboard: React.FC = () => {
  const [fakeLoading, setFakeLoading] = useState<boolean>(true);
  const { data, isFetching } = useQuery(["users"], Api.fetchTodos);

  if (isFetching) return <div>loading...</div>;

  return <div>{data && JSON.stringify(data)}</div>;

  // return (
  //   <div className="transition-all ease-linear duration-300">
  //     <div className="grid grid-cols-2 grid-rows-2 gap-5">
  //       <div>
  //         <CardWeather
  //           temperature={"-10"}
  //           icon={<BsFillCloudRainHeavyFill />}
  //           name={"oslo"}
  //         />
  //       </div>
  //       <div>
  //         <CardWeather
  //           temperature={"5"}
  //           icon={<BsFillCloudRainHeavyFill />}
  //           name={"oslo"}
  //         />
  //       </div>
  //       <div className="col-span-2">
  //         <CardWeather temperature={"-23"} icon={<BsSunFill />} name={"oslo"} />
  //       </div>
  //     </div>
  //   </div>
  // );
};

const CardWeatherLoading = () => {
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

export default Dashboard;
