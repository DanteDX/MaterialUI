// This is about Grid basics in Material UI
import React from "react";
import {Grid,Paper,Switch,Button} from "@material-ui/core";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
const App = () => {
  const [status,setStatus] = React.useState(false);
  const darkTheme = createMuiTheme({
    palette:{
      type: status ? "dark" : "light"
    }
  });
  const details = [
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123},
    {name:"Shadman",profession:"Web developer", age:27, id:123}
  ];
  const detailsList = details.map(eachObject =>(
    <Grid item xs={1} key={Math.random()}>
      <Paper elevation={10} style={{padding:"4px",paddingLeft:"8px"}}>
        <h4>{eachObject.name}</h4>
        <p>Profession is {eachObject.profession}</p>
        <p>Age is {eachObject.age}</p>
        <p>Id is {eachObject.id}</p>
        <Button color="secondary" variant="outlined" onClick={e => alert(eachObject.age) }>Click Me!</Button>
      </Paper>
    </Grid>
  ))
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
      <Switch checked={status} onClick={e =>  setStatus(!status)} color="secondary"/>
      <Grid container spacing={1} justify="center">
        {detailsList}
      </Grid>
    </div>
    </ThemeProvider>
    
  );
};
export default App;
