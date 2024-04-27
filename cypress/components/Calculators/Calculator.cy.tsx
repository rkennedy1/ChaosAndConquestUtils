import Calculator from "../../../src/components/Calculators/Calculator";
import CalculatorPage from "../../models/Calculators/CalculatorPage";

describe("<Calculator />", () => {
  it("renders", () => {
    const calculatorPage = new CalculatorPage();
    cy.mount(
      <Calculator
        intervals={[
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "7" },
          { label: "8" },
          { label: "9" },
          { label: "10" },
        ]}
        calculateTotal={() => {}}
        onClear={() => {}}
      />
    );

    calculatorPage.verifyInputFieldsExist(9);

    calculatorPage.verifyCalculateButtonExists();
    calculatorPage.verifyClearButtonExists();
  });
});
