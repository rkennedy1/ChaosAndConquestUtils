import React from "react";
import TroopCalculator from "../../../src/components/Calculators/TroopCalculator";
import { searchById } from "../../support/utils";
import TroopCalculatorPage from "../../models/Calculators/TroopCalculatorPage";

describe("<TroopCalculator />", () => {
  it("renders", () => {
    const troopCalculatorPage = new TroopCalculatorPage();
    cy.mount(<TroopCalculator />);

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

    troopCalculatorPage.clickClearButton();
    troopCalculatorPage.verifyTotalPower("0");
    troopCalculatorPage.verifyInputFieldsAreCleared(5);
  });
});
