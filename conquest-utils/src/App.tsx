// App.js
import React, { SyntheticEvent } from "react";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import BundleCalculator from "./components/BundleCalculator";
import { GitHub } from "@mui/icons-material";
import TroopCalculator from "./components/TroopCalculator";
import SpeedupCalculator from "./components/SpeedupCalculator";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _e: SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bundle Calculator" />
          <Tab label="Troop Calculator" />
          <Tab label="Speedup Calculator" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BundleCalculator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TroopCalculator />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SpeedupCalculator />
      </TabPanel>
    </Box>
  );
}

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="space-between"
    >
      <Navigation />
      <IconButton
        aria-label="github repository"
        sx={{ marginBottom: "1rem" }}
        component="span"
        onClick={() =>
          window.open(
            "https://github.com/rkennedy1/ChaosAndConquestUtils",
            "_blank"
          )
        }
      >
        <GitHub />
      </IconButton>
    </Box>
  );
}

export default App;
