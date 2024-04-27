import Navigation from "../../src/components/Navigation";
import { searchById } from "../support/utils";
import NavigationPage from "../models/NavigationPage";

describe("<Navigation />", () => {
  beforeEach(() => {
    cy.mount(<Navigation />);
  });

  it("renders all tabs", () => {
    const navigationPage = new NavigationPage();
    navigationPage.verifyTabsExist();
  });

  it("changes content on tab click", () => {
    const navigationPage = new NavigationPage();

    navigationPage.verifyBundleCalculatorContent();

    navigationPage.clickTroopCalculatorTab();
    navigationPage.verifyTroopCalculatorContent();

    navigationPage.clickSpeedupCalculatorTab();
    navigationPage.verifySpeedupCalculatorContent();
  });
});
