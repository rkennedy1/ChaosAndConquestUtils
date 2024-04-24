//TroopCalculator.tsx
import { useCallback, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Calculator from "./Calculator";
import speedupIntervals from "../../data/speedupIntervals.json";

const interval = [
  { label: "Days", minutes: 1440 },
  { label: "Hours", minutes: 60 },
  { label: "Minutes", minutes: 1 },
];

function SpeedupCalculator() {
  const [total, setTotal] = useState(0);
  const [totals, setTotals] = useState<number[]>([]);
  const [remainingTotal, setRemainingTotal] = useState(0);
  const [showSpeedups, setShowSpeedups] = useState(false);
  const [speedups, setSpeedups] = useState(
    Array(speedupIntervals.length).fill(0)
  );

  const calculateSpeedupAmounts = useCallback(
    (newTotal: number) => {
      if (speedups.length !== speedupIntervals.length) {
        throw new Error(
          "Speedups array and speedup types array must have the same length"
        );
      }
      const amounts: number[] = [];
      let currentRemainingTotal = newTotal;
      for (let i = 0; i < speedupIntervals.length; i++) {
        const speedMinutes = speedupIntervals[i].minutes;

        const amount = Math.floor(currentRemainingTotal / speedMinutes);
        if (amount === 0) {
          amounts.push(0);
          continue;
        }
        if (showSpeedups) {
          const speedupAmount = Math.min(amount, speedups[i]);
          amounts.push(speedupAmount);
          currentRemainingTotal -= speedupAmount * speedMinutes;
        } else {
          amounts.push(amount);
          currentRemainingTotal -= amount * speedMinutes;
        }
      }
      setRemainingTotal(currentRemainingTotal);
      setTotals(amounts);
    },
    [showSpeedups, speedups]
  );

  const calculateTotal = useCallback(
    (values: number[]) => {
      let newTotal = 0;
      values.map((value, index) => {
        newTotal += value * interval[index].minutes;
      });
      calculateSpeedupAmounts(newTotal);
      setTotal(newTotal);
    },
    [calculateSpeedupAmounts]
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSpeedups(event.target.checked);
  };

  const handleSpeedupChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSpeedups = [...speedups];
      newSpeedups[index] = Number(event.target.value);
      setSpeedups(newSpeedups);
    };

  return (
    <Box maxWidth="80vw" margin="auto" id="speedupCalculator">
      <Calculator
        intervals={interval}
        calculateTotal={calculateTotal}
        onClear={() => {
          setTotal(0);
          setTotals([]);
        }}
      />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Typography variant="h5" align="center" id="totalMinutes">
            Total minutes: {total}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showSpeedups}
                onChange={handleCheckboxChange}
                id="speedupCheckbox"
              />
            }
            label="I have speedups"
          />
        </Grid>
        {showSpeedups && (
          <Grid container spacing={2}>
            {speedupIntervals.map((type, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <TextField
                  fullWidth
                  label={type.label}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={speedups[index]}
                  onChange={handleSpeedupChange(index)}
                  inputProps={{
                    min: 0,
                    step: 1,
                  }}
                  id={`speedupField${index}`}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {totals.map((total, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Typography
              variant="body1"
              align="center"
            >{`${speedupIntervals[index].label}: ${total}`}</Typography>
          </Grid>
        ))}
        {remainingTotal > 0 && (
          <Grid item xs={6}>
            <Typography variant="h5" align="center" id="remainingTotal">
              Remaining: {remainingTotal} minutes
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default SpeedupCalculator;

/*

*/
