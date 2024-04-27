import { searchById } from "../../support/utils";
import CalculatorPage from "./CalculatorPage";

class BundleCalculatorPage extends CalculatorPage {
  public verifyOutput(totalMinutes, totalHours, totalDays) {
    cy.get(searchById("totalMinutes")).should("contain", totalMinutes);
    cy.get(searchById("totalHours")).should("contain", totalHours);
    cy.get(searchById("totalDays")).should("contain", totalDays);
  }
}

export default BundleCalculatorPage;
