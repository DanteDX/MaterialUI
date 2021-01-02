// This is about Table and DataGrid
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});


const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });
  const classes = useStyles();
  const rows = [
    {
      id:1,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    },
    {
        id:2,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    },
    {
        id:3,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    },
    {
        id:4,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    },
    {
        id:10,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    },
    {
        id:7,
      fullName: "Shadman Martin Piyal",
      profession: "Web Developer",
      school: "Gregory",
      university: "None"
    }
  ];
  const detailsList = rows.map((eachInfo) => (
    <TableRow key={Math.random()}>
      <TableCell>{eachInfo.fullName}</TableCell>
      <TableCell>{eachInfo.profession}</TableCell>
      <TableCell>{eachInfo.school}</TableCell>
      <TableCell>{eachInfo.university}</TableCell>
    </TableRow>
  ));

  // following data is for DataGrid
  const columns = [
      {field:"id",headerName:"ID",width:200},
      {field:"fullName",headerName:'Full Name',width:200},
      {field:"profession",headerName:"Profession",width:200},
      {field:"school",headerName:"School Name",width:200},
      {field:"university",headerName:"University Name",width:200}
  ];
  return (
    <div>
        <div>
        <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Profession</TableCell>
                        <TableCell>School Name</TableCell>
                        <TableCell>University Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {detailsList}
                </TableBody>
                </Table>
        </TableContainer>
    </ThemeProvider>
        </div>
        <br/><br/>
        <div style={{ display: 'flex', height: '400px'}}>
            <DataGrid  rows={rows} columns={columns} pageSize={4} checkboxSelection/>
        </div>
    </div>
    
    
  )}

export default App;
