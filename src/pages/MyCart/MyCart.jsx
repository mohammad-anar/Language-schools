import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [products, setAllProducts] = useState(cartProducts);
  return (
    <div>
    <Helmet>
      <title>Ditigalstore-MyCart</title>
    </Helmet>
      <div className="py-6 w-[90%] mx-auto ">
        <h2 className="text-4xl capitalize text-[tomato] font-bold text-center mb-12  p-8">
          All Cart Products
        </h2>
        {cartProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((product) => (
              <MyCartCard 
              key={product._id}
               product={product}
               cartProducts={cartProducts}
               setAllProducts = {setAllProducts}
               ></MyCartCard>
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

export default MyCart;
