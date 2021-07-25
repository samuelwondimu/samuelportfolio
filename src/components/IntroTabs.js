import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    width: theme.spacing(100),
  },
}));

export default function IntroTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        centered
      >
        <Tab value="one" label="PROJECTS" wrapped {...a11yProps("one")} />
        <Tab value="two" label="WORK EXPERIENCE" {...a11yProps("two")} />
        <Tab
          value="three"
          label="CURRENTLY WORKING ON"
          {...a11yProps("three")}
        />
        <Tab value="four" label="Download Resume" {...a11yProps("four")} />
      </Tabs>
      <TabPanel value={value} index="one">
        Projects
      </TabPanel>
      <TabPanel value={value} index="two">
        <Box p={3} justifyContent="center" alignItems="center">
          <Typography align="center" variant="h6">
            JavaScript mentor for fresh man students
          </Typography>
          <Typography align="center">Sep/2018 - March/2020</Typography>
          <Box p={3} display="flex" justifyContent="center" alignItems="center">
            <Typography align="center" className={classes.text}>
              helping freshman students When they are stuck at any particular
              coding problem, help you decide what best suits your personality,
              knowledge, or interests; help at achieving their goals, by
              accelerate their learning. by a great source of new ideas,
              challenges, and motivation; help with prepare for coding
              interviews, through a set of appropriate challenges and advise on
              strategies for tackling the most difficult questions.
            </Typography>
          </Box>
          <Typography align="center" variant="h6">
            twof time trading plc - React.Js Developer
          </Typography>
          <Typography align="center">July/2021 - Present</Typography>
          <Box p={3} display="flex" justifyContent="center" alignItems="center">
            <Typography align="center" className={classes.text}>
              responsible for developing and implementing user interface
              components using React.js with Material-UI and workflows such as
              react-query, Flux, and Webpack. Also responsible for profiling and
              improving front-end performance and documenting our front-end
              codebase.
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index="three">
        current work
      </TabPanel>
      <TabPanel value={value} index="four">
        Download Resume
      </TabPanel>
    </div>
  );
}
