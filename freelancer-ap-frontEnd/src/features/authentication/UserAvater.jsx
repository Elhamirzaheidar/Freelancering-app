import useUser from "./useUser"

function UserAvater() {
  const {user}=useUser();
  return (
   <div className="flex items-center gap-x-2 text-secondary-600">
    <img className="w-9 rounded-full" src="/user.jpg" alt="user-acount" />
    <span className="hidden sm:flex">{user?.name}</span>
   </div>
  )
}

export default UserAvater