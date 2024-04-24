import Calculator from "../../../src/components/Calculators/Calculator";

describe("<Calculator />", () => {
  it("renders", () => {
    cy.mount(
      <Calculator
        intervals={[
          { label: "1", minutes: 1 },
          { label: "2", minutes: 2 },
          { label: "3", minutes: 3 },
          { label: "4", minutes: 4 },
          { label: "5", minutes: 5 },
          { label: "6", minutes: 6 },
          { label: "7", minutes: 7 },
          { label: "8", minutes: 8 },
          { label: "9", minutes: 9 },
          { label: "10", minutes: 10 },
        ]}
        calculateTotal={() => {}}
        onClear={() => {}}
      />
    );

    for (let i = 0; i <= 9; i++) {
      cy.get(`input[id="calcField${i}"]`).should("exist");
    }

    cy.get("#calculateButton").should("exist");
    cy.get("#clearButton").should("exist");
  });
});
