import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const elements = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-[tomato]"
              : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addproduct"}
          className={({ isActive, isPending }) => {
            return isPending
              ? "Pending"
              : isActive
              ? "underline text-[tomato]"
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
              ? "underline text-[tomato]"
              : "";
          }}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  const hanldeLogout = () => {
    logOut()
    .then(() => {
      toast.success("Log out successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch(err => {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    }
  return (
    <div>
      <div className="navbar bg-[#130f40] text-white py-5 pr-8 md:px-8">
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
            <span className="text-[tomato] text-3xl">Digital</span>Store
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-medium">
            {elements}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex items-center">
              <img
                className="w-[40px] rounded-full"
                src={user?.photoURL}
                alt="User"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 relative menu p-4 pt-12 shadow text-center bg-[#130f40] -mr-8 mt-8 rounded-box w-80  text-white"
            >
              <div>
                <img
                  className="w-[60px] rounded-full block mx-auto"
                  src={user?.photoURL}
                  alt="User"
                />
                <h2 className="text-xl font-bold mb-2">{user?.displayName}</h2>
                <p className="mb-1">{user?.email}</p>
              </div>
              <hr />
              <button onClick={hanldeLogout} className="btn btn-sm mt-4 font-bold cursor-pointer">Log out</button>
            </ul>
          </div> :
          <Link to={'/login'}><button className="font-bold">Log In</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
