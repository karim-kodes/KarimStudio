import { Routes, Route } from "react-router-dom";

// Layouts
import ClientLayout from "./layout/ClientLayout";
import PublicLayout from "./layout/PublicLayout";

// Pages
import Home from "./pages/public/Home";
import Dashboard from "./pages/client/Dashboard";
import Projects from "./pages/client/Projects";
import ProjectDetails from "./pages/client/ProjectDetails";

function App() {
  return (
    <Routes>
      {/* Public Site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Client Portal */}
      <Route path="/client" element={<ClientLayout />}>
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Projects */}
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":projectSlug" element={<ProjectDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
