import { makeStyles } from "@material-ui/styles";
import theme from "../../../theme";

export const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px",
    marginBottom: "10px",
  },
  title: {
    marginBottom: "20px",
    color: theme.palette.text.primary,
    fontSize: "24px",
    fontWeight: 600,
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  media: {
    height: 150,
    objectFit: "cover",
  },
  content: {
    padding: "16px",
    textAlign: "center",
  },
  addToCart: {
    marginTop: "8px",
    backgroundColor: "#d44134",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#c13124",
    },
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
});
