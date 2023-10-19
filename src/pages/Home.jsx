
import Brands from "../components/Brands/Brands";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Contact from "../components/Contact/Contact";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="min-h-screen">
    <Helmet>
      <title>DigitalStore-Home</title>
    </Helmet>
      <Banner></Banner>
      <div>
        <Brands></Brands>
        <PopularProducts products={products}></PopularProducts>
        <Contact></Contact>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
