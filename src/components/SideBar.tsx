import { MdDashboard } from "react-icons/md";
import { WiCloud } from "react-icons/wi";
import { BsMap } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Api from "../utils/api";

const SideBar = () => {
  const query = useQuery(["users"], () => {
    return Api.fetchTodos();
  });

  console.log(query && query.data);

  return (
    <>
      <div className="flex bg-grey-900 text-green-400 fixed top-0 h-screen flex-col shadow w-20">
        <nav className="text-white text-4xl sidebar">
          <ul>
            <li>
              <Link to="/dashboard">
                <SideBarIcon icon={<MdDashboard size={32} />} />
              </Link>
            </li>
            <Divider />
            <li>
              <Link to="/weather">
                <SideBarIcon icon={<WiCloud size={42} />} />
              </Link>
            </li>
            <li>
              <Link to="/maps">
                <SideBarIcon icon={<BsMap size={28} />} />
              </Link>
            </li>
          </ul>
        </nav>
        {query && JSON.stringify(query.data)}
      </div>
      <div className="main-wrapper">
        <Outlet />
      </div>
    </>
  );
};

const SideBarIcon = ({ icon }: any) => {
  return <div className="sidebar-icon">{icon}</div>;
};

const Divider = () => <div className="bg-grey-700 h-1 mx-5"></div>;

export default SideBar;
