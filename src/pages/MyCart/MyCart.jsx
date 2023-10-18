import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const cartProducts = useLoaderData();
  return (
    <div>
      <div className="py-6 w-[90%] mx-auto ">
        <h2 className="text-4xl capitalize font-bold text-center mb-12  p-8">
          Cart Products
        </h2>
        {cartProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartProducts?.map((product) => (
              <MyCartCard key={product._id} product={product}></MyCartCard>
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
