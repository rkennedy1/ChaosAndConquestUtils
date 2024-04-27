// BundleCalculator.spec.js
import BundleCalculator from "../../../src/components/Calculators/BundleCalculator";
import BundleCalculatorPage from "../../models/Calculators/BundleCalculatorPage";
import React from "react";

describe("BundleCalculator", () => {
  const bundleCalculatorPage = new BundleCalculatorPage();
  it("calculates correctly", () => {
    cy.mount(<BundleCalculator />);

    // Fill in the input fields
    bundleCalculatorPage.inputFields(10, "1");
    bundleCalculatorPage.inputPriceField("10");

    // Click the "Calculate" button
    bundleCalculatorPage.clickCalculateButton();
    // Verify the output
    bundleCalculatorPage.verifyOutput(50598, 10);

    // Click the "Clear" button
    bundleCalculatorPage.clickClearButton();
    // Verify the input fields are cleared
    bundleCalculatorPage.verifyInputFieldsAreCleared(10);

    bundleCalculatorPage.verifyOutput(0, 0);
  });
});
