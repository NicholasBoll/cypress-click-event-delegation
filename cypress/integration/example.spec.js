const getRelativeCoords = (containerSelector) =>
  function getRelativeCoords($el) {
    const $container = Cypress.$(containerSelector);

    const elementRect = $el[0].getBoundingClientRect();
    const containerRect = $container[0].getBoundingClientRect();

    const x = elementRect.width / 2 + elementRect.x - containerRect.x;
    const y = elementRect.height / 2 + elementRect.y - containerRect.y;

    return { x, y };
  };

describe("Example clicking with event delegation", () => {
  it("should click in the correct location of the containing element", () => {
    cy.visit("cypress/fixtures/index.html");

    cy.contains("Second Item")
      .pipe(getRelativeCoords(".container"))
      .then(({ x, y }) => {
        cy.get(".container").click(x, y);
      });
  });
});
