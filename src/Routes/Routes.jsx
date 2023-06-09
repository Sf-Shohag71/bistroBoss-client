import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Deshboard from "../Layout/Deshboard/Deshboard";
import MyCart from "../Pages/Deshboard/MyCart/MyCart";
import AllUsers from "../Pages/Deshboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
    ]
  },
  {
    path: "/deshboard",
    element: <PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
    ]
  },
]);
