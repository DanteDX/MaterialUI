import React from "react";
import { Button, IconButton, ButtonGroup } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const App = () => {
  return (
    <div>
      <ButtonGroup>
        <Button
          variant="contained"
          style={{color:'white',backgroundColor:'blue',opacity:'0.8'}}
          startIcon={<FacebookIcon />}
          endIcon={<WhatsAppIcon />}
          fullWidth
        >
          Log In Here
        </Button>
        <IconButton color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton style={{ color: "red" }}>
          <WhatsAppIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
};
export default App;
