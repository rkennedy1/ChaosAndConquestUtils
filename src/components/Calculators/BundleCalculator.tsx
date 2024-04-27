// BundleCalculator.tsx
import { useCallback, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Calculator from "./Calculator";
import speedupIntervals from "../../data/speedupIntervals.json";

function BundleCalculator() {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const calculateTotal = useCallback((values: number[]) => {
    const totalMinutes = values.reduce((total, value, index) => {
      return total + value * speedupIntervals[index].minutes;
    }, 0);
    setTotal(totalMinutes);
  }, []);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const calculateTime = (divisor: number) => {
    return total % divisor == 0
      ? total / divisor
      : (total / divisor).toFixed(2);
  };

  return (
    <Box maxWidth="80vw" margin="auto" id="bundleCalculator">
      <Calculator
        intervals={speedupIntervals}
        calculateTotal={calculateTotal}
        onClear={() => {
          setTotal(0);
          setPrice(0);
        }}
      />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={6} sm={4} md={2}>
          <TextField
            fullWidth
            label="Bundle Cost ($)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={price}
            onChange={handlePriceChange}
            id="bundleCost"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="h5" align="center" id="totalTime">
            Total Time
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="body1"
            align="center"
            id="totalMinutes"
          >{`Minutes: ${total}`}</Typography>
          {price > 0 && (
            <Typography variant="body1" align="center" id="minutesPerDollar">
              {`${calculateTime(price)} mins/$`}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="body1"
            align="center"
            id="totalHours"
          >{`Hours: ${calculateTime(60)}`}</Typography>
          {price > 0 && (
            <Typography variant="body1" align="center" id="hoursPerDollar">
              {`${calculateTime(60 * price)} hours/$`}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="body1"
            align="center"
            id="totalDays"
          >{`Days: ${calculateTime(60 * 24)}`}</Typography>
          {price > 0 && (
            <Typography variant="body1" align="center" id="daysPerDollar">
              {`${calculateTime(60 * 24 * price)} days/$`}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default BundleCalculator;
