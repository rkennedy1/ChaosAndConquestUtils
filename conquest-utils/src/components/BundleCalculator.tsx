// BundleCalculator.tsx
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const timeIntervals = [
  { label: "3 min", minutes: 3 },
  { label: "15 min", minutes: 15 },
  { label: "1 hour", minutes: 60 },
  { label: "3 hours", minutes: 180 },
  { label: "8 hours", minutes: 480 },
  { label: "15 hours", minutes: 900 },
  { label: "1 day", minutes: 1440 },
  { label: "3 days", minutes: 4320 },
  { label: "10 days", minutes: 14400 },
  { label: "20 days", minutes: 28800 },
];

function BundleCalculator() {
  const [values, setValues] = useState(Array(timeIntervals.length).fill(0));
  const [total, setTotal] = useState(0);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = [...values];
      newValues[index] = event.target.value;
      setValues(newValues);
    };

  const calculateTotal = () => {
    let totalMinutes = 0;
    for (let i = 0; i < timeIntervals.length; i++) {
      totalMinutes += values[i] * timeIntervals[i].minutes;
    }
    setTotal(totalMinutes);
  };

  const clearValues = () => {
    setValues(Array(timeIntervals.length).fill(0));
    setTotal(0);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {timeIntervals.map((interval, index) => (
        <TextField
          key={index}
          label={interval.label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={values[index]}
          onChange={handleChange(index)}
        />
      ))}
      <Button variant="contained" onClick={calculateTotal}>
        Calculate Total
      </Button>
      <Button variant="contained" onClick={clearValues}>
        Clear
      </Button>
      <div>Total: {total} minutes</div>
      <div>Total: {total / 60} hours</div>
      <div>Total: {total / 60 / 24} days</div>
    </Box>
  );
}

export default BundleCalculator;
