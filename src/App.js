//Importing the required packages
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [darkMode, setDark] = useState(false);

  //createing the theme
  const preferTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      transitions: {
        easing: {
          easeIn: "1s",
        },
      },
    },
    transitions: {
      easing: "easeOut",
    },
  });

  //This will check the changes in dark state

  useEffect(() => {}, []);

  //Note a a universal button needs to be passed so that the dark theme can be interchanged

  return (
    <ThemeProvider theme={preferTheme}>
      <Paper className={classes.root}>
        <Router>
          <Nav dark={darkMode} setDark={setDark} />
          <View />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
