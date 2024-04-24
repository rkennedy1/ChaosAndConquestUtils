// Calculator.tsx
import { useState, useCallback } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

type CalculatorProps = {
  intervals: { label: string }[];
  calculateTotal: (values: number[]) => void;
};

const Calculator = ({ intervals, calculateTotal }: CalculatorProps) => {
  const [values, setValues] = useState(Array(intervals.length).fill(0));

  const handleChange = useCallback(
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = [...values];
      newValues[index] = Number(event.target.value);
      setValues(newValues);
    },
    [values]
  );

  const clearValues = useCallback(() => {
    setValues(Array(intervals.length).fill(0));
  }, [intervals.length]);

  return (
    <Grid container spacing={2}>
      {intervals.map((interval, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <TextField
            fullWidth
            label={interval.label}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={values[index]}
            onChange={handleChange(index)}
            inputProps={{
              min: 0,
              step: 1,
            }}
          />
        </Grid>
      ))}
      <Grid item xs={6} sm={4} md={3}>
        <Box width={1} height={1}>
          <Button
            variant="contained"
            onClick={() => calculateTotal(values)}
            fullWidth
          >
            Calculate
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Box width={1} height={1}>
          <Button variant="contained" onClick={clearValues} fullWidth>
            Clear
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Calculator;
