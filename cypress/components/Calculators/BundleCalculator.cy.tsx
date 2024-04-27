// BundleCalculator.spec.js
import BundleCalculator from "../../../src/components/Calculators/BundleCalculator";
import { searchContainsId } from "../../support/utils";
import BundleCalculatorPage from "../../models/Calculators/BundleCalculatorPage";

describe("BundleCalculator", () => {
  const bundleCalculatorPage = new BundleCalculatorPage();
  it("calculates correctly", () => {
    cy.mount(<BundleCalculator />);

    // Fill in the input fields
    bundleCalculatorPage.inputFields(10, "1");

    // Click the "Calculate" button
    bundleCalculatorPage.clickCalculateButton();
    // Verify the output
    bundleCalculatorPage.verifyOutput("50598", "843.30", "35.14");

    // Click the "Clear" button
    bundleCalculatorPage.clickClearButton();
    // Verify the input fields are cleared
    bundleCalculatorPage.verifyInputFieldsAreCleared(10);

    bundleCalculatorPage.verifyOutput("0", "0", "0");
  });
});
