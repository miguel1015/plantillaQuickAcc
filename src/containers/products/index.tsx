import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  Button,
  Box,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFetchCharacters } from "../../hooks/useRick";
import { useStyles } from "./styled";
import NavNavigation from "./buttonNavigation";
import InfoIcon from "@mui/icons-material/Info";
import CharacterModal from "./buttonNavigation/CharacterModal";

const RickC: React.FC = () => {
  const classes = useStyles();

  const { data, isLoading, error } = useFetchCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading characters</Typography>;

  return (
    <Box className={classes.root}>
      <NavNavigation />
      <Grid container spacing={3}>
        {data?.results.map((character) => (
          <ImageListItem key={character?.id}>
            <img
              srcSet={character?.image}
              src={character?.image}
              alt={character?.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={character?.name}
              subtitle={character?.species}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${character?.name}`}
                >
                  <InfoIcon />
                  <Button onClick={() => handleOpenModal(character)}>
                    Ver más
                  </Button>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </Grid>
      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default RickC;
