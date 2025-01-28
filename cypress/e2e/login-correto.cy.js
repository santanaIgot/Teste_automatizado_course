describe('Página de login', () => {
    // antes de cada teste, rode este comando 
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
      cy.login('igot02@gmail.com','Senha123')
    
    })
})

// Cypress.Commands.add('login', (email, password) => { ... })
