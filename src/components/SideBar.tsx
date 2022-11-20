import { MdDashboard } from "react-icons/md";
import { WiCloud } from "react-icons/wi";
import { BsMap } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";
import { SiHotjar } from "react-icons/si";

const SideBar = () => {
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
              <Link to="/sukkerbiten">
                <SideBarIcon icon={<SiHotjar size={42} />} />
              </Link>
            </li>
            {/* <li>
              <Link to="/maps">
                <SideBarIcon icon={<BsMap size={28} />} />
              </Link>
            </li> */}
            <li>
              <Link to="/ticktick">
                <SideBarIcon icon={<TiTickOutline size={28} />} />
              </Link>
            </li>
          </ul>
        </nav>
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
