import React from 'react';
import {Button} from "@material-ui/core";
const App = () =>{
  return(
    <div>
      <Button variant="contained" color="primary" disableElevation={true}>primary contained  variant</Button>
      <Button variant="contained" color="secondary" disableFocusRipple={true}>secondary contained  variant</Button>
      <Button variant="outlined" color="secondary">secondary outlined variant</Button>
      <Button variant="outlined" color="primary" disabled={true}>primary outlined variant</Button>
    </div>
  )
}

export default App;
