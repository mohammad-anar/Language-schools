import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { _id, photo, brand, name, type, price, rating, description } = product;
  const hanldeAddCart = () => {
    const addProduct = {
      id: _id,
      photo,
      brand,
      name,
      type,
      price,
      rating,
      description,
    };
    fetch("https://assignment-10-server-puce-zeta.vercel.app/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  return (
    <div className="w-[80%] mx-auto py-12">
      <Helmet>
        <title>Ditigalstore-Detail</title>
      </Helmet>
      <div className="mb-12">
        <h2
          data-aos="zoom-out"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="capitalize text-[tomato] text-5xl font-bold text-center mb-3"
        >
          Product Details
        </h2>
        <p
          data-aos="flip-right"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="text-center font-bold"
        >
          Priduct id: <span className="font-normal">{_id}</span>
        </p>
      </div>
      <div className="relative border p-12 px-16 pt-0 bg-white flex flex-col  rounded-lg bg-clip-border">
        <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-lg bg-clip-border">
          <img
            data-aos="flip-right"
            data-aos-offset="100"
            data-aos-delay="80"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            src={photo}
            className=" w-[500px] h-[300px] md:h-[450px] block mx-auto "
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p  className="block uppercase  text-2xl antialiased font-medium leading-relaxed text-blue-red-900">
              Model: <span className="font-normal"> {name}</span>
            </p>
            <p className="block  text-2xl  font-medium leading-relaxed text-blue-red-900">
              Price: <span className="font-normal"> {price}$</span>
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
          <p className="mt-4">{description}</p>
        </div>
        <div className="p-6 pt-0 flex flex-col gap-4">
          <button
            onClick={hanldeAddCart}
            className=" border text-xl  hover:border-red-600 px-6 py-3 rounded-lg bg-red-600 hover:bg-transparent text-white hover:text-red-600 duration-300"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
