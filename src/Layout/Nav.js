import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Drawer,
  Divider,
  List,
  makeStyles,
  Avatar,
  Grid,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import SearchIcon from "@material-ui/icons/Search";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EqualizerIcon from "@material-ui/icons/Equalizer";

//This is for Themeing Purpose
const useStyles = makeStyles({
  drawer: {
    width: "10vw",
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerPaper: {
    width: "9vw",
    padding: "0.5rem",
  },
  ListItems: {
    padding: "1rem",
    justifyItems: "center",
    alignItems: "center",
  },
});

export default function Nav() {
  //This is for the infividual theming
  const classes = useStyles();
  //pulling out history.push to direct react router to load that page
  const history = useHistory();
  //This is an array of text, icons, and path (Routes) that will work like a navbar
  const itemsList = [
    {
      text: "Overiew",
      onClick: () => history.push("/"),
      icon: <VisibilityIcon />,
    },
    {
      text: "History",
      onClick: () => history.push("/History"),

      icon: <HistoryIcon />,
    },
    {
      text: "Invest",
      onClick: () => history.push("/Invest"),

      icon: <TimelineIcon />,
    },
    {
      text: "Market",
      onClick: () => history.push("/Market"),

      icon: <SearchIcon />,
    },
    {
      text: "Exchanges",
      onClick: () => history.push("/Exchanges"),

      icon: <AttachMoneyIcon />,
    },
    {
      text: "Save",
      onClick: () => history.push("/Save"),

      icon: <EqualizerIcon />,
    },
  ];
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      className={classes.drawer}>
      <div style={{ flexGrow: "0.98" }}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="UserName/Number"
              secondary="Some thing else"
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                className={classes.ListItems}
                button
                key={text}
                onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div>
        <h2>This is the end side</h2>
      </div>
    </Drawer>
  );
}
