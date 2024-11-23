import { TInputAdapter } from "./types";
import { ChangeEvent, FC } from "react";
import { useController } from "react-hook-form";
import { Box, TextField } from "@mui/material";

const InputAdapter: FC<TInputAdapter> = ({
  type,
  label,
  name,
  id,
  control,
  disabled,
  schema,
  error,
  onBlur,
  customOnChange,
  labelColor,
  inputIcon,
  ...rest
}) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: { validate: async (val) => schema.validateSync(val) },
    defaultValue: [
      "text",
      "password",
      "date",
      "email",
      "textarea",
      "time",
    ].includes(type)
      ? ""
      : null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const normalizedEvent = {
      ...e,
      target: {
        ...e.target,
        value: e.target.value.replaceAll(".", ""),
      },
    };
    onChange(normalizedEvent);
    customOnChange?.(normalizedEvent);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        {...rest}
        name={name}
        disabled={disabled}
        id={id}
        type={["number", "float"].includes(type) ? "text" : type}
        inputRef={ref}
        size="small"
        fullWidth
        label={label}
        onChange={handleChange}
        value={value}
        error={!!error}
        helperText={disabled ? "" : error?.message || ""}
        aria-invalid={!!error}
        aria-describedby={error?.message ? `${id}-error` : undefined}
        sx={{
          "& .Mui-focused": {
            borderColor: "#6bdbc2",
            border: "0px solid",
            outline: 0,
            // boxShadow: !error
            //    "0 0 0 0.2rem rgb(1 104 250 / 20%)"
            //   : "0 0 0 0.2rem rgb(220 53 69 / 25%)",
          },
          "& .MuiFormHelperText-root": {
            marginLeft: "0px",
            boxShadow: "none",
            border: "none",
          },
          "& .MuiInputBase-input-MuiOutlinedInput-input": {
            borderRadius: "5px",
          },
          borderRadius: "5px",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            fontFamily: "Poppins",
          },
        }}
      />
    </Box>
  );
};

export default InputAdapter;
