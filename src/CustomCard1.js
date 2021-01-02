// this will create cards and use it with grid
import React from "react";
import CustomCard from "./CustomCard";
import {Grid, Switch} from "@material-ui/core";

import {ThemeProvider, createMuiTheme} from "@material-ui/core";

const App = () =>{

  const [themeStatus, setThemeStatus] = React.useState(false);
  const darkOrLight = createMuiTheme({
    palette:{
      type:themeStatus ? "light" : "dark"
    }
  });
  
  return(
    <ThemeProvider theme={darkOrLight}>
    <Switch checked={themeStatus} onClick={e => setThemeStatus(!themeStatus)}/>
    <div>
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  )
}

export default App;