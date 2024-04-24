// BundleCalculator.tsx
import { useCallback, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Calculator from "./Calculator";
import speedupIntervals from "../../data/speedupIntervals.json";

function BundleCalculator() {
  const [total, setTotal] = useState(0);

  const calculateTotal = useCallback((values: number[]) => {
    const totalMinutes = values.reduce((total, value, index) => {
      return total + value * speedupIntervals[index].minutes;
    }, 0);
    setTotal(totalMinutes);
  }, []);

  return (
    <Box maxWidth="80vw" margin="auto" id="bundleCalculator">
      <Calculator
        intervals={speedupIntervals}
        calculateTotal={calculateTotal}
        onClear={() => setTotal(0)}
      />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6} md={3}>
          <Typography variant="h5" align="center" id="totalTime">
            Total Time
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            variant="body1"
            align="center"
            id="totalMinutes"
          >{`Minutes: ${total}`}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1" align="center" id="totalHours">{`Hours: ${
            total % 60 == 0 ? total / 60 : (total / 60).toFixed(2)
          }`}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1" align="center" id="totalDays">{`Days: ${
            total % (60 * 24) == 0
              ? total / 60 / 24
              : (total / 60 / 24).toFixed(2)
          }`}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BundleCalculator;
