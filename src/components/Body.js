import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "../components/Browse";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((state) => state.user);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Browse /> : <Login />,
    },
    {
      path: "/browse",
      element: user ? <Browse /> : <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
