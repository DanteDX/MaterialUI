import React from 'react';
import {Typography,Button} from "@material-ui/core";
import useStyles from "./CustomStyles";
import theme from "./MuiTheme";
import {ThemeProvider} from "@material-ui/core/styles";
const App = () =>{
  const classes = useStyles();
  return(
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Typography className={classes.typoStyles} display="inline-block" color="error">Click Here to open new account</Typography>
        <Button className={classes.buttonStyles} variant="contained" color="primary" size="large">Sign Up</Button>
        <br/>
        <Typography variant="h5" className={classes.typoStyles} display="inline-block" color="textPrimary">Click Here to log in if you already have an account</Typography>
        <Button className={classes.buttonStyles} variant="contained" color="secondary" size="small" href="http://www.google.com/">Log In</Button>
      </React.Fragment>
    </ThemeProvider>
    
  )
}

export default App;
