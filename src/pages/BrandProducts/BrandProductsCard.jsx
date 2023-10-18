import PropTypes from 'prop-types';
const BrandProductsCard = ({product}) => {
    return (
        
        <div>
          <div className="relative border bg-gray-100 flex flex-col shadow-md  rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://assets.stickpng.com/images/588524d86f293bbfae451a31.png"
                className=" max-w-[200px] max-h-[150px] block mx-auto "
              />
            </div>
            <div className="p-6 ">
              <div className="flex items-center justify-between mb-2">
                <p className="block   text-xl antialiased font-medium leading-relaxed text-blue-red-900">
                  Model: {product.name}
                </p>
                <p className="block  text-xl  font-medium leading-relaxed text-blue-red-900">
                  Price: 95.00$
                </p>
              </div>
              <p className="block   text-base  font-medium  text-black ">
                Brand: <span className="font-normal">Apple</span>
              </p>
              <p className="block  text-base  font-medium  text-black ">
                Type: <span className="font-normal">Laptop</span>
              </p>
              <div className="flex items-center gap-3 font-medium  text-base mt-3  text-black ">
                Rating:
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-amber-600"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-amber-600"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-amber-600"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-amber-600"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-amber-600"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-4">
              <button
                className=" border border-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white text-red-600 duration-300"
                type="button"
              >
                Details
              </button>
              <button
                className=" border border-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white text-red-600 duration-300"
                type="button"
              >
                Update
              </button>
            </div>
          </div>
        </div>
    );
};
BrandProductsCard.propTypes ={
    product: PropTypes.object,
}

export default BrandProductsCard;