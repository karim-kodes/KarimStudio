import { Routes, Route } from "react-router-dom";

// Layouts
import ClientLayout from "./layout/ClientLayout";
import PublicLayout from "./layout/publicLayout";

// Pages
import Home from "./pages/public/Home";
import Dashboard from "./pages/client/Dashboard";

function App() {
  return (
    <Routes>
      {/* Public Site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Client Portal */}
      <Route
        path="/client/"
        element={
          <ClientLayout
            title="Dashboard"
            description="Overview of your project & activity"
          />
        }
      >
        {/* DEFAULT CLIENT PAGE */}
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
