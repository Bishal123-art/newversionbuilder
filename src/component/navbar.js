import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Logo from "../logo.jpg";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "green",
      borderBottom: "1px solid green",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
    >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={Logo} style={{ width: "103px", height: "103px" }} />
        </Typography>
        <Typography variant="h4" className={classes.logo}>
          <h5 style={{ float: "right", color: "#039d64", fontSize: "18px" }}>
            New version builder
          </h5>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
