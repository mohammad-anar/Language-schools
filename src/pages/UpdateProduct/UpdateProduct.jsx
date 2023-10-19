import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const { _id, photo, brand, name, type, price, rating, description } =
    loadedData;
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("add");

    const form = e.target;
    const photo = form.photo.value;
    const brand = form.brand.value.toLowerCase();
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.textarea.value;

    if (brand === "google") {
      return;
    }

    const product = {
      photo,
      brand,
      name,
      type,
      price,
      rating,
      description,
    };
    console.log(product);
    fetch(`https://assignment-10-server-puce-zeta.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
    <Helmet>
      <title>Ditigalstore-Update-Product</title>
    </Helmet>
      <div className="mx-auto text-center my-5 sm:w-[90%] p-8">
        <h3 className="text-4xl mb-5 font-bold">Update Product</h3>
        <p className="text-base text-gray-500 mb-12">
          You can update products by the folloing form. This is a update form
          which update a product on your database
        </p>
        <form onSubmit={handleAdd}>
          {/* group 0  */}
          <div className="md:flex items-center gap-5 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-bold">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                placeholder="Enter brand"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* group 1  */}
          <div className="md:flex items-center gap-5 w-full mt-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold">
                  Product Type
                </span>
              </label>
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Enter type"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* group 2  */}
          <div className="md:flex items-center gap-5 w-full md:mt-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter rating"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start md:mt-4">
            <label htmlFor="textarea" className="text-lg font-bold mb-2">
              Description
            </label>
            <textarea
              className="resize-none p-6 outline-none w-full"
              name="textarea"
              defaultValue={description}
              placeholder="Enter description"
              id="textarea"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="">
            <input
              type="submit"
              className="btn hover:border-[#130f40] hover:text-[#130f40] bg-[#130f40] text-white mt-4 w-full"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
