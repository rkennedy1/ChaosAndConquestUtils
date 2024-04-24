import Navigation from "../../src/components/Navigation";
import { searchById } from "../support/utils";

describe("<Navigation />", () => {
  beforeEach(() => {
    cy.mount(<Navigation />);
  });

  it("renders all tabs", () => {
    cy.get("[data-testid=bundle-calculator-tab]").should("be.visible");
    cy.get("[data-testid=troop-calculator-tab]").should("be.visible");
    cy.get("[data-testid=speedup-calculator-tab]").should("be.visible");
  });

  it("changes content on tab click", () => {
    // replace 'BundleCalculator content' with actual content or a part of it
    cy.get(searchById("bundleCalculator")).should("be.visible");

    cy.get("[data-testid=troop-calculator-tab]").click();
    // replace 'TroopCalculator content' with actual content or a part of it
    cy.get(searchById("troopCalculator")).should("be.visible");

    cy.get("[data-testid=speedup-calculator-tab]").click();
    // replace 'SpeedupCalculator content' with actual content or a part of it
    cy.get(searchById("speedupCalculator")).should("be.visible");
  });
});
