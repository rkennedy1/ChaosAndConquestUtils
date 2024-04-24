import React from "react";
import SpeedupCalculator from "../../../src/components/Calculators/SpeedupCalculator";

describe("<SpeedupCalculator />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SpeedupCalculator />);
  });
});
