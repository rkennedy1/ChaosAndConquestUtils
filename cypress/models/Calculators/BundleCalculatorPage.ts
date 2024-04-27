import { searchById } from "../../support/utils";
import CalculatorPage from "./CalculatorPage";

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

  public inputPriceField(price: string) {
    cy.get(searchById("bundleCost")).type(price);
  }
  public verifyOutput(totalMinutes: number, price: number) {
    cy.get(searchById("totalMinutes")).contains(totalMinutes);
    cy.get(searchById("totalHours")).contains(
      this.calculateTime(totalMinutes, 60)
    );
    cy.get(searchById("totalDays")).contains(
      this.calculateTime(totalMinutes, 60 * 24)
    );
    cy.get(searchById("bundleCost")).should("contain.value", price);
    if (price > 0) {
      cy.get(searchById("minutesPerDollar")).contains(
        `${this.calculateTime(totalMinutes, price)} mins/$`
      );
      cy.get(searchById("hoursPerDollar")).contains(
        `${this.calculateTime(totalMinutes, 60 * price)} hours/$`
      );
      cy.get(searchById("daysPerDollar")).contains(
        `${this.calculateTime(totalMinutes, 60 * 24 * price)} days/$`
      );
    }
  }
}

export default BundleCalculatorPage;
