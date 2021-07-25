import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SamPic from "../assets/samuel.jpg";

const useStyles = makeStyles((theme) => ({
  profilepicture: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  bio: {
    width: theme.spacing(100),
  },
}));

export default function IntroPage() {
  const classes = useStyles();
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="40vh"
      >
        <Avatar
          alt="samuel wondimu"
          src={SamPic}
          className={classes.profilepicture}
        />
      </Box>
      <Typography align="center" variant="h4">
        HI 👋🏿 I'M SAMUEL
      </Typography>
      <Box p={3}>
        <Typography align="center" variant="h6">
          FRONT-END DEVELOPER
        </Typography>
        <Box p={3} display="flex" justifyContent="center" alignItems="center">
          <Typography align="center" className={classes.bio}>
            I'm a recent Bachelor in Computer Science graduate i Have worked
            with Front end library such us Reactjs , material ui, bootstrap and
            backend with nodejs epressjs mongo db . currentyl i am learning
            about how typescript can save us time debugging our code.{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
