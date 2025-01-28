describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.intercept('POST', 'https://adopet-frontend-cypress.vercel.app/' ,{
      statusCode:400, }).as('stub post ')
  })
    it('Deve preencher os campos do formulário de forma incorreta', () => {
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })

    it('', () => {
      
    })
  })

