import React from "react";
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFetchCharacters } from "../../hooks/useRick";
import { useStyles } from "./styled";
import NavNavigation from "./buttonNavigation";

const RickC: React.FC = () => {
  const classes = useStyles();

  const { data, isLoading, error } = useFetchCharacters();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading characters</Typography>;

  return (
    <Box className={classes.root}>
      <NavNavigation />
      <Grid container spacing={3}>
        {data?.results.map((character) => (
          <Grid size={2} key={character.id}>
            <Card elevation={3} className={classes.card}>
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                className={classes.media}
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.species}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addToCart}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RickC;
