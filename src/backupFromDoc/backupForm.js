import React from "react";
import {Switch, Button, FormControl, FormLabel, FormControlLabel, FormGroup, Checkbox, FormHelperText} from "@material-ui/core";

const App = () =>{
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(e);
    console.log(e.target.checkboxOne.checked);
  }

  const [status,setStatus] = React.useState(true);
  const handleChange = e =>{
    setStatus(!status);
    console.log(e.target.checked);
  }

  return(
    <div>
      <FormControl component="form" onSubmit={e => handleSubmit(e)}>
        <FormLabel>Your Skills</FormLabel>
          <FormGroup row={false}>
            <FormControlLabel 
              control={<Switch checked={status} name="checkboxOne" onChange={e => handleChange(e)} />}
              label="HTML"
            />
            <FormControlLabel 
              control={<Checkbox />}
              label="CSS"
            />
            <FormControlLabel 
              control={<Checkbox />}
              label="JavaScript"
            />
          </FormGroup>
          <FormHelperText>Be sure to provide correct information</FormHelperText>
          <FormGroup row={false}>
            <FormControlLabel 
              control={<Checkbox />}
              label="Docker"
            />
            <FormControlLabel 
              control={<Checkbox />}
              label="AWS EC2"
            />
            <FormControlLabel 
              control={<Checkbox />}
              label="IBM Cloud"
            />
          </FormGroup>
        <FormHelperText>Be sure to provide correct information</FormHelperText>
        <Button variant="outlined" color="secondary" component="button" type="submit">Submit</Button>
      </FormControl>
    </div>
  )
}

export default App;