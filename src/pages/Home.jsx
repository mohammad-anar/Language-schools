import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
