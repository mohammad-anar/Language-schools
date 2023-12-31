import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";
import { Helmet } from "react-helmet-async";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const BrandProducts = () => {
  const [products, setProducts] = useState([]);

  const { brand } = useParams();
  useEffect(() => {
    fetch(
      `https://assignment-10-server-puce-zeta.vercel.app/brandproducts/${brand}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brand]);
  return (
    <div className="h-[90vh]">
      <Helmet>
        <title>Ditigalstore-Products</title>
      </Helmet>
      {/* carousel slider  */}
      <div>
        <AutoplaySlider
          className={"h-[90vh]"}
          play={true}
          cancelOnInteraction={false}
          interval={6000}
        >
          <div data-src="https://i.ibb.co/nnXQ0Qn/slider1.jpg" />
          <div data-src="https://i.ibb.co/K5QKhpV/slider2.jpg" />
          <div data-src="https://i.ibb.co/fDV6FHH/slider3.jpg" />
        </AutoplaySlider>
      </div>
      {/* brand products */}
      <div className="py-12 w-[90%] mx-auto ">
        <div>
          <h2 className="text-4xl text-[tomato] capitalize font-bold text-center my-6 p-8">
            {brand} Products
          </h2>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((product) => (
              <BrandProductsCard
                key={product._id}
                product={product}
              ></BrandProductsCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <h2 className="text-xl text-red-600 ">No items available</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
