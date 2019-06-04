/* eslint-disable no-undef */
describe('List', () => {
  it('Page loads with List component', () => {
    cy.visit('http://localhost:3000')
    cy.get('.list-view').should('exist')
  })
  it('should activate loading state when page is first visited', () => {
    cy.visit('http://localhost:3000')
    cy.get('.loader').should('exist')
  })
  it('should render listItem component', () => {
    cy.visit('http://localhost:3000')
    cy.get('a').should('have.attr', 'href').should('exist')
  })
  it('should render more results on scroll', () => {
    cy.visit('http://localhost:3000')
    cy.scrollTo('bottom')
    cy.get('.loader').then(() => {
      cy.get('a').last().should('have.attr', 'href').should('not.eq', cy.get('a').first())
    })
  })
  it('should navigate to ship page', () => {
    cy.visit('http://localhost:3000')
    cy.get('a').should('have.attr', 'href').then((href) => {
      cy.visit('http://localhost:3000' + href)
    })
  })
  it('ship page should render data', () => {
    cy.visit('http://localhost:3000')
    cy.get('a').should('have.attr', 'href').then((href) => {
      cy.visit('http://localhost:3000' + href)
    }).then(() => {
      cy.get('h2').invoke('text').should('not.be.empty')
    })
  })
})
