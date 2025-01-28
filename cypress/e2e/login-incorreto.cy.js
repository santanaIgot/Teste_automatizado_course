describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos do login incorretamente', () => {
        cy.loginIncorreto('igot0@gmail.com','Senha423')
      })
})