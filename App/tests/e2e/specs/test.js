// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Visits the home page', () => {
    cy.visit('http://localhost:8080/')
  })
})
