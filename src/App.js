import React from "react";
import { Drawer, Button,ListItem,ListItemIcon,ListItemText,Divider } from "@material-ui/core";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";

const App = () => {
  const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
    });
  const [status, setStatus] = React.useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      
      <Drawer open={status} anchor="right" variant="persistent" style={{width:"200px"}}>
        <FacebookIcon style={{width:"400px"}}/>
        <Divider/>
        <Button variant="contained" color="secondary" onClick={e => setStatus(!status)}>Close Drawer</Button>
        <Divider />
        <ListItem button>
            <ListItemIcon>{<FacebookIcon/>}</ListItemIcon>
            <ListItemText color="primary">Hello World</ListItemText>
        </ListItem>
      </Drawer>
      <Button variant="outlined" color="primary" onClick={(e) => setStatus(!status)}>Open Drawer</Button>
    </div>
    </ThemeProvider>
  );
};

export default App;
