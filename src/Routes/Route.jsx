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


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'myboard',
          element: <Myboard></Myboard>
        }
      ]
    }
  ]);

