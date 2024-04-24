import React from "react";
import TroopCalculator from "../../../src/components/Calculators/TroopCalculator";

describe("<TroopCalculator />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TroopCalculator />);
  });
});
