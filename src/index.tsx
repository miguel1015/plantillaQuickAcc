import "./index.css";
import React from "react";
import theme from "./theme";
import { router } from "./router";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
