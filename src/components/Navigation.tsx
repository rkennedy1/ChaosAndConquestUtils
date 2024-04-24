import { SyntheticEvent, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";
import BundleCalculator from "./Calculators/BundleCalculator";
import TroopCalculator from "./Calculators/TroopCalculator";
import SpeedupCalculator from "./Calculators/SpeedupCalculator";

function Navigation() {
  const [value, setValue] = useState(0);

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
          scrollButtons="auto"
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

export default Navigation;
