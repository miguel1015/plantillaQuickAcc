import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./containers/products/index")),
  },
  {
    path: "/home",
    Component: lazy(() => import("../src/pages/home/index")),
  },
]);
