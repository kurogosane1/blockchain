import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import SearchIcon from "@material-ui/icons/Search";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";

//This is for Themeing Purpose
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "20%",
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerPaper: {
    width: "auto",
    padding: "0.5rem",
    border: "none",
    boxShadow: "7px 0px 31px 0px rgba(0,0,0,0.05)",
  },
  ListItems: {
    padding: "1rem",
    justifyItems: "center",
    alignItems: "center",
  },
  sideBarGap: {
    flexGrow: "1",
  },
  buttomNav: {
    display: "flex",
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  AppBar: {
    background: "none",
    boxShadow: "none",
    width: `calc(100% - auto)`,
  },
}));

export default function Nav({ dark, setDark }) {
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
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}>
        <div className={classes.sideBarGap}>
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
          <List>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => setDark(!dark)}>
              <ListItemIcon>
                {dark ? <Brightness5Icon /> : <NightsStayIcon />}
              </ListItemIcon>
              <ListItemText primary={dark ? "Light Mode" : "Dark Mode"} />
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
          <List>
            <ListItem button onClick={() => history.push("/Help")}>
              <ListItemText primary="Help Center" />
            </ListItem>
            <ListItem button onClick={() => history.push("/Settings")}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Talk to Us" />
            </ListItem>
          </List>
        </div>
        <div>
          <List className={classes.buttomNav}>
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon fontSize="large" />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon fontSize="large" />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon fontSize="large" />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
