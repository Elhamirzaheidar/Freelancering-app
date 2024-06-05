import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const{isDarkMode,toggleDarkMode}=useDarkMode();
  return (
       <button onClick={toggleDarkMode}>
    { isDarkMode ? (
      <HiOutlineSun className="w-5 h-5 text-green-800 dark:text-primary-100 dark:hover:text-yellow-200"/>
      ):(
        <HiOutlineMoon className="w-5 h-5 text-green-800 " />
      )}
   </button>

  );
}

export default DarkModeToggle