import { CircularProgress } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MyContextProps {
  accessValidate?: boolean;
}

export const MyContext = createContext<MyContextProps>({});

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate(); // Ahora está disponible gracias a <RouterProvider>

  const [accessValidate, setAccessValidate] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessValidate(true);
    } else {
      setAccessValidate(false);
      navigate("/login");
    }
  }, [navigate]);

  if (accessValidate === undefined) {
    return <CircularProgress />;
  }

  return (
    <MyContext.Provider value={{ accessValidate }}>
      {children}
    </MyContext.Provider>
  );
};

export { ContextProvider };
