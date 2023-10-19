import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const MyCartCard = ({ product, cartProducts, setAllProducts }) => {
  const { _id, photo, brand, name, type, price } = product;
  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const newProducts = cartProducts.filter((item) => item._id !== _id);
            setAllProducts(newProducts);
            if (data.deletedCount === 1) {
              toast.success("Successfully deleted", {
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
      }
    });
  };
  return (
    <div>
      <div className="relative border bg-white flex flex-col shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 p-6 overflow-hidden rounded-xl bg-clip-border">
          <img src={photo} className=" w-[250px] h-[200px] block mx-auto " />
        </div>
        <div className="p-6 ">
          <div className="flex items-center justify-between mb-2">
            <p className="block   text-xl antialiased font-medium leading-relaxed text-blue-red-900">
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
        </div>
        <div className="p-6 pt-0 flex flex-col gap-4">
          <button
            onClick={handleRemove}
            className=" border border-[tomato] px-6 py-2 w-full rounded-lg hover:bg-[tomato] hover:text-white text-[tomato] duration-300"
            type="button"
          >
            Remove
          </button>
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
  cartProducts: PropTypes.array,
  setAllProducts: PropTypes.func,
};

export default MyCartCard;
