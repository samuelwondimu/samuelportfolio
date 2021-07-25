import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", color: "#333" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight={500} className={classes.title}>
            SAMUEL WONDIMU
          </Typography>
          <Button color="inherit" startIcon={<LinkedInIcon />}>
            LINKEDIN
          </Button>
          <Button color="inherit" startIcon={<GitHubIcon />}>
            GITHUB
          </Button>
          <Button color="inherit" startIcon={<TwitterIcon />}>
            TWITTER
          </Button>
          <Button color="inherit" startIcon={<InstagramIcon />}>
            INSTAGRAM
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
