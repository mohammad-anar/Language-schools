import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home";
import AddProducts from "../pages/addProducts/AddProducts";

const MyRouters = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Home></Home>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
        ]
    }
])
export default MyRouters;