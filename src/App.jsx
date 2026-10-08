import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import { FaInstagram } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <FAQ />
      <Newsletter />
      <FaInstagram />
      <Footer />
    </div>
  );
}

export default App;