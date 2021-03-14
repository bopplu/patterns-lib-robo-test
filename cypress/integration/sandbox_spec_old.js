
describe('Testing sandbox', () => {
  it('should click in this version', () => {
    //old site
    cy.visit('https://csb-2ocvd.netlify.app')
    cy.get('[data-test-id=welcome-button]')
      .click()
    cy.get('#changing-this')
      .should('have.text', 'Changed this text with a button click!')
  })
})
