import { searchById } from "../../support/utils";
import CalculatorPage from "./CalculatorPage";

class TroopCalculatorPage extends CalculatorPage {
  private readonly totalPowerSelector = searchById("totalPower");

  public verifyTotalPower(totalPower: string) {
    cy.get(searchById("totalPower")).contains(`Total Power: ${totalPower}`);
  }

  verifyPowerTiers(values: string[]) {
    for (let i = 0; i <= 4; i++) {
      cy.get(searchById(`totalPower${i}`)).contains(values[i]);
    }
  }
}

export default TroopCalculatorPage;
