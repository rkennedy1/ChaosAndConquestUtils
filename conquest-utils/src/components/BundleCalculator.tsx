// BundleCalculator.tsx
import { useCallback, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Calculator from "./Calculator";
import speedupIntervals from "../data/speedupIntervals.json";

function BundleCalculator() {
  const [total, setTotal] = useState(0);

  const calculateTotal = useCallback((values: number[]) => {
    const totalMinutes = values.reduce((total, value, index) => {
      return total + value * speedupIntervals[index].minutes;
    }, 0);
    setTotal(totalMinutes);
  }, []);

  return (
    <Box maxWidth="80vw" margin="auto">
      <Calculator
        intervals={speedupIntervals}
        calculateTotal={calculateTotal}
      />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6} md={3}>
          <Typography variant="h5" align="center">
            Total Time
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            variant="body1"
            align="center"
          >{`Minutes: ${total}`}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1" align="center">{`Hours: ${
            total / 60
          }`}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1" align="center">{`Days: ${
            total / 60 / 24
          }`}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BundleCalculator;
