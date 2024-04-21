// App.js
import React, { SyntheticEvent } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import BundleCalculator from "./components/BundleCalculator";

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
          {/* Add more tabs as needed */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BundleCalculator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Add your troop calculator code here */}
      </TabPanel>
      {/* Add more TabPanels for additional tabs */}
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
