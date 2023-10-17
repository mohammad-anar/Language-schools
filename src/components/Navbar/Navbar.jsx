import { NavLink } from "react-router-dom";

const Navbar = () => {
  const elements = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-red-600"
              : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addproducts"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-red-600"
              : "";
          }}
        >
          Add Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/mycart"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-red-600"
              : "";
          }}
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/signup"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-red-600"
              : "";
          }}
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-red-600"
              : "";
          }}
        >
          Log In
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#130f40] text-white py-5 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 text-base font-medium z-[1] -ml-2 p-2 shadow bg-[#130f40] rounded-br-xl w-52"
            >
              {elements}
            </ul>
          </div>
          <a className=" uppercase text-2xl font-bold">
            <span className="text-red-600 text-3xl">Digital</span>Store
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-medium">
            {elements}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">User</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
