import React from "react";
import SpeedupCalculator from "../../../src/components/Calculators/SpeedupCalculator";
import SpeedupCalculatorPage from "../../models/Calculators/SpeedupCalculatorPage";

describe("<SpeedupCalculator />", () => {
  it("renders", () => {
    const speedupCalculatorPage = new SpeedupCalculatorPage();
    // see: https://on.cypress.io/mounting-react

    cy.mount(<SpeedupCalculator />);
    speedupCalculatorPage.inputTimeFields(1, 1, 49099);
    speedupCalculatorPage.clickSpeedupCheckbox();
    speedupCalculatorPage.inputSpeedupFields(9, "1");
    speedupCalculatorPage.clickCalculateButton();
    speedupCalculatorPage.verifyOutput("50599", "1");
    speedupCalculatorPage.clickClearButton();
    speedupCalculatorPage.verifyOutput("0");
    speedupCalculatorPage.verifyInputFieldsAreCleared(3);
  });
});
