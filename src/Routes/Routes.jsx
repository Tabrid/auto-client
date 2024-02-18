import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Live from "../Pages/Live/Live";
import Contact from "../Pages/Contact/Contact";
import Intro from "../Pages/Intro/Intro";
import Feature from "../Pages/Feature/Feature";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoutes";
import AllUser from "../Pages/AllUser/AllUser";
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/live",
          element:<PrivateRoute><Live/></PrivateRoute>,
        },
        {
          path: "/contact",
          element:<Contact/>,
        }
        ,
        {
          path: "/intro",
          element:<Intro/>,
        }
        ,
        {
          path: "/feature",
          element:<Feature/>,
        }
        ,
        {
          path: "/login",
          element:<Login/>,
        }
        ,
        {
          path: "/signup",
          element:<Signup/>,
        }
        ,
        {
          path: "/alluser",
          element:<AllUser/>,
        }
      ],
    }
  ]);
  