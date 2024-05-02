import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-white row-start-1 row-span-2 border-l border-gray-200 p-4 ">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavlink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavlink({ children, to }) {
  const navlinkClass =
    "rounded-md flex items-center gap-x-2 hover:text-blue-800 hover:rounded-md px-2 py-1.5  transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass}  bg-blue-300  text-white `
          : `${navlinkClass}text-gray-600  bg-white`
      }
    >
      {children}
    </NavLink>
  );
}
