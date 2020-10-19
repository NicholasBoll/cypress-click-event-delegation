const clickRelativeCoords = (elementAlias) =>
  function clickRelativeCoords($container) {
    const $element = cy.state("aliases")[elementAlias].subject;

    const elementRect = $element[0].getBoundingClientRect();
    const containerRect = $container[0].getBoundingClientRect();

    const x = elementRect.width / 2 + elementRect.x - containerRect.x;
    const y = elementRect.height / 2 + elementRect.y - containerRect.y;

    cy.wrap($container).click(x, y);
  };

describe("Example clicking with event delegation", () => {
  it("should click in the correct location of the containing element", () => {
    cy.visit("cypress/fixtures/index.html");

    cy.contains("Second Item").as("secondItem");

    cy.get(".container").pipe(clickRelativeCoords("secondItem"));
  });
});
