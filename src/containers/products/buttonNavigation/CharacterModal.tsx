import React from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { useStyles } from "./styled";

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  isOpen,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={classes.modal}>
        {character && (
          <div>
            <Typography variant="h5">{character.name}</Typography>
            <img
              src={character.image}
              alt={character.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <Typography>Species: {character.species}</Typography>
            <Typography>Status: {character.status}</Typography>
            <Typography>Gender: {character.gender}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={onClose}
              style={{ marginTop: "10px" }}
            >
              Close
            </Button>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default CharacterModal;
