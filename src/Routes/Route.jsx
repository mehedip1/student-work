import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Class from "../Pages/Class/Class";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import MyClass from "../Pages/MyClass/MyClass";
import Dashboard from "../Layout/Dashboard";
import Myboard from "../Pages/Dashboard/Myboard/Myboard";
import Payment from "../Pages/payment/Payment";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import InstructorPage from "../Pages/Detalies/instructorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'class',
          element: <PrivateRoute> <Class></Class></PrivateRoute>
        },
        {
          path:'blog',
          element: <Blog></Blog>
        },
        {
          path:'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'instructor',
          element: <InstructorPage></InstructorPage>
        },
      
       
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'myboard',
          element: <Myboard></Myboard>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        }
      ]
    }
  ]);

