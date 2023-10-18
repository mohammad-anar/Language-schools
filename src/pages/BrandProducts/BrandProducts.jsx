import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  // const [photo, brand, name, type, price, rating, description] = products;
  const { brand } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5001/brandproducts/${brand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brand]);
  return (
    <div className="h-[90vh]">
      {/* carousel slider  */}
      <div>
        <AutoplaySlider
          className={"h-[90vh]"}
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" />
          <div data-src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" />
          <div data-src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" />
        </AutoplaySlider>
      </div>
      {/* brand products */}
      <div className="py-12 w-[90%] mx-auto ">
        <h2 className="text-4xl capitalize font-bold text-center my-6 p-8">
          {brand} Products
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
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
