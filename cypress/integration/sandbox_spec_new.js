
describe('Testing sandbox', () => {
  it('should click in this version', () => {
    //new site
    cy.visit('https://csb-jvnv6.netlify.app')
    cy.get('[data-test-id=welcome-button]')
      .click()
    cy.get('#changing-this')
      .should('have.text', 'Changed this text with a button click!')
  })
})
