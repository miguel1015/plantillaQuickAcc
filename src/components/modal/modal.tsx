import { Box, Fade, Modal, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { TModal } from "./types";

const ModalComponent: FC<TModal> = ({
  state = false,
  title = "",
  children,
  width,
  height,
  overflow,
  padding,
  Border,
  borderRadius,
  handleCloseModal,
}) => {
  const [open, setOpen] = useState(state);

  const hide = useCallback(() => {
    if (open && state) handleCloseModal(false);
  }, [handleCloseModal, open, state]);

  useEffect(() => {
    setOpen(state);
  }, [state]);

  const style = {
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: width || 400,
      height: height || 400,
      bgcolor: "background.paper",
      border: Border || "none",
      borderRadius: borderRadius || "5px",
      boxShadow: 24,
      p: padding || 2,
    },
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={hide}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style.modal}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Box sx={{ overflow, height: "100%", width: "100%" }}>
              {children}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
