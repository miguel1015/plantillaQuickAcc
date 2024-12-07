import * as z from "zod";
import { useForm } from "react-hook-form";
import InputAdapter from "../../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ResponseLogin } from "../../api/types/login/responseLogin";
import { usePostUser } from "../../api/queries/login/createLoginQueries";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const { mutate, isSuccess, isError, isLoading, data } = usePostUser();

  const schema = z.object({
    email: z.string().min(1, "Campo requerido"),
    password: z.string().min(1, "Campo requerido"),
  });

  /**
   * UseForm
   */
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<ResponseLogin>({
    resolver: zodResolver(schema),
  });

  const handleForm = () => {
    const formData = getValues();
    console.log("Enviando datos:", formData);

    // Llama a la función `login` con los valores del formulario
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Has iniciado sesión correctamente.");
      localStorage.setItem("vs1-tk", String(data?.token));
      console.log("🚩🚩🚩🚩", data?.token);
      navigate("/dashboard");
    } else if (isError) {
      toast.error("Usuario incorrecto.");
    }
  }, [isSuccess, isError, navigate, data]);

  console.log("🔥🔥🔥", isLoading);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          maxWidth: "800px",
          overflow: "hidden",
          flexDirection: "row",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
            Login
          </Typography>
          <InputAdapter
            id="text"
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
            disabled={isLoading}
            onClick={handleSubmit(handleForm)}
          >
            {isLoading ? <CircularProgress color="inherit" /> : "Register Now"}
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
