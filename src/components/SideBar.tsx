import { MdDashboard } from "react-icons/md";
import { WiCloud } from "react-icons/wi";
import { BsMap } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className="flex bg-grey-900 text-green-400 fixed top-0 h-screen flex-col shadow w-20">
      <SideBarIcon icon={<MdDashboard size={32} />} />
      <Divider />
      <SideBarIcon icon={<WiCloud size={42} />} />
      <SideBarIcon icon={<BsMap size={28} />} />
    </div>
  );
};

const SideBarIcon = ({ icon }: any) => {
  return <div className="sidebar-icon">{icon}</div>;
};

const Divider = () => <div className="bg-grey-700 h-1 mx-5"></div>;

export default SideBar;
