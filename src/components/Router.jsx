import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../components/Profile";
import ErrorElement from "../components/ErrorElement"
import React from "react";
import App from "../App";

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorElement />
        },
        {
          path: "profile/:name",
          element: <Profile />,
        },
        {
          path: 'profile',
          element: <Profile/>
        }
      ]);

      return  <RouterProvider router={router} />
} 

export default Router

