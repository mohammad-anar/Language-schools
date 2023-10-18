import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const BrandProducts = () => {
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
      <div className="my-24 w-[90%] mx-auto pb-12 ">
        <h2 className="text-4xl font-bold text-center my-6 p-8">
          Brand Products
        </h2>
        {/* products div  */}
        <div>
          <div className="relative border bg-gray-100 flex flex-col shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://assets.stickpng.com/images/588524d86f293bbfae451a31.png"
                className=" w-[200px] block mx-auto "
              />
            </div>
            <div className="p-6 ">
              <div className="flex items-center justify-between mb-2">
                <p className="block   text-xl antialiased font-medium leading-relaxed text-blue-red-900">
                  Model: KR435d
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
              <p className="flex items-center gap-3 font-medium  text-base mt-3  text-black ">
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
                    checked
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
              </p>
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
      </div>
    </div>
  );
};

export default BrandProducts;
