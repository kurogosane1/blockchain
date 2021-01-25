import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Chip,
  Paper,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CropFreeIcon from "@material-ui/icons/CropFree";

//for themeing the component
const useStyles = makeStyles({
  mainGrid: {
    padding: "1rem",
    width: "100%",
    marginTop: "1rem",
  },
  addFunds: {
    width: "60%",
    height: "80%",
    border: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  secondContainer: {
    height: "50%",
    marginTop: "2rem",
  },
  addFunds_Typogrophy: {
    textAlign: "center",
  },
});

export default function Main() {
  //This is where the themeing from the top will be brought in
  const classes = useStyles();

  //This is the amount that will show you have in your wallet
  const [wallet, setWallet] = useState(0);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //When the page loads, then the wallet amount will be checked
  useEffect(() => {}, [wallet]);

  return (
    <div className={classes.mainGrid}>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="flex-start">
        <Grid item sm={8} xs={8}>
          <Container>
            <Typography variant="h3">{formatter.format(wallet)}</Typography>
          </Container>
        </Grid>

        <Grid item sm={4} xs={4}>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            <Chip
              color="primary"
              label="Buy Crypto"
              icon={<AddIcon />}
              onClick={() => console.log("we will do something")}
            />
            <Chip
              color="primary"
              label="QR code"
              icon={<CropFreeIcon />}
              onClick={() => console.log("we will do something")}
            />
          </Container>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.secondContainer}>
        {/* This is where the wallet is going to show */}
        <Paper elevation={3} variant="outlined" className={classes.addFunds}>
          <Typography variant="h5" className={classes.addFunds_Typogrophy}>
            Your Wallet is empty
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            style={{
              backgroundColor: "rgb(189, 17, 17)",
              color: "white",
              margin: "1rem",
              width: "50%",
            }}>
            Add funds
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
