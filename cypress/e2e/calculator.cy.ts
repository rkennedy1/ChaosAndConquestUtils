import { waitForPageLoad, webURL } from "../support/utils";
import SpeedupCalculatorPage from "../models/Calculators/SpeedupCalculatorPage";
import BundleCalculatorPage from "../models/Calculators/BundleCalculatorPage";
import TroopCalculatorPage from "../models/Calculators/TroopCalculatorPage";
import NavigationPage from "../models/NavigationPage";
describe("verify persisted data", () => {
  it("passes", () => {
    const navigationPage = new NavigationPage();
    const bundleCalculatorPage = new BundleCalculatorPage();
    const troopCalculatorPage = new TroopCalculatorPage();
    const speedupCalculatorPage = new SpeedupCalculatorPage();

    cy.visit(webURL);
    waitForPageLoad();

    navigationPage.verifyTabsExist();
    navigationPage.verifyBundleCalculatorContent();

    bundleCalculatorPage.inputFields(10, "1");
    bundleCalculatorPage.inputPriceField("10");
    bundleCalculatorPage.clickCalculateButton();
    bundleCalculatorPage.verifyOutput(50598, 10, "speedups");

    navigationPage.clickTroopCalculatorTab();
    navigationPage.verifyTroopCalculatorContent();

    troopCalculatorPage.inputFields(5, "1");
    troopCalculatorPage.clickCalculateButton();
    troopCalculatorPage.verifyTotalPower("249");
    troopCalculatorPage.verifyPowerTiers([
      "Tier 1: 4",
      "Tier 2: 10",
      "Tier 3: 25",
      "Tier 4: 60",
      "Tier 5: 150",
    ]);

    navigationPage.clickSpeedupCalculatorTab();
    navigationPage.verifySpeedupCalculatorContent();

    speedupCalculatorPage.inputTimeFields(1, 1, 49099);
    speedupCalculatorPage.clickSpeedupCheckbox();
    speedupCalculatorPage.inputSpeedupFields(9, "1");
    speedupCalculatorPage.clickCalculateButton();
    speedupCalculatorPage.verifyOutput("50599", "1");
  });
});
