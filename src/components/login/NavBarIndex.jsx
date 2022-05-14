import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import styled from "@emotion/styled";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const active = {
  backgroundColor: "crimson",
  color: "white"
};

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3
};

const NavBarIndex = () => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(0);

  const handleOpen = (option) => {
    setForm(option);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#ff5722" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            MiPeli
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleOpen(1)}
            >
              Registrarse
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleOpen(2)}
            >
              Iniciar Sesion
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <>
          {form === 1 ? <FormRegister setOpen={setOpen} /> : null}
          {form === 2 ? <FormLogin setOpen={setOpen} /> : null}
        </>
      </StyledModal>
    </Box>
  );
};
export default NavBarIndex;
