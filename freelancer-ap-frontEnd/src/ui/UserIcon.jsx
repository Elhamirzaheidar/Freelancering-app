import { HiOutlineUser } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

function UserIcon() {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("dashboard")} >
            <HiOutlineUser className="w-5 h-5 text-green-900 dark:text-primary-100" />
        </button>
    </div>
  )
}

export default UserIcon