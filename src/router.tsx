import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./containers/products/index")),
  },
  {
    path: "/login",
    Component: lazy(() => import("./containers/login/login")),
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        Component: lazy(() => import("./pages/home/index")),
      },
    ],
  },
]);
