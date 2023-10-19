import { ToastContainer } from "react-toastify";
import Brands from "../components/Brands/Brands";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div>
        <Brands></Brands>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Home;
