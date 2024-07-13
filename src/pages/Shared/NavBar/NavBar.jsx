import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.webp";
// import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link className="hover:bg-gray-800" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-800" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-800" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-800" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-800" to="/contact">
          Contact
        </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link className="hover:bg-gray-800" to="/bookings">
              My Bookings
            </Link>
          </li>
          <li>
            <button className="hover:bg-gray-800" onClick={handleLogOut}>
              Log out{" "}
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link className="hover:bg-gray-800" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-700 text-white   h-16 mb-6 rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {navItems}
          </ul>
        </div>
        <div className="flex ">
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-14" src={logo} alt="" />
          </Link>
          <p className="py-3">
            <span className="text-4xl text-red-600 font-bold">N</span>avana
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
