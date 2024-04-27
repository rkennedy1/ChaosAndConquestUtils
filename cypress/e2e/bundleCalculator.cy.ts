import { waitForPageLoad, webURL } from "../support/utils";
import BundleCalculatorPage from "../models/Calculators/BundleCalculatorPage";
describe("verify persisted data", () => {
  it("passes", () => {
    const bundleCalculatorPage = new BundleCalculatorPage();

    cy.visit(webURL);
    waitForPageLoad();
    const speedupFieldCount = 10;
    const troopsFieldCount = 5;
    const staminaFieldCount = 4;
    const price = 5;

    bundleCalculatorPage.inputFields(speedupFieldCount, "1");
    bundleCalculatorPage.inputPriceField(price);
    bundleCalculatorPage.clickCalculateButton();
    bundleCalculatorPage.verifyOutput(50598, price, "speedups");

    bundleCalculatorPage.selectType("troops");
    bundleCalculatorPage.verifyInputFieldsAreCleared(troopsFieldCount);
    bundleCalculatorPage.inputFields(troopsFieldCount, "1");
    bundleCalculatorPage.inputPriceField(price);
    bundleCalculatorPage.clickCalculateButton();
    bundleCalculatorPage.verifyOutput(249, price, "troops");

    bundleCalculatorPage.selectType("stamina");
    bundleCalculatorPage.verifyInputFieldsAreCleared(staminaFieldCount);
    bundleCalculatorPage.inputFields(staminaFieldCount, "1");
    bundleCalculatorPage.inputPriceField(price);
    bundleCalculatorPage.clickCalculateButton();
    bundleCalculatorPage.verifyOutput(6600, price, "stamina");
  });
});
