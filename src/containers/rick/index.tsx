import React from "react";
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFetchCharacters } from "../../hooks/useRick";

const RickC: React.FC = () => {
  const { data, isLoading, error } = useFetchCharacters();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading characters</Typography>;

  console.log("⭐⭐", data?.results);

  return (
    <Grid container spacing={2} sx={{ padding: "50px" }}>
      {data?.results.map((character) => (
        <Grid size={2} key={character.id}>
          <Card
            elevation={3}
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={character.image}
              alt={character.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.species}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RickC;
