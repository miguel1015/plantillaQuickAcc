import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Login = () => {
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
        {/* Form Section */}
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
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ marginTop: "16px" }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginTop: "16px" }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{ marginTop: "16px" }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the Terms of Use & Privacy Policy."
            sx={{ marginTop: "16px" }}
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
