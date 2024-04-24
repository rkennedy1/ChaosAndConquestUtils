import React from "react";
import SpeedupCalculator from "../../../src/components/Calculators/SpeedupCalculator";
import { searchContainsId } from "../../support/utils";

describe("<SpeedupCalculator />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    cy.mount(<SpeedupCalculator />);
    cy.get(`input[id="calcField0"]`).type(1);
    cy.get(`input[id="calcField1"]`).type(1);
    cy.get(`input[id="calcField2"]`).type(49099);

    cy.get(searchContainsId("speedupCheckbox")).click();
    for (let i = 0; i <= 9; i++) {
      cy.get(`input[id="speedupField${i}"]`).type(1);
    }

    cy.get("#calculateButton").click();

    cy.get(searchContainsId("totalMinutes")).contains("50599");
    cy.get(searchContainsId("remainingTotal")).contains("1");
  });
});
