import { searchById } from "../../support/utils";
import CalculatorPage from "./CalculatorPage";
import BundleCalculatorOutput from "../Calculators/BundleCalculatorOutput";

class BundleCalculatorPage extends CalculatorPage {
  public calculateTime(total: number, divisor: number) {
    return total % divisor == 0
      ? total / divisor
      : (total / divisor).toFixed(2);
  }

  public verifyInputFieldsAreCleared(length: number): void {
    for (let i = 0; i < length; i++) {
      cy.get(searchById(`calcField${i}`)).should("have.value", "0");
    }
    cy.get(searchById("bundleCost")).should("have.value", "0");
  }

  public inputPriceField(price: number) {
    cy.get(searchById("bundleCost")).type(price.toString());
  }
  public verifyOutput(value: number, price: number, type: string = "speedups") {
    const bundleCalculatorOutput = new BundleCalculatorOutput(type, value);
    bundleCalculatorOutput.verifyTotal(price);
  }

  public selectType(type: string) {
    cy.get(searchById("selectType")).click();
    cy.get(searchById(type)).click();
  }
}

export default BundleCalculatorPage;
