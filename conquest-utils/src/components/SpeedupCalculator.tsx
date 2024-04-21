//TroopCalculator.tsx
import { useCallback, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Calculator from "./Calculator";
import speedupIntervals from "../data/speedupIntervals.json";

const interval = [
  { label: "Days", minutes: 1440 },
  { label: "Hours", minutes: 60 },
  { label: "Minutes", minutes: 1 },
];

function SpeedupCalculator() {
  const [total, setTotal] = useState(0);
  const [totals, setTotals] = useState<number[]>([]);

  const calculateTotal = useCallback((values: number[]) => {
    let newTotal = 0;
    values.map((value, index) => {
      newTotal += value * interval[index].minutes;
    });
    calculateSpeedupAmounts(newTotal);
    setTotal(newTotal);
  }, []);

  const calculateSpeedupAmounts = useCallback((newTotal: number) => {
    const amounts: number[] = [];
    let remainingTotal = newTotal;

    // Iterate through the speed intervals in reverse order
    for (let i = 0; i < speedupIntervals.length; i++) {
      const speedMinutes = speedupIntervals[i].minutes;

      // Calculate the amount of this speed up to use
      const amount = Math.floor(remainingTotal / speedMinutes);
      amounts.push(amount);
      console.log(amount);

      // Update the remaining total
      remainingTotal -= amount * speedMinutes;
    }

    setTotals(amounts);
  }, []);

  return (
    <Box maxWidth="80vw" margin="auto">
      <Calculator intervals={interval} calculateTotal={calculateTotal} />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6} md={3}>
          <Typography variant="h5" align="center">
            Total hours: {total}
          </Typography>
        </Grid>
        {totals.map((total, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Typography
              variant="body1"
              align="center"
            >{`${speedupIntervals[index].label}: ${total}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SpeedupCalculator;

/*

*/
