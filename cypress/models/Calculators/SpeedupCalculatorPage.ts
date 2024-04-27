import { searchById } from "../../support/utils";
import CalculatorPage from "./CalculatorPage";

class SpeedupCalculatorPage extends CalculatorPage {
  private readonly daysFieldSelector = `input[id="calcField0"]`;
  private readonly hoursFieldSelector = `input[id="calcField1"]`;
  private readonly minutesFieldSelector = `input[id="calcField2"]`;
  private readonly speedupCheckboxSelector = searchById("speedupCheckbox");
  private readonly totalMinutesSelector = searchById("totalMinutes");
  private readonly remainingTotalSelector = searchById("remainingTotal");

  public inputTimeFields(days: number, hours: number, minutes: number) {
    cy.get(this.daysFieldSelector).type(days.toString());
    cy.get(this.hoursFieldSelector).type(hours.toString());
    cy.get(this.minutesFieldSelector).type(minutes.toString());
  }

  public clickSpeedupCheckbox() {
    cy.get(this.speedupCheckboxSelector).click();
  }

  public inputSpeedupFields(length: number, value: string) {
    for (let i = 0; i <= length; i++) {
      cy.get(`input[id="speedupField${i}"]`).type(value);
    }
  }

  public verifyOutput(totalMinutes: string, remainingTotal?: string) {
    cy.get(this.totalMinutesSelector).contains(totalMinutes);
    if (remainingTotal) {
      cy.get(this.remainingTotalSelector).contains(remainingTotal);
    }
  }
}

export default SpeedupCalculatorPage;
