import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-social">
        <FaInstagram />
      </div>

      <div className="footer-decoration">
        {/* Decorative shapes */}
  <div className="footer-shapes">
    <div className="shape green rectangle"></div>
    <div className="shape yellow diamond"></div>
    <div className="shape red rectangle"></div>
    <div className="shape yellow circle"></div>
    <div className="shape green diamond"></div>
    <div className="shape blue circle"></div>
    <div className="shape red semicircle"></div>
  </div>
      </div>

    </footer>
  );
}

export default Footer;


{/* Decorative shapes */}
  <div className="footer-shapes">
    <div className="shape green rectangle"></div>
    <div className="shape yellow diamond"></div>
    <div className="shape red rectangle"></div>
    <div className="shape yellow circle"></div>
    <div className="shape green diamond"></div>
    <div className="shape blue circle"></div>
    <div className="shape red semicircle"></div>
  </div>