import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import outputLabels from "../../../data/outputLabels.json";
import { outputLabel } from "../../../types/BundleCalculator";

interface BundleCalculatorOutputProps {
  total: number;
  price: number;
  type: string;
}

function BundleCalculatorOutput(props: BundleCalculatorOutputProps) {
  const { total, price, type } = props;
  const [outputLabel, setOutputLabel] = useState<outputLabel | undefined>(
    outputLabels.find((output) => output.type === type)
  );

  useEffect(() => {
    setOutputLabel(outputLabels.find((output) => output.type === type));
  }, [type]);

  const calculateTime = (value: number) => {
    return total % value === 0 ? total / value : (total / value).toFixed(2);
  };

  return (
    <>
      <Grid item xs={6} md={3}>
        <Typography
          variant="h5"
          align="center"
          id={`${outputLabel?.type}-${outputLabel?.id}`}
        >
          {outputLabel?.label}: {total}
        </Typography>
      </Grid>
      {outputLabel?.labels.map((label, index) => (
        <Grid item xs={6} sm={4} md={2} key={index}>
          <Typography
            variant="body1"
            component={"span"}
            align="center"
            id={`${label.label}-${label.id}`}
          >{`${label.label}: ${calculateTime(label.value)}`}</Typography>
          {price > 0 && (
            <Typography
              variant="body1"
              align="center"
              id={`${label.label}PerDollar`}
            >
              {`${calculateTime(label.value * price)} ${label.unit}/$`}
            </Typography>
          )}
        </Grid>
      ))}
    </>
  );
}

export default BundleCalculatorOutput;
