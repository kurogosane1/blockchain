//Importing the required packages
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import Nav from "./Layout/Nav";
import View from "./Layout/View";

//This is for Themeing Purpose
const useStyles = makeStyles({
  root: {
    display: "flex",
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

        <View />
      </Router>
    </Paper>
  );
}

export default App;
