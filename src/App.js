//Importing the required packages
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import {
  Paper,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Nav from "./Layout/Nav";
import View from "./Layout/View";

//This is for Themeing Purpose
const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const LightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  //Bring ing in the theme from the useStyles outside the function
  const classes = useStyles();
  //Createing the state where the style can be changed on click
  const [dark, setDark] = useState(false);
  //Note a a universal button needs to be passed so that the dark theme can be interchanged

  return (
    <ThemeProvider theme={dark ? darkTheme : LightTheme}>
      <Paper className={classes.root}>
        <Router>
          <Nav />
          <View />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
