import React from "react";
import TabPanel from "../../src/components/TabPanel";
import SpeedupCalculator from "../../src/components/Calculators/SpeedupCalculator";
import { searchById } from "../support/utils";

describe("<TabPanel />", () => {
  it("renders and tab shown", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TabPanel value={2} index={2}>
        <SpeedupCalculator />
      </TabPanel>
    );
    cy.get(searchById("speedupCalculator")).should("be.visible");
  });

  it("renders and tab hidden", () => {
    cy.mount(
      <TabPanel value={1} index={2}>
        <SpeedupCalculator />
      </TabPanel>
    );
    cy.get(searchById("speedupCalculator")).should("not.exist");
  });
});
