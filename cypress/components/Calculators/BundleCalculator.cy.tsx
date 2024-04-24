// BundleCalculator.spec.js
import BundleCalculator from "../../../src/components/Calculators/BundleCalculator";
import { searchContainsId } from "../../support/utils";

describe("BundleCalculator", () => {
  it("calculates correctly", () => {
    cy.mount(<BundleCalculator />);

    // Fill in the input fields
    for (let i = 0; i <= 9; i++) {
      cy.get(`input[id="calcField${i}"]`).type(1);
    }

    // Click the "Calculate" button
    cy.get(searchContainsId("calculateButton")).click();

    // Verify the output
    cy.get(searchContainsId("totalMinutes")).should("contain", "50598");
    cy.get(searchContainsId("totalHours")).should("contain", "843.30");
    cy.get(searchContainsId("totalDays")).should("contain", "35.14");

    // Click the "Clear" button
    cy.get(searchContainsId("clearButton")).click();

    // Verify the input fields are cleared
    for (let i = 0; i <= 9; i++) {
      cy.get(searchContainsId(`calcField${i}`)).should("have.value", "");
    }

    cy.get(searchContainsId("totalMinutes")).should("contain", "0");
    cy.get(searchContainsId("totalHours")).should("contain", "0");
    cy.get(searchContainsId("totalDays")).should("contain", "0");
  });
});
