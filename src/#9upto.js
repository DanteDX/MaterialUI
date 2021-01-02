import React from "react";
import { Button, Paper, Typography,Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const App = () => {
  const [status,setStatus] = React.useState(false); 
  const theme = createMuiTheme({
    palette: {
      type: status ? "dark" : "light"
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <Switch check={status} onClick={e => setStatus(!status)} color="primary"/>
        <Paper elevation="20" style={{height:"30vh",width:"30vh",padding:"1%"}}>
          <Typography variant="body2" display="inline">
            Just Practicing Material UI
          </Typography>
          <br />
          <Button variant="contained" color="primary" size="small">
            Click Me!
          </Button>
          <br/>
          <Typography variant="body2" display="inline">
            Just Practicing Material UI
          </Typography>
          <br />
          <Button variant="outlined" color="secondary" size="small">
            Click Me!
          </Button>
        </Paper>
    </ThemeProvider>
  );
};
export default App;
