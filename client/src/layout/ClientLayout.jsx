import Sidebar from "../components/navigations/Sidebar";
import ClientHeader from "../components/cards/ClientHeader";
import { Outlet } from "react-router-dom";

function ClientLayout({ title, description }) {
  return (
    <div className=" flex bg-[#0C0F13] h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <ClientHeader title={title} description={description} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;
