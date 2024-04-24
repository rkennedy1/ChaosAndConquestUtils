import React from "react";
import TroopCalculator from "../../../src/components/Calculators/TroopCalculator";
import { searchById } from "../../support/utils";

describe("<TroopCalculator />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TroopCalculator />);

    for (let i = 0; i <= 4; i++) {
      cy.get(`input[id="calcField${i}"]`).type(1);
    }

    cy.get("#calculateButton").click();
    cy.get(searchById("totalPower")).contains("Total Power: 249");

    cy.get(searchById(`totalPower0`)).contains("Tier 1: 4");
    cy.get(searchById(`totalPower1`)).contains("Tier 2: 10");
    cy.get(searchById(`totalPower2`)).contains("Tier 3: 25");
    cy.get(searchById(`totalPower3`)).contains("Tier 4: 60");
    cy.get(searchById(`totalPower4`)).contains("Tier 5: 150");

    cy.get("#clearButton").click();
    cy.get(searchById("totalPower")).contains("Total Power: 0");
    for (let i = 0; i <= 4; i++) {
      cy.get(`input[id="calcField${i}"]`).should("have.value", "0");
    }
  });
});
