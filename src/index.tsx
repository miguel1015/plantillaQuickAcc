import "./index.css";
import React from "react";
import theme from "./theme";
import { router } from "./router";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ContextProvider } from "./adapter/userContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        {/* <ContextProvider> */}
        <RouterProvider router={router} />
        {/* </ContextProvider> */}
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
