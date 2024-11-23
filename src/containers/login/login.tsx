import * as z from "zod";
import { useForm } from "react-hook-form";
import InputAdapter from "../../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
// import { useFetchLogin } from "../../hooks/login/loginHook";

const Login = () => {
  // const { data } = useFetchLogin();

  const schema = z.object({
    email: z.string().min(1, { message: "Campo requerido" }),
    password: z.string().min(1, { message: "Campo requerido" }),
  });

  /**
   * UseForm
   */
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // console.log("🔥🔥🔥", data);

  const handleForm = () => {
    console.log(getValues());
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            flex: 1,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Registration Form
          </Typography>
          <InputAdapter
            id="email"
            type="text"
            name="email"
            label="email"
            error={errors?.email}
            schema={schema?.shape?.email}
            control={control}
          />
          <InputAdapter
            id="password"
            type="password"
            name="password"
            label="password"
            error={errors?.password}
            schema={schema?.shape?.password}
            control={control}
          />

          <Button
            fullWidth
            sx={{
              marginTop: "16px",
              backgroundColor: "#d44134",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#b83228",
              },
            }}
            onClick={handleSubmit(handleForm)}
          >
            Register Now
          </Button>
        </Box>
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            backgroundImage:
              "url('https://wwwmpa.mpa-garching.mpg.de/aquarius/cr/CR_LCDM_dump40_400_170000_12000_100_blue.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
