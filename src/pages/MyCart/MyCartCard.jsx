import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MyCartCard = ({ product }) => {
    const { id, photo, brand, name, type, price } = product;
    return (
        <div>
            <div className="relative border bg-white flex flex-col shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-xl bg-clip-border">
          <img src={photo} className=" w-[250px] h-[200px] block mx-auto " />
        </div>
        <div className="p-6 ">
          <div className="flex items-center justify-between mb-2">
            <p className="block   text-xl antialiased font-medium leading-relaxed text-blue-red-900">
              {name.slice(0, 15)} {(name.length > 15) ? "..." : "" }
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
        </div>
        <div className="p-6 pt-0 flex flex-col gap-4">
          <Link to={`/productdetails/${id}`}>
            <button
              className=" border border-red-600 px-6 py-2 w-full rounded-lg hover:bg-red-600 hover:text-white text-red-600 duration-300"
              type="button"
            >
              Details
            </button>
          </Link>
          <button
            className=" border font-bold border-green-600 px-6 py-2 rounded-lg bg-green-600 text-white hover:text-green-600 hover:bg-transparent duration-300"
            type="button"
          >
            Bye Now
          </button>
        </div>
      </div>
        </div>
    );
};
MyCartCard.propTypes = {
    product: PropTypes.object,
  };
  

export default MyCartCard;