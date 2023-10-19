import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside
          data-aos="fade-down-right"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <a className=" uppercase text-2xl font-bold">
            <span className="text-[tomato] text-3xl">Digital</span>Store
          </a>
          <p>
            Technology and Electronics Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <header className="footer-title">About Us</header>
          <a className="link link-hover">Branches & Pickup Points</a>
          <a className="link link-hover">Warranty</a>
          <a className="link link-hover">EMI</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <nav
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <header className="footer-title">Order Procedure</header>
          <a className="link link-hover">Home Delivery</a>
          <a className="link link-hover">Return & Refund Policy</a>
          <a className="link link-hover">Payment Method</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav
          data-aos="fade-down-left"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <header className="footer-title">Get In Touch</header>
          <div className="flex gap-2 text-lg">
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full">
              <BsFacebook></BsFacebook>
            </p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full">
              <BsTwitter></BsTwitter>
            </p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full">
              <BsInstagram></BsInstagram>
            </p>
            <p className="hover:bg-black hover:text-blue-800 duration-500 p-2 rounded-full">
              <FaGooglePlusSquare></FaGooglePlusSquare>
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
