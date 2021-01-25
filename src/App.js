//Importing the required packages
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import {
  Paper,
  makeStyles,
  
} from "@material-ui/core";
import Nav from "./Layout/Nav";

//This is for Themeing Purpose
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function App() {
  //Bring ing in the theme from the useStyles outside the function
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Router>
        <Nav />
      </Router>
    </Paper>
  );
}

export default App;
