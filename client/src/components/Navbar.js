import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// 



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AppNavbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allTabs = ['/', '/about', '/donate', '/contactus', '/blog', '/memories'];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)}  value="/" component={Link} to={allTabs[0]} />
          <Tab label="About" {...a11yProps(1)}  value="/about" component={Link} to={allTabs[1]} />
          <Tab label="Donate" {...a11yProps(2)}  value="/donate" component={Link} to={allTabs[2]} />
          <Tab label="Contact Us" {...a11yProps(3)}  value="/contactus" component={Link} to={allTabs[3]} />
          <Tab label="Blog" {...a11yProps(4)}  value="/blog" component={Link} to={allTabs[4]}  />
          <Tab label="Memories" {...a11yProps(5)}  value="/memories" component={Link} to={allTabs[5]}  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        About
      </TabPanel>
      <TabPanel value={value} index={2}>
        Donate
      </TabPanel>
      <TabPanel value={value} index={3}>
        Contact Us
      </TabPanel>
      <TabPanel value={value} index={4}>
        Blog
      </TabPanel>
      <TabPanel value={value} index={5}>
        Memories
      </TabPanel>
    </div>
  );
}


// 
