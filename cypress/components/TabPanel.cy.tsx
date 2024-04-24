import React from "react";
import TabPanel from "../../src/components/TabPanel";

describe("<TabPanel />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TabPanel />);
  });
});
