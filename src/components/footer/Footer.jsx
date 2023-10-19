import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
        <a className=" uppercase text-2xl font-bold">
            <span className="text-[tomato] text-3xl">Digital</span>Store
          </a>
          <p>
            Technology and Electronics Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">About Us</header>
          <a className="link link-hover">Branches & Pickup Points</a>
          <a className="link link-hover">Warranty</a>
          <a className="link link-hover">EMI</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <nav>
          <header className="footer-title">Order Procedure</header>
          <a className="link link-hover">Home Delivery</a>
          <a className="link link-hover">Return & Refund Policy</a>
          <a className="link link-hover">Payment Method</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav>
          <header className="footer-title">Get In Touch</header>
          <div className="flex gap-2 text-lg">
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full"><BsFacebook></BsFacebook></p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full"><BsTwitter></BsTwitter></p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full"><BsInstagram></BsInstagram></p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full"><FaGooglePlusSquare></FaGooglePlusSquare></p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
