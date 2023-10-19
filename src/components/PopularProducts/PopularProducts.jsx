import BrandProductsCard from "../../pages/BrandProducts/BrandProductsCard";
import PropTypes from "prop-types";
const PopularProducts = ({ products }) => {
  const topProducts = products.slice(0, 6);
  console.log(topProducts.length);
  return (
    <div className="my-6 mb-24 w-[90%] mx-auto">
      <h2 className="text-4xl font-bold text-[tomato] mb-12 text-center">Our popular products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topProducts?.map((product, indx) => (
          <BrandProductsCard key={indx} product={product} noUpdate={"false"}></BrandProductsCard>
        ))}
      </div>
    </div>
  );
};
PopularProducts.propTypes = {
    products: PropTypes.array,
}
export default PopularProducts;
