// BundleCalculator.tsx
import { useCallback, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Calculator from "../Calculator";
import intervals from "../../../data/intervals.json";
import BundleCalculatorOutput from "./BundleCalculatorOutput";
import { Interval } from "../../../types/BundleCalculator";

function BundleCalculator() {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("speedups");
  const [selectedIntervals, setSelectedIntervals] = useState<Interval[]>(
    intervals.find((interval) => interval.type === "speedups")?.values ?? []
  );
  const [triggerClear, setTriggerClear] = useState(false);

  const calculateTotal = useCallback(
    (values: number[]) => {
      const summedTotal = values.reduce((total, value, index) => {
        const interval = selectedIntervals[index];
        if (!interval) {
          return total;
        }
        if ("value" in interval) {
          return total + value * interval.value;
        } else {
          return (
            total +
            value * interval.values.reduce((total, val) => total + val.value, 0)
          );
        }
      }, 0);
      setTotal(summedTotal);
    },
    [selectedIntervals]
  );

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value);
    handleClearValues();
    setTriggerClear(true);
    setSelectedIntervals(
      intervals.find((interval) => {
        return interval.type === event.target.value;
      })?.values ?? []
    );
  };

  const handleClearValues = () => {
    setTotal(0);
    setPrice(0);
  };

  return (
    <Box maxWidth="80vw" margin="auto" id="bundleCalculator">
      <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
        <InputLabel id="selectTypeLabel">Select Type</InputLabel>
        <Select
          labelId="selectTypeLabel"
          id="selectType"
          value={type}
          defaultValue="speedups"
          onChange={handleTypeChange}
        >
          {intervals.map((interval) => (
            <MenuItem
              key={interval.type}
              value={interval.type}
              id={interval.type}
            >
              {interval.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {intervals && (
        <Calculator
          intervals={selectedIntervals}
          calculateTotal={calculateTotal}
          onClear={handleClearValues}
          triggerClear={triggerClear}
          setTriggerClear={setTriggerClear}
        />
      )}
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
        <BundleCalculatorOutput total={total} price={price} type={type} />
      </Grid>
    </Box>
  );
}

export default BundleCalculator;
