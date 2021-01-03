import React from "react";
import { Tabs, Tab, Paper, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Paper>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                orientation="vertical"
              >
                <Tab label="Facebook" icon={<FacebookIcon color="primary" />} />
                <Tab
                  label="WhatsApp"
                  icon={<WhatsAppIcon style={{ color: "green" }} />}
                />
                <Tab
                  label="Facebook"
                  icon={<FacebookIcon color="secondary" />}
                />
                <Tab
                  label="Facebook"
                  icon={<FacebookIcon color="secondary" />}
                />
                <Tab
                  label="Facebook"
                  icon={<FacebookIcon color="secondary" />}
                />
                <Tab
                  label="Facebook"
                  icon={<FacebookIcon color="secondary" />}
                />
              </Tabs>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            {value === 0 && <p>Zero was activated</p>}
            {value === 1 && <p>One was activated</p>}
            {value === 2 && <p>Zero was activated</p>}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
