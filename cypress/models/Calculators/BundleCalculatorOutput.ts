import outputLabels from "../../../src/data/outputLabels.json";
import { searchById } from "../../support/utils";
import { outputLabel } from "../../../src/types/BundleCalculator";

class BundleCalculatorOutput {
  private readonly type: string;
  private readonly currentLabel: outputLabel | undefined;
  private readonly total: number = 0;

  constructor(type: string, total: number) {
    this.type = type;
    this.currentLabel = outputLabels.find((output) => output.type === type);
    this.total = total;
  }

  calculateValue = (value: number) => {
    console.log(
      this.total,
      value,
      this.total % value === 0,
      this.total / value
    );
    return this.total % value === 0
      ? this.total / value
      : (this.total / value).toFixed(2);
  };

  public verifyTotal(price: number = 0) {
    cy.get(
      searchById(`${this.currentLabel.type}-${this.currentLabel.id}`)
    ).contains(`${this.currentLabel?.label}: ${this.total}`);
    this.currentLabel.labels.forEach((label) => {
      cy.get(searchById(`${label.label}-${label.id}`)).contains(
        `${label.label}: ${this.calculateValue(label.value)}`
      );
      if (price > 0) {
        cy.get(searchById(`${label.label}PerDollar`)).contains(
          `${this.calculateValue(label.value * price)} ${label.unit}/$`
        );
      }
    });
  }
}

export default BundleCalculatorOutput;
