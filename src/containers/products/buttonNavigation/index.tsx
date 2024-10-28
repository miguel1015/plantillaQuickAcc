import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useStyles } from "./styled";
import { GetAllProducts } from "../../../hooks/products/productHook";

const NavNavigation = () => {
  const classes = useStyles();

  const { data /* isLoading, error */ } = GetAllProducts();

  console.log("✅✅✅", data);

  const [value, setValue] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={handleChange}
      sx={{ width: "100%" }}
    >
      {data?.map((x) => (
        <BottomNavigationAction
          key={x?.idProducts}
          label={x?.name}
          value={x?.name}
          icon={<RestoreIcon />}
          sx={{ color: "#000" }}
        />
      ))}
    </BottomNavigation>
  );
};

export default NavNavigation;
