/// <reference types="Cypress" />

context("A basic cypress test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("will find the title", () => {
    cy.get("h1").within(() => {
      cy.contains("Hi From the boilerplate")
        .click()
        .end();
    });
  });
});
