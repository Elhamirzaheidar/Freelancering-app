
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
import UserIcon from "./UserIcon";

function HeaderMenu() {
  return (
    <div>
      <ul className="flex gap-x-4 items-center mt-1">
      <li>
      <UserIcon/>
      </li>
      <li><DarkModeToggle/></li>
      <li><Logout/></li>
    </ul>
    </div>
  )
}

export default HeaderMenu