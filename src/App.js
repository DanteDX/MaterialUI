import React from 'react';
import {Typography,Button,ButtonGroup} from "@material-ui/core";
import {FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";
import useStyles from "./CustomStyles";
import theme from "./MuiTheme";
import {ThemeProvider} from "@material-ui/core/styles";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
const App = () =>{
  const classes = useStyles();
  const [checkboxStatusOne,setCheckboxStatusOne] = React.useState(false);
  return(
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Typography className={classes.typoStyles} display="inline-block" color="error">Click Here to open new account</Typography>
        <Button className={classes.buttonStyles} variant="contained" color="primary" size="large">Sign Up</Button>
        <br/>
        <Typography variant="h5" className={classes.typoStyles} display="inline-block" color="textPrimary">Click Here to log in if you already have an account</Typography>
        <Button className={classes.buttonStyles} variant="contained" color="secondary" size="small" href="http://www.google.com/">Log In</Button>
        <Typography variant="h6">ButtonGroup Starts From here</Typography>
        <ButtonGroup orientation="vertical" color="secondary" variant="contained" size = "large">
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button>Third Button</Button>
        </ButtonGroup>
        <Typography variant="h6" color="secondary">Checkbox FormGroup FormControlLabel starts here </Typography>
        <FormGroup row={true}>
          <FormControlLabel
            label="First Label"
            control={<Checkbox icon={<FacebookIcon color="primary"/>} checkedIcon={<WhatsAppIcon/>} cheked={checkboxStatusOne} onChange={e => setCheckboxStatusOne(!checkboxStatusOne)} />}
            labelPlacement="end"
            />

            <FormControlLabel
            label="Second Label"
            control={<Checkbox icon={<FacebookIcon/>} checkedIcon={<WhatsAppIcon/>} cheked={checkboxStatusOne} onChange={e => setCheckboxStatusOne(!checkboxStatusOne)} />}
            labelPlacement="end"
            />

            <FormControlLabel
            label="Third Label"
            control={<Checkbox icon={<FacebookIcon/>} checkedIcon={<WhatsAppIcon/>} cheked={checkboxStatusOne} onChange={e => setCheckboxStatusOne(!checkboxStatusOne)} />}
            labelPlacement="end"
            />
        </FormGroup>
      </React.Fragment>
    </ThemeProvider>
    
  )
}

export default App;
