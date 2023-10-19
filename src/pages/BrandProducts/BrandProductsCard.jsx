import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandProductsCard = ({ product, noUpdate }) => {
  const { _id, photo, brand, name, type, price } = product;
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="80"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="relative border bg-white flex flex-col shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-xl bg-clip-border">
          <img src={photo} className=" w-[250px] h-[200px] block mx-auto " />
        </div>
        <div className="p-6 ">
          <div className="flex items-center justify-between mb-2">
            <p className="block uppercase  text-xl antialiased font-medium leading-relaxed text-blue-red-900">
              {name.slice(0, 15)} {name.length > 15 ? "..." : ""}
            </p>
            <p className="block  text-xl  font-medium leading-relaxed text-blue-red-900">
              Price: {price}$
            </p>
          </div>
          <p className="block   text-base  font-medium  text-black ">
            Brand: <span className="font-normal uppercase">{brand}</span>
          </p>
          <p className="block  text-base  font-medium  text-black ">
            Type: <span className="font-normal">{type}</span>
          </p>
          <div className="flex items-center gap-3 font-medium  text-base mt-3  text-black ">
            Rating:
            <div className="rating rating-sm">
              <input
                type="radio"
                name={`rating-${Math.random() * 50}`}
                className="mask mask-star-2 bg-amber-600"
              />
              <input
                type="radio"
                name={`rating-${Math.random() * 50}`}
                className="mask mask-star-2 bg-amber-600"
              />
              <input
                type="radio"
                name={`rating-${Math.random() * 50}`}
                className="mask mask-star-2 bg-amber-600"
              />
              <input
                type="radio"
                name={`rating-${Math.random() * 50}`}
                className="mask mask-star-2 bg-amber-600"
              />
              <input
                type="radio"
                name={`rating-${Math.random() * 50}`}
                className="mask mask-star-2 bg-amber-600"
              />
            </div>
          </div>
        </div>
        <div className="p-6 pt-0 flex flex-col gap-4">
          <Link to={`/productdetails/${_id}`}>
            <button
              className=" border border-[tomato] px-6 py-2 w-full rounded-lg hover:bg-[tomato] hover:text-white text-[tomato] duration-300"
              type="button"
            >
              Details
            </button>
          </Link>
          {!noUpdate && (
            <Link to={`/updateproduct/${_id}`}>
              <button
                className=" border w-full border-[tomato] px-6 py-2 rounded-lg hover:bg-[tomato] hover:text-white text-[tomato] duration-300"
                type="button"
              >
                Update
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
BrandProductsCard.propTypes = {
  product: PropTypes.object,
  noUpdate: PropTypes.bool,
};

export default BrandProductsCard;
