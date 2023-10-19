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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../pages/Error/Error";

const MyRouters = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/products')
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
        element: <PrivateRoute> <AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/updateproduct/${params.id}`),
      },
      {
        path: "/brandproducts/:brand",
        element: <BrandProducts></BrandProducts>,
      },

      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/productdetails/${params.id}`),
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("http://localhost:5001/cart"),
      },
    ],
  },
]);
export default MyRouters;
