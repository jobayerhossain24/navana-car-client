import { Link } from "react-router-dom";
import logo2 from "../../../assets/logo2.webp";

const Footer = () => {
  return (
    <footer className="footer p-32 mt-16 bg-gray-800 text-white rounded-t-lg">
      <div>
        <img className="w-20" src={logo2} alt="" />
        <p>
          Navana Automobiles Ltd.
          <br />
          Providing reliable tech since 1964
        </p>
        <small>© 2024 - Navana Automobiles PLC.</small>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/services" className="link link-hover">
          Service
        </Link>
        <Link to="/products" className="link link-hover">
          Product
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </div>
      <div>
        <span className="footer-title">CONTACT INFO</span>
        <span>Address</span>
        <small>Toyota 3s Center. 205 - 207, Tejgaon I/A, Dhaka - 1208</small>
        <span>Phone</span>
        <small>02-9884992-4</small>
        <span>Email</span>
        <small>info@navana.com</small>
      </div>
    </footer>
  );
};

export default Footer;
