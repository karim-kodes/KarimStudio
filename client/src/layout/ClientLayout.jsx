import Sidebar from "../components/navigations/Sidebar";
import ClientHeader from "../components/cards/ClientHeader";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function ClientLayout() {
  const [header, setHeader] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="flex bg-[#0C0F13] h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden overflow-y-scroll">
        <ClientHeader title={header.title} description={header.description} />

        <main>
          <Outlet context={{ setHeader }} />
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;
