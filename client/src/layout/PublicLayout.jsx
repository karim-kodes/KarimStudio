import Navbar from "../components/navigations/Navbar";
import Footer from "../components/sections/Footer";
function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
