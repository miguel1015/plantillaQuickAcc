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
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="character-modal-title"
      aria-describedby="character-modal-description"
    >
      <Box
        className={classes.modal}
        sx={{
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
          maxWidth: 800,
          width: { xs: "90%", sm: "70%" },
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {character && (
            <img
              src={character.image}
              alt={character.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            {character?.name || "Unknown"}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Species:</strong> {character?.species || "N/A"}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Status:</strong> {character?.status || "N/A"}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            <strong>Gender:</strong> {character?.gender || "N/A"}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
            sx={{
              width: "100%",
              marginTop: 2,
              borderRadius: 2,
              padding: 1.5,
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
