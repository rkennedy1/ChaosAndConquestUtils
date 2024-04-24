//TroopCalculator.tsx
import { useCallback, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Calculator from "./Calculator";

const tierIntervals = [
  { label: "Tier 1", power: 4 },
  { label: "Tier 2", power: 10 },
  { label: "Tier 3", power: 25 },
  { label: "Tier 4", power: 60 },
  { label: "Tier 5", power: 150 },
];

function TroopCalculator() {
  const [total, setTotal] = useState(0);
  const [totals, setTotals] = useState<number[]>([]);

  const calculateTotalPerTier = (values: number[]) => {
    const newTotals = [];
    for (let i = 0; i < values.length; i++) {
      const newValue = values[i] * tierIntervals[i].power;
      if (newValue > 0) {
        newTotals.push(newValue);
      }
    }
    setTotals(newTotals);
  };

  const calculateTotal = useCallback((values: number[]) => {
    calculateTotalPerTier(values);
    const totalPower = values.reduce((total, value, index) => {
      return total + value * tierIntervals[index].power;
    }, 0);
    setTotal(totalPower);
  }, []);

  return (
    <Box maxWidth="80vw" margin="auto" id="troopCalculator">
      <Calculator
        intervals={tierIntervals}
        calculateTotal={calculateTotal}
        onClear={() => {
          setTotal(0);
          setTotals([]);
        }}
      />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6} md={3}>
          <Typography variant="h5" align="center" id="totalPower">
            Total Power: {total}
          </Typography>
        </Grid>
        {totals.map((total, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Typography
              variant="body1"
              align="center"
              id={`totalPower${index}`}
            >{`${tierIntervals[index].label}: ${total}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TroopCalculator;
