import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr] ">
      <div className="bg-gray-50 py-4 px-8">Header</div>
      <div className="bg-white row-start-1 row-span-2 ">Sidebar</div>
      <div className="bg-gray-100 p-8 overflow-y-auto">
        <div className="bg-yellow-100 mx-auto max-w-screen-sm flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
