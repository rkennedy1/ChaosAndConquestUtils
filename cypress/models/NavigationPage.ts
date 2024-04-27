import { searchById } from "../support/utils";

class NavigationPage {
  private readonly bundleCalculatorTabSelector = `[data-testid=bundle-calculator-tab]`;
  private readonly bundleCalculatorContentSelector =
    searchById("bundleCalculator");
  private readonly troopCalculatorTabSelector = `[data-testid=troop-calculator-tab]`;
  private readonly troopCalculatorContentSelector =
    searchById("troopCalculator");
  private readonly speedupCalculatorTabSelector = `[data-testid=speedup-calculator-tab]`;
  private readonly speedupCalculatorContentSelector =
    searchById("speedupCalculator");

  public clickBundleCalculatorTab() {
    cy.get(this.bundleCalculatorTabSelector).click();
  }

  public clickTroopCalculatorTab() {
    cy.get(this.troopCalculatorTabSelector).click();
  }

  public clickSpeedupCalculatorTab() {
    cy.get(this.speedupCalculatorTabSelector).click();
  }

  public verifyBundleCalculatorTabExists() {
    cy.get(this.bundleCalculatorTabSelector).should("be.visible");
  }

  public verifyBundleCalculatorContent() {
    cy.get(this.bundleCalculatorContentSelector).should("be.visible");
  }

  public verifyTroopCalculatorTabExists() {
    cy.get(this.troopCalculatorTabSelector).should("be.visible");
  }

  public verifyTroopCalculatorContent() {
    cy.get(this.troopCalculatorContentSelector).should("be.visible");
  }

  public verifySpeedupCalculatorTabExists() {
    cy.get(this.speedupCalculatorTabSelector).should("be.visible");
  }

  public verifySpeedupCalculatorContent() {
    cy.get(this.speedupCalculatorContentSelector).should("be.visible");
  }

  public verifyTabsExist() {
    this.verifyBundleCalculatorTabExists();
    this.verifyTroopCalculatorTabExists();
    this.verifySpeedupCalculatorTabExists();
  }
}
export default NavigationPage;
