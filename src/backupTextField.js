import React from 'react';
import {TextField, Button, MenuItem, FormControl, FormHelperText} from "@material-ui/core";


const App = () => {
  const options =[
    {name:"Martin"},{name:"Shadman"},{name:"piyal"}
  ];
  const [nameValue,setNameValue] = React.useState('');
  const handleChange = e =>{
    e.preventDefault();
    setNameValue(e.target.value);
  }
  return (
    <FormControl onSubmit={e =>{e.preventDefault();alert(e.target.firstName.value)}}>
      <TextField 
        required
        variant="outlined"
        label="First Name"
        type="text"
        helperText="Enter Your First Name"
        error={false}
        margin="dense"
        name="firstName"
      />
      <br/>
      <Button type="submit" variant="contained" color="secondary" size="small">Submit</Button>
      <br/>
      <TextField
        required
        select
        label="Name"
        helperText="Select one name from the Menu"
        value={nameValue}
        onChange={e => handleChange(e)}
       >
        {
          options.map(eachOption =>(
            <MenuItem key={Math.random()} value={eachOption.name}>
              {eachOption.name}
            </MenuItem>
          ))
        }
      </TextField>
      <br/>
      <Button variant="outlined" color="primary">This button does nothing</Button>
      <FormHelperText margin="dense">* means a required field</FormHelperText>
    </FormControl>
  )
}

export default App;
