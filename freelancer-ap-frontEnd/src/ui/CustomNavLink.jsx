import { NavLink } from "react-router-dom";

export default function CustomNavlink({ children, to }) {
  const navlinkClass =
    "rounded-md flex items-center gap-x-2  hover:rounded-md px-2 py-1.5  transition-all duration-300";
  return (
   <li>
     <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass}  bg-green-600 shadow-lg  text-white `
          : `${navlinkClass}text-black  bg-gray-200`
      }
    >
      {children}
    </NavLink>
   </li>
  );
}