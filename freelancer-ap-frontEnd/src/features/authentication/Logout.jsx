import {HiArrowRightOnRectangle} from "react-icons/hi2"

import Loading from "../../ui/Loading"
import useLogout from "./UseLogout";
function Logout() {
   const{isPending,logout}= useLogout();
  return  isPending ? (
  <Loading/>
  ):(
    
          <button onClick={logout}>
    <HiArrowRightOnRectangle className="w-5 h-5 text-green-800 hover:text-red-700 dark:text-primary-100 dark:hover:text-red-700"/>
   </button>
    
 
  )
}

export default Logout