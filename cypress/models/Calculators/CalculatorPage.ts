import { searchById } from "../../support/utils";

class CalculatorPage {
  inputFields(length: number, value: string) {
    for (let i = 0; i < length; i++) {
      cy.get(`input[id="calcField${i}"]`).type(value);
    }
  }

  verifyInputFieldsExist(length: number) {
    for (let i = 0; i < length; i++) {
      cy.get(`input[id="calcField${i}"]`).should("exist");
    }
  }

  verifyCalculateButtonExists() {
    cy.get(searchById("calculateButton")).should("exist");
  }

  verifyClearButtonExists() {
    cy.get(searchById("clearButton")).should("exist");
  }

  verifyInputFieldsAreCleared(length: number) {
    for (let i = 0; i < length; i++) {
      cy.get(searchById(`calcField${i}`)).should("have.value", "0");
    }
  }
  clickClearButton = () => cy.get(searchById("clearButton")).click();
  clickCalculateButton = () => cy.get(searchById("calculateButton")).click();
}

export default CalculatorPage;
