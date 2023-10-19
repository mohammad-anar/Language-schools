import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home";
import AddProducts from "../pages/addProducts/AddProducts";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductsDetails from "../pages/ProductDetails/ProductsDetails";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const MyRouters = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path: "/addproduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/updateproduct/${params.id}`),
      },
      {
        path: "/brandproducts/:brand",
        element: <BrandProducts></BrandProducts>,
      },

      {
        path: "/productdetails/:id",
        element: <ProductsDetails></ProductsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/productdetails/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5001/cart"),
      },
    ],
  },
]);
export default MyRouters;
