import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home";
import AddProducts from "../pages/addProducts/AddProducts";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductsDetails from "../pages/ProductDetails/ProductsDetails";

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
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Home></Home>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/brandproducts/:brand",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/productdetails/:id",
        element: <ProductsDetails></ProductsDetails>,
        loader: ({params}) =>
          fetch(
            `http://localhost:5001/productdetails/${params.id}`
          ),
      },
    ],
  },
]);
export default MyRouters;
