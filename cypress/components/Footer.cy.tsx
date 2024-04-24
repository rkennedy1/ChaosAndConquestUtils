import Footer from "../../src/components/Footer";

describe("<Footer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />);
  });
});
