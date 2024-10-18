import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("../src/containers/rick/index")),
  },
  {
    path: "/home",
    Component: lazy(() => import("../src/pages/home/index")),
  },
]);
