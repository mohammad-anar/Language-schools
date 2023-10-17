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
    </div>
  );
};

export default Home;
